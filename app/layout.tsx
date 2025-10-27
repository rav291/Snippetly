import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snippetly - Turn Your Content Into Ready-to-Post Tweets",
  description:
    "From transcripts to tweets—fast, simple, creative. AI-powered content repurposing for creators.",
};

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
