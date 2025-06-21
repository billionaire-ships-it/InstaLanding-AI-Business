// src/lib/checkAccess.ts
import { getUserPlanStatus } from "@/lib/plan";

export async function checkUserAccess(email: string, requiredPlan: string): Promise<boolean> {
  const status = await getUserPlanStatus(email);
  return status.plan.toLowerCase() === requiredPlan.toLowerCase();
}
