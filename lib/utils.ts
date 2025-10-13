import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MISTRAL_MODEL, OPENROUTER_BASEURL } from "./constants";
import { GoogleGenAI } from "@google/genai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const textSanitizer = async (transcript: string) => {
  const systemPrompt = `
  You are a professional text sanitizer.
  Your job:
  1. Remove filler phrases such as "you know", "basically", "um", "like", "sort of".
  2. Remove any explicit, hateful, or harmful language.
  3. Maintain original meaning and context.
  4. Do not summarize or shorten unnecessarily.
  5. Respond ONLY with the cleaned transcript text — no commentary or metadata.
      `;

  console.log(
    "process.env.MISTRAL_SMALL_3_2_24B_API_KEY",
    process.env.MISTRAL_SMALL_3_2_24B_API_KEY
  );

  const response = await fetch(OPENROUTER_BASEURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MISTRAL_SMALL_3_2_24B_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3000",
      "X-Title": "Transcript Sanitizer API",
    },
    body: JSON.stringify({
      model: MISTRAL_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: transcript },
      ],
      temperature: 0.5,
      top_p: 0.9,
      max_tokens: 1024,
      stream: false,
    }),
  });

  const data = await response.json();

  console.log("intermediate_response", data);

  return data;
};

export const contentGeneration = async (transcript: string) => {
  const ai = new GoogleGenAI({});

  const systemPrompt = `
You are a professional social media content creator specializing in writing engaging tweets for a developer audience.

Your job:
1. Generate exactly 5 distinct tweets based on the provided transcript or topic.
2. Each tweet should sound natural, concise, and optimized for Twitter engagement (max 280 characters).
3. Avoid hashtags and emojis unless contextually appropriate.
4. Maintain diversity in tone and approach — some witty, some thoughtful, some informative.

For each tweet, evaluate and assign ratings on the following parameters:
- mood (0–10): reflects emotional tone, from neutral to high-energy.
- occasion (0–10): how well it fits a trending or situational moment.
- casual_or_professional (0–10): 0 means fully casual, 10 means fully professional.
- genre (0–10): reflects how strongly it aligns with its intended theme (tech, motivation, humor, etc.).
- final_rating (0–10): holistic score of quality and engagement potential.

Your response MUST be a valid JSON array of 5 objects.
Each object must follow this exact structure:

[
  {
    "tweet": "string",
    "mood": number,
    "occasion": number,
    "casual_or_professional": number,
    "genre": number,
    "final_rating": number
  },
  ...
]

Guidelines:
- Do not include markdown, commentary, or explanations.
- Output must be raw JSON and parsable by JSON.parse() with no extra text.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `${systemPrompt}\n\nTranscript:\n${transcript}`,
          },
        ],
      },
    ],
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    },
  });

  // Gemini responses can contain text() or candidates with JSON-like content
  let textResponse =
    response?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
    response?.text ||
    "";

  // Clean stray formatting (Gemini sometimes adds backticks or newlines)
  textResponse = textResponse.trim().replace(/^```json|```$/g, "");

  try {
    const tweets = JSON.parse(textResponse);
    console.log("Generated Tweets:", tweets);
    return tweets;
  } catch (err) {
    console.error("JSON parsing failed:", err, textResponse);
    throw new Error("Invalid JSON response from Gemini");
  }
};
