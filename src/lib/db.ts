import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "error", "warn"],
  });
  
  export type User = {
  id: string
  email: string
  name?: string
  trialStartDate?: Date
  subscriptionPlanId?: 'starter' | 'pro' | 'empire' | null
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
export default Prisma