import { NextResponse } from "next/server";

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
        content: `${base}$
          {base.length < snippet.length ? "…" : ""}`.replace(
          "$\n          ",
          ""
        ),
        chars: Math.min(
          280,
          base.length + (base.length < snippet.length ? 1 : 0)
        ),
      },
      {
        id: 2,
        content: `Key takeaway: ${base.slice(0, 200)}${
          base.length > 200 ? "…" : ""
        }`,
        chars: Math.min(
          280,
          13 + Math.min(200, base.length) + (base.length > 200 ? 1 : 0)
        ),
      },
      {
        id: 3,
        content: `Hot take: ${base.slice(0, 210)}${
          base.length > 210 ? "…" : ""
        }`,
        chars: Math.min(
          280,
          9 + Math.min(210, base.length) + (base.length > 210 ? 1 : 0)
        ),
      },
      {
        id: 4,
        content: `Here's what I learned: ${base.slice(0, 190)}${
          base.length > 190 ? "…" : ""
        }`,
        chars: Math.min(
          280,
          20 + Math.min(190, base.length) + (base.length > 190 ? 1 : 0)
        ),
      },
    ];

    return NextResponse.json({ tweets });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
