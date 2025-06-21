// src/lib/plan.ts
export type PlanStatus = {
  plan: "free" | "trial" | "pro" | "enterprise";
  isActive: boolean;
  isTrial: boolean;
  isExpired: boolean;
};

export async function getUserPlanStatus(email: string): Promise<PlanStatus> {
  if (email.includes("trial")) {
    return {
      plan: "trial",
      isActive: false,
      isTrial: true,
      isExpired: false,
    };
  }

  if (email.includes("expired")) {
    return {
      plan: "trial",
      isActive: false,
      isTrial: false,
      isExpired: true,
    };
  }

  if (email.includes("pro")) {
    return {
      plan: "pro",
      isActive: true,
      isTrial: false,
      isExpired: false,
    };
  }

  return {
    plan: "free",
    isActive: false,
    isTrial: false,
    isExpired: false,
  };
}

