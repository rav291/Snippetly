// Commit Message Format

// feat(auth): add Clerk OAuth login
// fix(cleaner): strip filler words correctly
// chore(deps): bump framer-motion to 11.x
// docs(prd): update success metrics

// Branch Naming Convention

// refactor(ui): extract button into shadcn component
// feature/<feature-name> → New features. Example: feature/auth-clerk, feature/repurpose-ai.
// fix/<issue-name> → Bug fixes. Example: fix/clipboard-bug.
// chore/<task-name> → Maintenance tasks. Example: chore/update-tailwind-4.
// refactor/<scope> → Big refactor tasks. Example: refactor/app-router-structure.
// docs/<scope> → Documentation changes. Example: docs/prd-updates.
// release/<version> → When cutting a release. Example: release/v0.1.0.

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Turn One Video Into a Week of Content
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-xl md:text-2xl font-light text-zinc-300"
        >
          The end of the content treadmill.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-lg text-zinc-400 leading-relaxed"
        >
          Stop the tedious grind. Unlock the goldmine in your archives. Our
          AI-powered engine turns your long-form content into ready-to-post
          social media assets in seconds.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-red-700 hover:bg-red-800 text-white text-lg px-8 py-6 rounded-2xl shadow-lg"
          >
            Try the 60-Second Demo
          </Button>

          <SignInButton mode="modal">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 text-lg px-8 py-6 rounded-2xl"
            >
              Sign In
            </Button>
          </SignInButton>
        </motion.div>
      </div>
    </section>
  );
}
