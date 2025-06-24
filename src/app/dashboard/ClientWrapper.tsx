"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DashboardClientWrapper({
  isTrial,
  isExpired,
}: {
  isTrial: boolean;
  isExpired: boolean;
}) {
  useEffect(() => {
    if (isTrial && !isExpired) {
      toast("⏳ Your trial ends soon. Don’t lose your progress — upgrade now!", {
        icon: "⚠️",
      });
    }

    if (isExpired) {
      toast.error("🚫 Your trial has expired. Please upgrade to regain access.");
    }
  }, [isTrial, isExpired]);

  return null;
}
