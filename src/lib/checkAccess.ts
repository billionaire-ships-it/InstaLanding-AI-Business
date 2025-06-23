// src/lib/checkAccess.ts
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { getUserPlanStatus } from "@/lib/plan";
import { redirect } from "next/navigation";

export async function checkAccess() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const { isActive, isTrial } = await getUserPlanStatus(session.user.email);

  const hasAccess = isActive || isTrial;

  if (!hasAccess) {
    redirect("/subscribe");
  }

  return { session, isActive, isTrial };
}

