import { contentGeneration, textSanitizer } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text: transcript } = await req.json();

    if (!transcript || transcript.trim().length === 0) {
      return NextResponse.json(
        { error: "Transcript is missing or empty." },
        { status: 400 }
      );
    }

    const data = await textSanitizer(transcript);

    console.log("transcriptcheck", data);

    const sanitizedText =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Error: No text returned.";

    console.log("sanitizedText", sanitizedText);

    const finalResponse = await contentGeneration(sanitizedText);
    console.log("finalResponse", finalResponse);

    return NextResponse.json({ data: finalResponse });
  } catch (err) {
    console.error("Sanitization error:", err);
    return NextResponse.json(
      { error: "Something went wrong during sanitization." },
      { status: 500 }
    );
  }
}
