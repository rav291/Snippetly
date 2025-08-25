"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Prism from "@/components/custom/react-bits/Prism";
import Waves from "@/components/custom/react-bits/Waves";
import GridDistortion from "@/components/custom/react-bits/grid-distortion";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/custom/react-bits/Aurora";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative h-[91vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fcf3f7] via-white to-[#fae9f2]">
        {/* Subtle Grid Background */}
        <div className="w-full h-screen absolute">
          <Aurora
            colorStops={["#00FFBF", "#0080FF", "#868CFF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#161122] text-white"
          >
            Discover a Smarter Way to Manage Growth
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl font-medium text-white"
          >
            Turn complexity into clarity with our AI-powered platform.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-md md:text-lg text-white leading-relaxed max-w-2xl mx-auto"
          >
            Automate your workflow, visualize insights instantly, and unlock
            smarter decisions — all in one place.
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
              className="bg-gradient-to-r from-[#db5992] to-[#c83a71] hover:opacity-90 text-white text-md px-8 py-6 rounded-2xl shadow-lg"
            >
              Get Started – It’s Free
            </Button>

            <SignInButton mode="modal">
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 text-md px-8 py-6 rounded-2xl"
              >
                Sign In
              </Button>
            </SignInButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
