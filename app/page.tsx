"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MacbookScrollDemo } from "@/components/pages/landing-page/CustomMacbookScroll";
import styles from "../components/pages/landing-page/landing.module.css";
import { WavyBackground } from "@/components/ui/wavy-background";
import NoTranscriptMode from "@/components/pages/landing-page/NoTranscriptMode";
import ContentLibrary from "@/components/pages/landing-page/ContentLibrary";
import WorkflowSection from "@/components/pages/landing-page/WorkflowSection";
import Footer from "@/components/pages/landing-page/Footer";
import HeroSection from "@/components/pages/landing-page/HeroSection";
import ProductDemo from "@/components/pages/landing-page/ProductDemo";
import { MultiStepLoader } from "@/components/common/MultiStepLoader";
import FloatingNavbar from "@/components/ui/floating-navbar";
import {
  IconBrandTwitter,
  IconHome,
  IconInfoCircle,
  IconMail,
} from "@tabler/icons-react";

const page = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTweets, setGeneratedTweets] = useState<any[]>([]);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "Demo",
      link: "#demo",
      icon: <IconBrandTwitter className="h-4 w-4" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconInfoCircle className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4" />,
    },
  ];

  const tweets = [
    {
      id: 1,
      emoji: "🔥",
      content:
        "The creator economy is exploding, but distribution is the real challenge. Here's why AI isn't just changing creation—it's revolutionizing how we connect with audiences.",
      ready: true,
    },
    {
      id: 2,
      emoji: "💡",
      content:
        "Stop spending hours repurposing content. The future of creation is about working smarter, not harder. Here's what changed my workflow completely:",
      ready: true,
    },
    {
      id: 3,
      emoji: "🚀",
      content:
        "AI + Creator workflow = Game changer. Just transformed 20 minutes of video into 10 ready-to-post tweets. The creator economy just got more accessible.",
      ready: true,
    },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedTweets(tweets);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* <FloatingNavbar navItems={navItems} /> */}
      <HeroSection />
      <ProductDemo />
      {/* <MacbookScrollDemo /> */}
      <NoTranscriptMode />
      <ContentLibrary />
      <WorkflowSection />
      <Footer />
    </div>
  );
};

export default page;
