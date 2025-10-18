"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleUseDemo = () => {
    setInputText(DEMO_TEXT);
    setTweets([]);
    setError(null);
    setCopiedIndex(null);
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

      const generatedTweets = response?.data.map(
        (item: any, index: number) => ({
          id: index,
          content: item.tweet,
          chars: item.tweet.length,
        })
      );

      setTweets(generatedTweets ?? []);
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoaderComplete = () => {
    setTimeout(() => {
      const tweetsSection = document.getElementById("tweets-section");
      if (tweetsSection) {
        tweetsSection.scrollIntoView({ behavior: "smooth", block: "center" });
        tweetsSection.classList.add("highlight-pulse");

        const tweetCards = tweetsSection.querySelectorAll(".tweetCard");
        tweetCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("tweet-highlight");
            setTimeout(() => {
              card.classList.remove("tweet-highlight");
            }, 1000);
          }, index * 200);
        });

        setTimeout(() => {
          tweetsSection.classList.remove("highlight-pulse");
        }, 3000);
      }
    }, 500);
  };

  const handleCopy = async (content: string, index: number) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {}
  };

  return (
    <section className={styles.section}>
      {/* 3D cube background layers */}
      <div className={`${styles.cubeLayer} ${styles.layer1}`} />
      <div className={`${styles.cubeLayer} ${styles.layer2}`} />
      <div className={`${styles.cubeLayer} ${styles.layer3}`} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.header}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the Change
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From transcript to tweets in seconds powered by AI
          </motion.p>
        </motion.div>

        <div className={styles.singleColumn}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className={styles.inputCard}
            whileHover={{ y: -2 }}
          >
            <motion.div
              className={styles.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              See it work
            </motion.div>
            <div className={styles.textareaWrapper}>
              <motion.textarea
                className={styles.textarea}
                placeholder="Paste transcript or write a paragraph..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={10}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              {!inputText && (
                <motion.div
                  className={styles.textareaHint}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  💡 Tip: You can start with our demo to see how it works.
                </motion.div>
              )}
            </div>

            <motion.div
              className={styles.actionsRow}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                type="button"
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={handleUseDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Use demo text
              </motion.button>
              <motion.button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleGenerate}
                disabled={isLoading || !inputText.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  scale: isLoading ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  scale: { duration: 0.6, repeat: isLoading ? Infinity : 0 },
                }}
              >
                {isLoading ? (
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Generating...
                  </motion.span>
                ) : (
                  "Generate tweets"
                )}
              </motion.button>
            </motion.div>

            {error && (
              <motion.div
                className={styles.errorBox}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
          </motion.div>

          <MultiStepLoader
            loading={isLoading}
            onComplete={handleLoaderComplete}
          />

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
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={styles.tweetCard}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.p
                    className={styles.tweetText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    {tweet.content}
                  </motion.p>
                  <div className={styles.tweetFooter}>
                    <motion.span
                      className={styles.charCount}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index + 0.4 }}
                    >
                      {tweet.chars}/280
                    </motion.span>
                    <motion.button
                      className={styles.copyBtn}
                      onClick={() => handleCopy(tweet.content, index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index + 0.5 }}
                    >
                      {copiedIndex === index ? "Copied!" : "Copy"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
