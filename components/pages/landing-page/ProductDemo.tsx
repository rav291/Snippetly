"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

// Custom shimmer loader
function ShimmerLoader({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-muted", className)}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

// Custom Tweet Component
function CustomTweetCard({
  content,
  author,
  handle,
  className,
}: {
  content: string;
  author: string;
  handle: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex max-w-lg flex-col gap-3 overflow-hidden rounded-lg border bg-background p-4 shadow-sm",
        className
      )}
    >
      {/* Tweet Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AI</span>
          </div>
          <div>
            <div className="font-semibold text-sm">{author}</div>
            <div className="text-sm text-muted-foreground">{handle}</div>
          </div>
        </div>
        {/* Twitter/X Icon */}
        <svg
          className="h-5 w-5 text-[#3BA9EE] hover:scale-105 transition-transform"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
        </svg>
      </div>

      {/* Tweet Content */}
      <div className="text-sm leading-relaxed whitespace-pre-wrap">
        {content}
      </div>

      {/* Tweet Footer */}
      <div className="flex items-center space-x-4 pt-2 text-muted-foreground">
        <div className="flex items-center space-x-1 text-xs">
          <span>💬</span>
          <span>12</span>
        </div>
        <div className="flex items-center space-x-1 text-xs">
          <span>🔄</span>
          <span>34</span>
        </div>
        <div className="flex items-center space-x-1 text-xs">
          <span>❤️</span>
          <span>156</span>
        </div>
      </div>
    </div>
  );
}

export default function ProductDemo() {
  const tweets = [
    {
      id: 1,
      content:
        "💡 Consistency > Motivation.\n\nThe secret to growth is showing up, even when you don't feel like it.",
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
        "📈 Growth is not about doing more.\n\nIt's about doing the right things consistently.",
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

    const initialTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [tweets.length]);

  return (
    <section className="relative w-full bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.9)_0%,rgba(15,23,42,1)_70%,black_100%)] py-24 overflow-hidden">
      {/* Background GridPattern */}
      {/* <GridPattern
        squares={[
          [4, 4],
          [8, 8],
          [12, 12],
          [16, 16],
        ]}
        strokeWidth={2.5} // <-- thicker lines
        className={cn(
          "stroke-primary/40", // bigger mask
          "inset-x-0 inset-y-[-20%] h-[200%] skew-y-12"
        )}
      /> */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            See the Magic in Action
          </h2>
          <p className="mt-4 text-lg text-[#b4b4b4] max-w-2xl mx-auto">
            Paste a transcript, and watch our AI turn it into a viral tweet in
            seconds.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Transcript Input */}
          <div>
            <textarea
              readOnly
              className="w-full bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 h-48 resize-none rounded-lg border border-input p-4 font-mono text-sm text-muted-foreground"
              value={`"Today I learned that consistency beats motivation every single time. It's about habits, not moods."`}
            />
          </div>

          {/* Tweet Preview */}
          <div className="flex justify-center">
            {loading ? (
              <ShimmerLoader className="w-full max-w-lg h-48" />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={tweets[index].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <CustomTweetCard
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
        <div className="mt-12 text-center">
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
