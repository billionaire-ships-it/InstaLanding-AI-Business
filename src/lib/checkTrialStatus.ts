// src/lib/checkTrialStatus.ts
import { db } from "@/lib/db"
import { differenceInDays } from "date-fns"

export async function checkTrialStatus(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      trialStartDate: true,
      subscriptionPlanId: true,
    },
  })

  if (!user) throw new Error("User not found")

  const plan = user.subscriptionPlanId ?? null
  const isSubscribed = !!plan

  const trialStart = user.trialStartDate ? new Date(user.trialStartDate) : null
  const daysPassed = trialStart ? differenceInDays(new Date(), trialStart) : 0

  const isTrialActive = !!trialStart && daysPassed < 7
  const isTrialExpired = !isTrialActive && !isSubscribed

  return {
    isTrialActive,
    isTrialExpired,
    isSubscribed,
    plan,
  }
}

