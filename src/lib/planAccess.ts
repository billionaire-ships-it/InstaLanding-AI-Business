import { getUserPlanStatus } from "@/lib/plan";

export async function hasPlanAccess(email: string, requiredPlan: string) {
  const { plan, isActive } = await getUserPlanStatus(email);
  return isActive && plan === requiredPlan;
}
