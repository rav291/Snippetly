"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MacbookScrollDemo } from "@/components/pages/landing-page/CustomMacbookScroll";
import styles from "../components/pages/landing-page/landing.module.css";
import { WavyBackground } from "@/components/ui/wavy-background";
import NoTranscriptMode from "@/components/pages/landing-page/NoTranscriptMode";

const page = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTweets, setGeneratedTweets] = useState([]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              AI Content Engine
            </span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl lg:text-7xl font-bold leading-tight font-[var(--font-space-grotesk)]"
          >
            <span className={styles.textWhite}>Transform </span>
            <span className={styles.textWhite}>Your </span>
            <span className={styles.gradientText}>content</span>
            <span className={styles.textWhite}> into </span>
            <span className={styles.textViolet}>viral</span>
            <span className={styles.textWhite}> tweets</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            AI-powered content repurposing. From long-form to social-ready in
            seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerate}
              className="group relative px-5 py-2 bg-emerald-400 text-slate-950 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-emerald-400/25 transition-all duration-300"
            >
              {/* <div className="w-6 h-6 border-2 border-slate-950 border-t-transparent rounded-full animate-spin group-hover:animate-none"></div> */}
              <span>Start Free</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-5 py-2 border-2 border-violet-400 text-violet-400 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-violet-400 hover:text-slate-950 transition-all duration-300"
            >
              <span>See Demo</span>
              <motion.span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Product Demo Section */}
      <section className="relative z-10 px-8 lg:px-16 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="">
            <WavyBackground className="max-w-5xl mx-auto pt-20">
              <div className="flex flex-col lg:flex-row gap-24 w-full">
                {/* Input Section */}
                <div className="flex flex-1 items-center">
                  <div className="w-full space-y-6">
                    {/* Input Transcript */}
                    <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700/50">
                      <label className="text-gray-400 text-sm font-medium mb-4 block">
                        Input Transcript:
                      </label>
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/30">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "Hey everyone, in today's video I want to talk about
                          something that's been on my mind lately - the creator
                          economy and how AI is changing everything..."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Generated Tweets */}
                <div className="relative flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Generated Tweets:
                  </h3>

                  {/* Magical Background Effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      viewBox="0 0 400 600"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="waveGradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#10B981"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="50%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#10B981"
                            stopOpacity="0.3"
                          />
                        </linearGradient>
                        <linearGradient
                          id="waveGradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="50%"
                            stopColor="#10B981"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#8B5CF6"
                            stopOpacity="0.2"
                          />
                        </linearGradient>
                      </defs>

                      {/* Wave 1 */}
                      <motion.path
                        d="M0,150 Q100,100 200,150 T400,150 L400,200 L0,200 Z"
                        fill="url(#waveGradient1)"
                        animate={{
                          d: [
                            "M0,150 Q100,100 200,150 T400,150 L400,200 L0,200 Z",
                            "M0,150 Q100,200 200,150 T400,150 L400,200 L0,200 Z",
                            "M0,150 Q100,100 200,150 T400,150 L400,200 L0,200 Z",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Wave 2 */}
                      <motion.path
                        d="M0,300 Q100,250 200,300 T400,300 L400,350 L0,350 Z"
                        fill="url(#waveGradient2)"
                        animate={{
                          d: [
                            "M0,300 Q100,250 200,300 T400,300 L400,350 L0,350 Z",
                            "M0,300 Q100,350 200,300 T400,300 L400,350 L0,350 Z",
                            "M0,300 Q100,250 200,300 T400,300 L400,350 L0,350 Z",
                          ],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />

                      {/* Floating Particles */}
                      <motion.circle
                        cx="50"
                        cy="100"
                        r="3"
                        fill="#10B981"
                        opacity="0.6"
                        animate={{
                          cy: [100, 80, 100],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="350"
                        cy="200"
                        r="2"
                        fill="#8B5CF6"
                        opacity="0.5"
                        animate={{
                          cy: [200, 180, 200],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                      <motion.circle
                        cx="150"
                        cy="400"
                        r="2.5"
                        fill="#10B981"
                        opacity="0.4"
                        animate={{
                          cy: [400, 380, 400],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5,
                        }}
                      />
                    </svg>

                    {/* Magic Sparkles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div
                      className="absolute top-12 left-8 w-1 h-1 bg-violet-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-16 left-16 w-1 h-1 bg-violet-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>

                  {tweets.map((tweet, index) => (
                    <motion.div
                      key={tweet.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-violet-400/50 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-violet-400/5 to-emerald-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative z-10 flex items-start gap-3">
                        <div className="text-2xl">{tweet.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-200 text-sm leading-relaxed mb-3">
                            {tweet.content}
                          </p>
                          <div className="flex items-center justify-between">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 text-xs"
                            >
                              <span>❤️</span>
                              <span>Save</span>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1 bg-emerald-400 hover:bg-emerald-500 text-slate-950 text-xs rounded-lg transition-colors duration-200 font-semibold"
                            >
                              Ready
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </WavyBackground>
          </div>
        </motion.div>
      </section>
      <MacbookScrollDemo />
      <NoTranscriptMode />
    </div>
  );
};

export default page;
