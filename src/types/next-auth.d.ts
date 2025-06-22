// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}
