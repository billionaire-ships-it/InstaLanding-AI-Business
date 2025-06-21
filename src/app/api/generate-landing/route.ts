// /src/app/api/generate-landing/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
});

export async function POST(req: NextRequest) {
  const { brand, description, cta, audience } = await req.json();

  const prompt = `
You are a professional landing page copywriter. Write a high-converting landing page based on the following details:

Brand: ${brand}
Description: ${description}
Call to Action: ${cta}
Target Audience: ${audience}

Structure:
1. Hero Section (with headline + subheadline)
2. About Section
3. Features (3 bullet points with titles and explanations)
4. Call to Action Section

Write in a persuasive tone that excites the audience to take action.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are an expert SaaS landing page copywriter.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });

    const generated = response.choices[0].message.content;
    return NextResponse.json({ generated });
  } catch (error) {
    console.error('[OpenAI Error]', error);
    return NextResponse.json({ error: 'Failed to generate landing page.' }, { status: 500 });
  }
}
