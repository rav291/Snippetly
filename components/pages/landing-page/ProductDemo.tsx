"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

// Custom shimmer loader (replaces react-bits Shimmer)
function ShimmerLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-muted", className)}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

// Lightweight local Tweet card for demo content
function DemoTweetCard({
  content,
  author,
  handle,
}: {
  content: string;
  author: string;
  handle: string;
}) {
  return (
    <div className="rounded-lg border p-4 text-left">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-muted" />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{handle}</div>
        </div>
      </div>
      <p className="mt-4 whitespace-pre-wrap text-sm">{content}</p>
    </div>
  );
}

export default function ProductDemo() {
  const tweets = [
    {
      id: 1,
      content:
        "💡 Consistency > Motivation.\n\nThe secret to growth is showing up, even when you don’t feel like it.",
      author: "AI Generated",
      handle: "@maverickAI",
    },
    {
      id: 2,
      content:
        "🚀 Productivity hack: Batch your work in deep-focus sprints.\n\n1 hour of focus > 3 hours of multitasking.",
      author: "AI Generated",
      handle: "@maverickAI",
    },
    {
      id: 3,
      content:
        "📈 Growth is not about doing more.\n\nIt’s about doing the right things consistently.",
      author: "AI Generated",
      handle: "@maverickAI",
    },
  ];

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Cycle through tweets with shimmer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % tweets.length);
        setLoading(false);
      }, 1200); // shimmer duration
    }, 6000);

    return () => clearInterval(interval);
  }, [tweets.length]);

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background GridPattern */}
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "absolute inset-0 opacity-40",
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          See the Magic in Action
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Paste a transcript, and watch our AI turn it into a viral tweet in
          seconds.
        </p>

        {/* Demo Box */}
        <div className="mt-12 bg-card rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-border">
          {/* Transcript Input (read-only demo) */}
          <textarea
            readOnly
            className="w-full h-28 resize-none rounded-lg border border-input bg-muted p-4 font-mono text-sm text-muted-foreground"
            value={`"Today I learned that consistency beats motivation every single time. It's about habits, not moods."`}
          />

          {/* Output Section */}
          <div className="mt-6">
            {loading ? (
              <ShimmerLoader className="w-full h-32" />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={tweets[index].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <DemoTweetCard
                    content={tweets[index].content}
                    author={tweets[index].author}
                    handle={tweets[index].handle}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/demo"
            className={cn(
              "px-6 py-3 text-lg font-medium rounded-xl shadow-md transition",
              "bg-primary text-primary-foreground hover:scale-105"
            )}
          >
            Try It Yourself
          </a>
        </div>
      </div>
    </section>
  );
}
