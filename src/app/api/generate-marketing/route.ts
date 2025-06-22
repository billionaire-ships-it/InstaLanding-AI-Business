import { streamText, LanguageModelV1 } from "ai";
import { NextResponse } from "next/server";

interface RequestBody {
  assetType: string;
  prompt: string;
}

export async function POST(req: Request) {
  const { assetType, prompt }: RequestBody = await req.json();

  let systemPrompt = "";

  switch (assetType) {
    case "Ad Copy":
      systemPrompt = `You are a world-class direct response copywriter. Write a high-converting Facebook/Instagram ad copy for this product: "${prompt}".`;
      break;
    case "Email Subject":
      systemPrompt = `You're a legendary email marketer. Write 3 powerful subject lines for this campaign: "${prompt}".`;
      break;
    case "Product Description":
      systemPrompt = `You’re an eCommerce expert. Write a persuasive product description for: "${prompt}".`;
      break;
    default:
      systemPrompt = `Generate marketing copy for: "${prompt}".`;
  }

  const result = await streamText({
    model: "gpt-4o" as unknown as LanguageModelV1,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
    ],
  });

  return new NextResponse(result.textStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}


