import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  Epilogue,
  Lexend,
  Montserrat,
  Plus_Jakarta_Sans,
  Poppins,
  Sora,
  Space_Grotesk,
  Unbounded,
  Work_Sans,
} from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap", // ✅ best practice
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans" });

export const metadata: Metadata = {
  title: "Snippetly",
  description: "AI tweet generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={lexend.variable}>
        <body className="font-lexend">{children}</body>
      </html>
    </ClerkProvider>
  );
}
