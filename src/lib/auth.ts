import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import  prisma  from "@/lib/db";
import { Resend } from "resend";
import type { Adapter } from "next-auth/adapters"; // Add this to fix the adapter type error

const resend = new Resend;

// Role definitions
export const roles = {
  FREE: "free",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const;

type Role = (typeof roles)[keyof typeof roles];

// Custom send verification email for magic links
const sendVerificationRequest = async ({
  identifier: email,
  url,
}: {
  identifier: string;
  url: string;
}) => {
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

// NextAuth config
const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter, // Cast to correct type to fix conflict
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
      maxAge: 15 * 60, // 15 minutes
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
        token.role = (user as any).role || roles.FREE;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        (session.user as any).role = token.role as Role;
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

// For server components and API routes
export const getAuthSession = () => getServerSession(authOptions);
