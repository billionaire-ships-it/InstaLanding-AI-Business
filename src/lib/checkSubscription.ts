// src/lib/checkSubscription.ts
import { db } from "@/lib/db"
import { isAfter } from "date-fns"

export type AccessLevel = "locked" | "trial" | "starter" | "pro" | "empire"

export type SubscriptionStatus = {
  access: AccessLevel
  trialActive: boolean
  trialExpired: boolean
  plan: string | null
  hasPaid: boolean
}

export async function checkSubscription(email: string): Promise<SubscriptionStatus> {
  const user = await db.user.findUnique({
    where: { email },
    select: {
      trialEndsAt: true,
      paypalSubscriptionId: true,
      plan: true,
    },
  })

  if (!user) {
    return {
      access: "locked",
      trialActive: false,
      trialExpired: false,
      plan: null,
      hasPaid: false,
    }
  }

  const now = new Date()
  const isTrial = !!user.trialEndsAt && isAfter(user.trialEndsAt, now)
  const trialExpired = !!user.trialEndsAt && !isTrial
  const hasPaid = !!user.paypalSubscriptionId

  const planMap: Record<string, AccessLevel> = {
    starter: "starter",
    pro: "pro",
    empire: "empire",
  }

  const access: AccessLevel = hasPaid
    ? planMap[user.plan ?? ""] || "locked"
    : isTrial
    ? "trial"
    : "locked"

  return {
    access,
    trialActive: isTrial,
    trialExpired,
    plan: user.plan || null,
    hasPaid,
  }
}
