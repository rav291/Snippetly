import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Transcripts", "Articles", "Captions", "Notes"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    console.log("Generate clicked");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          {/* Eyebrow */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.eyebrow}
          >
            <div className={styles.eyebrowDot} />
            <span>The content treadmill ends here</span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.headline}
          >
            Turn your{" "}
            <span className={styles.wordCycle}>
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`${styles.word} ${
                    index === currentWord ? styles.wordActive : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
            <br />
            into viral tweets.
            <br />
            <span className={styles.headlineAccent}>In seconds.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subheadline}
          >
            Stop manually repurposing content. Snippetly analyzes your long-form
            content and generates authentic, engagement-ready tweets that sound
            like you.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.statsBar}
          >
            <div className={styles.stat}>
              <Clock className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>3 hours</div>
                <div className={styles.statLabel}>saved per week</div>
              </div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <TrendingUp className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>10M+</div>
                <div className={styles.statLabel}>tweets generated</div>
              </div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <Zap className={styles.statIcon} />
              <div>
                <div className={styles.statValue}>50K+</div>
                <div className={styles.statLabel}>active creators</div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.ctaGroup}
          >
            <button onClick={handleGenerate} className={styles.primaryBtn}>
              <span className="text-white">Start free, no card required</span>
              <ArrowRight className={styles.btnIcon} />
            </button>
            <div className={styles.socialProof}>
              <div className={styles.avatarStack}>
                <div
                  className={styles.avatar}
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  }}
                />
                <div
                  className={styles.avatar}
                  style={{
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  }}
                />
                <div
                  className={styles.avatar}
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                  }}
                />
                <div
                  className={styles.avatar}
                  style={{
                    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                  }}
                />
              </div>
              <span className={styles.socialText}>Join 50,000+ creators</span>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.visual}
        >
          <div className={styles.cardStack}>
            {/* Card 1 - Input */}
            <div className={`${styles.card} ${styles.cardInput}`}>
              <div className={styles.cardLabel}>Your content</div>
              <div className={styles.cardContent}>
                <div className={styles.contentBlock}>
                  <div
                    className={styles.contentLine}
                    style={{ width: "95%" }}
                  />
                  <div
                    className={styles.contentLine}
                    style={{ width: "88%" }}
                  />
                  <div
                    className={styles.contentLine}
                    style={{ width: "92%" }}
                  />
                  <div
                    className={styles.contentLine}
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>

            {/* Processing Indicator */}
            <div className={styles.processingLine}>
              <div className={styles.processingDot} />
              <div className={styles.processingDot} />
              <div className={styles.processingDot} />
            </div>

            {/* Card 2 - Output */}
            <div className={`${styles.card} ${styles.cardOutput}`}>
              <div className={styles.cardLabel}>Generated tweets</div>
              <div className={styles.tweetPreview}>
                <div className={styles.tweetItem}>
                  <div className={styles.tweetText}>
                    <div
                      className={styles.tweetLine}
                      style={{ width: "100%" }}
                    />
                    <div
                      className={styles.tweetLine}
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className={styles.tweetMeta}>280 chars</div>
                </div>
                <div className={styles.tweetItem}>
                  <div className={styles.tweetText}>
                    <div
                      className={styles.tweetLine}
                      style={{ width: "95%" }}
                    />
                    <div
                      className={styles.tweetLine}
                      style={{ width: "78%" }}
                    />
                  </div>
                  <div className={styles.tweetMeta}>265 chars</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={`${styles.floatingBadge} ${styles.badge1}`}>
            <Zap className={styles.badgeIcon} />
            <span>AI-Powered</span>
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge2}`}>
            <TrendingUp className={styles.badgeIcon} />
            <span>High Engagement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
