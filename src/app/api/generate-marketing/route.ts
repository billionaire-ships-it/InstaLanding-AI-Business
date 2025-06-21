import { streamText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { assetType, prompt } = await req.json();

  let systemPrompt = "";
  switch (assetType) {
    case "Ad Copy":
      systemPrompt = `You are a world-class direct response copywriter. Write a high-converting Facebook/Instagram ad copy for this product or service: "${prompt}". Make it persuasive, punchy, and ideal for social media.`;
      break;
    case "Email Subject":
      systemPrompt = `You're a legendary email marketer. Write 3 powerful email subject lines for the following campaign: "${prompt}". Make them short, intriguing, and conversion-driven.`;
      break;
    case "Product Description":
      systemPrompt = `You’re a top-tier eCommerce copywriter. Write a persuasive product description for: "${prompt}". Highlight benefits, create desire, and use emotional language.`;
      break;
    default:
      systemPrompt = `Generate marketing copy for: "${prompt}".`;
  }

  const result = await streamText({
    model: "gpt-4o" as any, // 👈 FORCE-CAST to bypass type error
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

