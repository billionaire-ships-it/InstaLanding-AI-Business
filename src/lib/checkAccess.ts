import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { getUserPlanStatus } from "@/lib/plan";
import { redirect } from "next/navigation";

export async function checkAccess({ redirectIfInvalid = true }: { redirectIfInvalid?: boolean } = {}) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  const { isActive, isTrial, isExpired } = await getUserPlanStatus(session.user.email);

  if (!isActive && !isTrial && redirectIfInvalid) {
    redirect("/subscribe");
  }

  return { session, isActive, isTrial, isExpired };
}

