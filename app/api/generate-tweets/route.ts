import { NextResponse } from "next/server";

// fully commented out old handler
/*
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text: string | undefined = body?.text;
    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Missing text" }, { status: 400 });
    }

    const snippet = text.trim().replace(/\s+/g, " ");
    const base = snippet.slice(0, 220);

    const tweets = [
      {
        id: 1,
        content: `${base}${base.length < snippet.length ? "…" : ""}`,
        chars: Math.min(280, base.length + (base.length < snippet.length ? 1 : 0)),
      },
      {
        id: 2,
        content: `Key takeaway: ${base.slice(0, 200)}${base.length > 200 ? "…" : ""}`,
        chars: Math.min(280, 13 + Math.min(200, base.length) + (base.length > 200 ? 1 : 0)),
      },
      {
        id: 3,
        content: `Hot take: ${base.slice(0, 210)}${base.length > 210 ? "…" : ""}`,
        chars: Math.min(280, 9 + Math.min(210, base.length) + (base.length > 210 ? 1 : 0)),
      },
      {
        id: 4,
        content: `Here's what I learned: ${base.slice(0, 190)}${base.length > 190 ? "…" : ""}`,
        chars: Math.min(280, 20 + Math.min(190, base.length) + (base.length > 190 ? 1 : 0)),
      },
    ];

    return NextResponse.json({ tweets });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
*/

export async function POST(req: Request) {
  try {
    const { text: transcript } = await req.json();

    if (!transcript || transcript.trim().length === 0) {
      return NextResponse.json(
        { error: "Transcript is missing or empty." },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are a professional text sanitizer.
Your job:
1. Remove filler phrases such as "you know", "basically", "um", "like", "sort of".
2. Remove any explicit, hateful, or harmful language.
3. Maintain original meaning and context.
4. Do not summarize or shorten unnecessarily.
5. Respond ONLY with the cleaned transcript text — no commentary or metadata.
    `;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_SMALL_3_2_24B_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Transcript Sanitizer API",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-small-3.2-24b-instruct-2506:free",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: transcript },
          ],
          temperature: 0.5,
          top_p: 0.9,
          max_tokens: 1024,
          stream: false,
        }),
      }
    );

    const data = await response.json();

    console.log("transcript", data);

    const sanitizedText =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Error: No sanitized text returned.";

    return NextResponse.json({ sanitized: sanitizedText });
  } catch (err) {
    console.error("Sanitization error:", err);
    return NextResponse.json(
      { error: "Something went wrong during sanitization." },
      { status: 500 }
    );
  }
}
