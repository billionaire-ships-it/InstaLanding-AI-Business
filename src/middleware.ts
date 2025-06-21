import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { checkTrialStatus } from "@/lib/checkTrialStatus"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const url = req.nextUrl

  const protectedPaths = [
    "/dashboard/builder",
    "/dashboard/marketing-ai",
    "/dashboard/empire-gpt",
  ]

  const isProtected = protectedPaths.some(path => url.pathname.startsWith(path))

  if (!isProtected) return NextResponse.next()

  // Redirect if not logged in
  if (!token?.sub) {
    return NextResponse.redirect(new URL("/signup", req.url))
  }

  const userId = token.sub
  const status = await checkTrialStatus(userId)

  const trialExpired = status.isTrialExpired && !status.isSubscribed

  if (trialExpired) {
    return NextResponse.redirect(new URL("/subscribe", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/builder",
    "/dashboard/marketing-ai",
    "/dashboard/empire-gpt",
  ],
}
