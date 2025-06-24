import { NextResponse } from "next/server";
import { checkAccess } from "@/lib/checkAccess";

export async function GET() {
  const { isActive, isTrial, isExpired } = await checkAccess({ redirectIfInvalid: false });

  if (!isActive && isExpired) {
    return NextResponse.json({ status: "locked" });
  }

  return NextResponse.json({ status: "unlocked" });
}
