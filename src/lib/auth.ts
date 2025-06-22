import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";
import { Resend } from "resend";
import type { Adapter } from "next-auth/adapters";

const resend = new Resend();

export const roles = {
  FREE: "free",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const;

type Role = (typeof roles)[keyof typeof roles];

const sendVerificationRequest = async ({
  identifier: email,
  url,
}: {
  identifier: string;
  url: string;
}): Promise<void> => {
  const result = await resend.emails.send({
    from: "no-reply@instalanding.ai",
    to: email,
    subject: "Sign in to InstaLanding AI",
    html: `
      <div style="font-family: sans-serif; font-size: 16px; color: #111;">
        <p>Hello 👋,</p>
        <p>Click the button below to sign in to <strong>InstaLanding AI</strong>.</p>
        <p><a href="${url}" style="background-color: #111; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Sign In</a></p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });

  if (result.error) {
    console.error("Resend email failed:", result.error);
    throw new Error("Email failed to send.");
  }
};

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    EmailProvider({
      maxAge: 15 * 60,
      sendVerificationRequest,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = (user as { role?: Role }).role || roles.FREE;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
export const getAuthSession = () => getServerSession(authOptions);
