"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MultiStepLoader } from "@/components/common/MultiStepLoader";
import styles from "./ProductDemo.module.css";

type GeneratedTweet = { id: number; content: string; chars: number };

const DEMO_TEXT =
  "Lately, building feels less like problem-solving and more like learning to stay calm inside controlled turbulence. The deeper I go, the more I realize that the real craft isn't in writing perfect code — it's in keeping composure when everything starts breaking at once. Rewrites, edge cases, messy logic, and long nights used to frustrate me. Now they've become part of the rhythm — the quiet reminders that stability doesn't come from fewer problems, it comes from better reactions. I'm still shaping Snippetly, still refactoring things that felt \"final\" just last week. But that's where the growth hides — in the version you didn't plan to rebuild but had the courage to. Shipping matters. Learning to stay grounded when everything bends matters more.#buildinpublic #frontenddev #Nextjs #learninginpublic #growth";

const ProductDemo = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState<GeneratedTweet[]>([
    {
      id: 0,
      content:
        "Ever stared at a blank screen, wondering where to even begin? That's the developer's journey. It's not about perfection from the start, but about taking that first small step. What's your go-to trick for breaking through initial development paralysis?",
      chars: 251,
    },
    {
      id: 1,
      content:
        "The best code isn't always the most complex; it's the most readable and maintainable. Think about your future self (or your teammates!) when you're writing. Simple elegance often trumps intricate genius in the long run. What's your golden rule for clean code?",
      chars: 259,
    },
    {
      id: 2,
      content:
        "Remember that 'aha!' moment when a complex concept finally clicks? That's the fuel that keeps us going as developers. Share your most recent 'aha!' experience. Big or small, those breakthroughs are what make the grind worthwhile.",
      chars: 229,
    },
    {
      id: 3,
      content:
        "Debugging: the art of being a detective in your own code. Sometimes it feels like you're searching for a needle in a haystack, only to find the haystack was actually a single misplaced semicolon. What's the most bizarre bug you've ever tracked down?",
      chars: 249,
    },
    {
      id: 4,
      content:
        "Coding isn't just about syntax; it's about problem-solving, logical thinking, and continuous learning. Every line written is a mini-challenge overcome. What's one skill you've gained from coding that surprised you in its applicability outside of dev work?",
      chars: 255,
    },
  ]);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      // const res = await fetch("/api/generate-tweets", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ text: inputText }),
      // });
      // if (!res.ok) throw new Error("Failed to generate tweets");
      // const response = await res.json();
      // const generatedTweets = response?.data.map(
      //   (item: any, index: number) => ({
      //     id: index,
      //     content: item.tweet,
      //     chars: item.tweet.length,
      //   })
      // );
      // console.log("generatedTweets", generatedTweets)
      // setTweets(generatedTweets ?? []);
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

  // Carousel navigation handlers
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".tweetCard")?.clientWidth || 650;
      const scrollAmount = (cardWidth + 24) * 1.5; // Card width + gap, scroll 1.5 cards

      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Touch/Mouse drag handlers for mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll detection for showing/hiding navigation buttons
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    setShowLeftButton(carouselRef.current.scrollLeft > 10);
    setShowRightButton(
      carouselRef.current.scrollLeft <
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [tweets.length]);

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
              className={styles.tweetsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h3
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Generated Tweets
              </motion.h3>

              <div className={styles.carouselWrapper}>
                {showLeftButton && (
                  <button
                    className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                    onClick={() => scrollCarousel("left")}
                    aria-label="Scroll left"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M12.5 15L7.5 10L12.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                <div
                  className={styles.carouselContainer}
                  ref={carouselRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ cursor: isDragging ? "grabbing" : "grab" }}
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
                      className={`${styles.tweetCard} tweetCard`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={styles.tweetHeader}>
                        <svg
                          className={styles.twitterIcon}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className={styles.tweetBadge}>Tweet</span>
                      </div>

                      <motion.p
                        className={styles.tweetText}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                      >
                        {tweet.content}
                      </motion.p>

                      <div className={styles.tweetFooter}>
                        <motion.div
                          className={styles.charCount}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index + 0.4 }}
                        >
                          {tweet.chars} characters
                        </motion.div>
                        <motion.button
                          className={styles.copyBtn}
                          onClick={() => handleCopy(tweet.content, index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index + 0.5 }}
                        >
                          {copiedIndex === index ? (
                            <>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M13.3333 4L6 11.3333L2.66667 8"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Copied!
                            </>
                          ) : (
                            <>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M10.6667 2H13.3333C14.2538 2 15 2.74619 15 3.66667V13.3333C15 14.2538 14.2538 15 13.3333 15H3.66667C2.74619 15 2 14.2538 2 13.3333V3.66667C2 2.74619 2.74619 2 3.66667 2H6.33333M10.6667 2C10.6667 1.44772 10.219 1 9.66667 1H6.33333C5.78105 1 5.33333 1.44772 5.33333 2M10.6667 2C10.6667 2.55228 10.219 3 9.66667 3H6.33333C5.78105 3 5.33333 2.55228 5.33333 2M5.33333 2H2.66667"
                                  stroke="currentColor"
                                  strokeWidth="1.33"
                                  strokeLinecap="round"
                                />
                              </svg>
                              Copy
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {showRightButton && (
                  <button
                    className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                    onClick={() => scrollCarousel("right")}
                    aria-label="Scroll right"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
