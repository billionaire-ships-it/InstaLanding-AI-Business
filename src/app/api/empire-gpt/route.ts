import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { streamText } from "ai";
import authOptions from "@/lib/auth";
import { checkUserAccess } from "@/lib/checkAccess";
import { LanguageModelV1 } from 'ai';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const hasAccess = await checkUserAccess(session.user.email, "pro");
  if (!hasAccess) {
    return new Response("Upgrade required for EmpireGPT", { status: 403 });
  }

  const { prompt }: { prompt: string } = await req.json();

  const result = await streamText({
    model: "gpt-4o" as unknown as LanguageModelV1, // ✅ Properly inferred as a literal type
    messages: [
      {
        role: "system",
        content: `You are EmpireGPT — an elite AI business strategist.
Speak with confidence, urgency, and clarity.`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return new NextResponse(result.textStream);
}
