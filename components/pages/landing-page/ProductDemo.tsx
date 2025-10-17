"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { MultiStepLoader } from "@/components/common/MultiStepLoader";
import styles from "./ProductDemo.module.css";

type GeneratedTweet = { id: number; content: string; chars: number };

const DEMO_TEXT =
  "Lately, building feels less like problem-solving and more like learning to stay calm inside controlled turbulence. The deeper I go, the more I realize that the real craft isn’t in writing perfect code — it’s in keeping composure when everything starts breaking at once. Rewrites, edge cases, messy logic, and long nights used to frustrate me. Now they’ve become part of the rhythm — the quiet reminders that stability doesn’t come from fewer problems, it comes from better reactions. I’m still shaping Snippetly, still refactoring things that felt “final” just last week. But that’s where the growth hides — in the version you didn’t plan to rebuild but had the courage to. Shipping matters. Learning to stay grounded when everything bends matters more.#buildinpublic #frontenddev #Nextjs #learninginpublic #growth";

const ProductDemo = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState<GeneratedTweet[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleUseDemo = () => {
    setInputText(DEMO_TEXT);
    setTweets([]);
    setError(null);
  };

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setTweets([]);
    setError(null);
    try {
      const res = await fetch("/api/generate-tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      if (!res.ok) throw new Error("Failed to generate tweets");
      const response = await res.json();

      console.log("generatedTweets3", response?.data);
      const generatedTweets = response?.data.map((item, index) => ({
        id: index,
        content: item.tweet,
        chars: item.tweet.length,
      }));

      setTweets(generatedTweets ?? []);
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoaderComplete = () => {
    // Scroll to tweets section and highlight
    setTimeout(() => {
      const tweetsSection = document.getElementById("tweets-section");
      if (tweetsSection) {
        tweetsSection.scrollIntoView({ behavior: "smooth", block: "center" });

        // Add highlight effect with staggered animation
        tweetsSection.classList.add("highlight-pulse");

        // Add individual tweet animations
        const tweetCards = tweetsSection.querySelectorAll(".tweetCard");
        tweetCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("tweet-highlight");
            setTimeout(() => {
              card.classList.remove("tweet-highlight");
            }, 1000);
          }, index * 200);
        });

        // Remove main highlight after animation
        setTimeout(() => {
          tweetsSection.classList.remove("highlight-pulse");
        }, 3000);
      }
    }, 500); // Small delay to ensure smooth transition
  };

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
    } catch { }
  };

  return (
    <section className={styles.section}>
      <WavyBackground
        className={styles.wavyBg}
        colors={["#0d9488", "#14b8a6", "#06b6d4", "#2dd4bf", "#5eead4"]}
      >
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.header}
          >
            <h2 className={styles.title}>Experience the Change</h2>
            <p className={styles.subtitle}>
              From transcript to tweets in seconds
            </p>
          </motion.div>

          <div className={styles.singleColumn}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.inputCard}
            >
              <div className={styles.label}>See it work</div>
              <div className={styles.textareaWrapper}>
                <textarea
                  className={styles.textarea}
                  placeholder="Paste transcript or write a paragraph..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={10}
                />
                {!inputText && (
                  <div className={styles.textareaHint}>
                    Tip: You can start with our demo to see how it works.
                  </div>
                )}
              </div>

              <div className={styles.actionsRow}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnGhost}`}
                  onClick={handleUseDemo}
                >
                  Use demo text
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={handleGenerate}
                  disabled={isLoading || !inputText.trim()}
                >
                  {isLoading ? "Generating..." : "Generate tweets"}
                </button>
              </div>

              {error && <div className={styles.errorBox}>{error}</div>}
            </motion.div>

            {/* MultiStepLoader integration */}
            <MultiStepLoader
              loading={isLoading}
              onComplete={handleLoaderComplete}
            />

            {/* Only show tweets container when tweets exist */}
            {tweets.length > 0 && (
              <motion.div
                id="tweets-section"
                className={styles.tweetsContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {tweets.map((tweet, index) => (
                  <motion.div
                    key={tweet.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 * index }}
                    className={styles.tweetCard}
                  >
                    <p className={styles.tweetText}>{tweet.content}</p>
                    <div className={styles.tweetFooter}>
                      <span className={styles.charCount}>
                        {tweet.chars}/280
                      </span>
                      <button
                        className={styles.copyBtn}
                        onClick={() => handleCopy(tweet.content)}
                      >
                        Copy
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default ProductDemo;
