// components/NoTranscriptMode.jsx
"use client";

import React, { useState } from "react";
// Assuming these are still used, but their styling will be overridden/controlled by CSS Modules
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Import the CSS Module
import styles from "./NoTranscriptMode.module.css";

const NoTranscriptMode = () => {
  const [temperature, setTemperature] = useState([0.7]);
  const [genre, setGenre] = useState("witty");
  const [tone, setTone] = useState("casual");
  const [length, setLength] = useState("short");

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className={styles.badgeOutline}>
            <Zap className={styles.badgeIcon} />
            Parameter Mode
          </Badge>
          <h2 className={styles.title}>
            No transcript?{" "}
            <span className={styles.gradientText}>No problem</span>
          </h2>
          <p className={styles.subtitle}>
            Use our smart parameter system to generate tweets that match your
            exact style and goals.
          </p>
        </motion.div>

        <div className={styles.gridContainer}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.controlsColumn}
          >
            <Card className={`${styles.card} ${styles.glassEffect}`}>
              <div className={styles.controlGroup}>
                <div>
                  <label className={styles.controlLabel}>
                    Temperature: {temperature[0]}
                    <span className={styles.controlLabelSecondary}>
                      {temperature[0] < 0.3
                        ? "(Safe)"
                        : temperature[0] > 0.7
                        ? "(Creative)"
                        : "(Balanced)"}
                    </span>
                  </label>
                  {/* Slider might need custom styling in the module or remain with shadcn default */}
                  <Slider
                    value={temperature}
                    onValueChange={setTemperature}
                    max={1}
                    min={0}
                    step={0.1}
                    className={styles.slider}
                  />
                </div>

                <div>
                  <label className={styles.controlLabel}>Genre</label>
                  <div className={styles.buttonGrid}>
                    {[
                      "Educational",
                      "Witty",
                      "Storytelling",
                      "Motivational",
                    ].map((item) => (
                      <Button
                        key={item}
                        variant={
                          genre === item.toLowerCase() ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setGenre(item.toLowerCase())}
                        className={`${styles.controlButton} ${
                          genre === item.toLowerCase()
                            ? styles.activeButton
                            : styles.glassButton
                        }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={styles.controlLabel}>Tone</label>
                  <div className={styles.buttonGridThree}>
                    {["Casual", "Professional", "Sarcastic"].map((item) => (
                      <Button
                        key={item}
                        variant={
                          tone === item.toLowerCase() ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setTone(item.toLowerCase())}
                        className={`${styles.controlButton} ${
                          tone === item.toLowerCase()
                            ? styles.activeButton
                            : styles.glassButton
                        }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={styles.controlLabel}>Length</label>
                  <div className={styles.buttonGridThree}>
                    {["Short", "Starter", "Thread"].map((item) => (
                      <Button
                        key={item}
                        variant={
                          length === item.toLowerCase() ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setLength(item.toLowerCase())}
                        className={`${styles.controlButton} ${
                          length === item.toLowerCase()
                            ? styles.activeButton
                            : styles.glassButton
                        }`}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  className={`${styles.generateButton} ${styles.glowHover}`}
                >
                  <Sparkles className={styles.buttonIcon} />
                  Generate Random Tweet
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.previewColumn}
          >
            <Card
              className={`${styles.card} ${styles.glassEffect} ${styles.glowBorder}`}
            >
              <Badge className={styles.livePreviewBadge}>Live Preview</Badge>
              <div className={styles.previewContent}>
                <motion.div
                  className={styles.tweetCard}
                  key={`${genre}-${tone}-${length}-${temperature[0]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.tweetText}>
                    {genre === "witty" && tone === "casual"
                      ? "🤔 Hot take: Everyone's talking about AI replacing jobs, but what if it just made us better at the human stuff? Like actually connecting with people instead of drowning in busywork."
                      : "💡 The future belongs to creators who understand that AI isn't about replacement—it's about amplification. Here's how to stay ahead of the curve."}
                  </p>
                  <div className={styles.tweetFooter}>
                    <div className={styles.tweetActions}>
                      <span>Like</span>
                      <span>Reply</span>
                      <span>Repost</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={styles.tweetLengthBadge}
                    >
                      {length === "short"
                        ? "140 chars"
                        : length === "starter"
                        ? "220 chars"
                        : "Thread ready"}
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      {/* Animated Blobs (positioned within the section) */}
      <div className={`${styles.blob} ${styles.blobOne}`}></div>
      <div className={`${styles.blob} ${styles.blobTwo}`}></div>
      <div className={`${styles.blob} ${styles.blobThree}`}></div>
      <div className={`${styles.blob} ${styles.blobFour}`}></div>
    </section>
  );
};

export default NoTranscriptMode;
