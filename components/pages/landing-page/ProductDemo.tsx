import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight } from "lucide-react";
import styles from "./ProductDemo.module.css";

const ProductDemo = () => {
  const tweets = [
    {
      id: 1,
      content:
        "The creator economy is exploding, but distribution is the real challenge. Here's why AI isn't just changing creation—it's revolutionizing how we connect with audiences.",
      chars: 178,
    },
    {
      id: 2,
      content:
        "Stop spending hours repurposing content. The future of creation is about working smarter, not harder. Here's what changed my workflow completely:",
      chars: 156,
    },
    {
      id: 3,
      content:
        "AI + Creator workflow = Game changer. Just transformed 20 minutes of video into 10 ready-to-post tweets. The creator economy just got more accessible.",
      chars: 165,
    },
  ];

  return (
    <section className={styles.section}>
      <WavyBackground
        className={styles.wavyBg}
        colors={["#047857", "#059669", "#10b981", "#34d399", "#6ee7b7"]}
      >
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.header}
          >
            <h2 className={styles.title}>See it work</h2>
            <p className={styles.subtitle}>
              From transcript to tweets in under 10 seconds
            </p>
          </motion.div>

          <div className={styles.demoGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.inputSection}
            >
              <div className={styles.label}>Input</div>
              <div className={styles.inputCard}>
                <p className={styles.transcriptText}>
                  "Hey everyone, in today's video I want to talk about something
                  that's been on my mind lately - the creator economy and how AI
                  is changing everything. We're seeing this massive shift where
                  content creators are no longer just fighting for views, but
                  figuring out how to maintain consistency across multiple
                  platforms..."
                </p>
              </div>
              <div className={styles.metadata}>2,847 words · 15 min read</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.arrow}
            >
              <ArrowRight />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.outputSection}
            >
              <div className={styles.label}>Output</div>
              <div className={styles.tweetsContainer}>
                {tweets.map((tweet, index) => (
                  <motion.div
                    key={tweet.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={styles.tweetCard}
                  >
                    <p className={styles.tweetText}>{tweet.content}</p>
                    <div className={styles.tweetFooter}>
                      <span className={styles.charCount}>
                        {tweet.chars}/280
                      </span>
                      <button className={styles.copyBtn}>Copy</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default ProductDemo;
