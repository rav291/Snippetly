"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Aurora from "@/components/custom/react-bits/Aurora";
import Dock from "@/components/custom/react-bits/Dock/Dock";
import { Home as HomeIcon, Archive, User, Settings } from "lucide-react";
import ProductDemo from "@/components/pages/landing-page/ProductDemo";
import ShowCase from "@/components/pages/landing-page/Showcase";

export default function Home() {
  const items = [
    {
      icon: <HomeIcon size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <Archive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <User size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <Settings size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <Dock
        items={items}
        panelHeight={58}
        baseItemSize={40}
        magnification={70}
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fcf3f7] via-white to-[#fae9f2]">
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
            {/* Primary Aurora Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-[rgb(0,255,191)] via-[rgb(0,128,255)] to-[rgb(134,140,255)] 
               hover:opacity-90 text-white text-md px-8 py-6 rounded-2xl
               shadow-[0_0_20px_rgba(0,128,255,0.5)]"
            >
              Get Started – It’s Free
            </Button>

            {/* Secondary Outline Button */}
            <SignInButton mode="modal">
              <Button
                size="lg"
                variant="outline"
                className="border-[rgb(0,128,255)] text-[rgb(0,128,255)] bg-transparent hover:bg-[rgb(0,128,255)] hover:text-white text-md px-8 py-6 rounded-2xl transition-colors"
              >
                Sign In
              </Button>
            </SignInButton>
          </motion.div>
        </div>
      </section>

      <ProductDemo />
      <ShowCase />
    </div>
  );
}
