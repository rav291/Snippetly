import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, Star, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ContentLibrary.module.css";

const ContentLibrary = () => {
  const projects = [
    { name: "YouTube Series #12", tweets: 45 },
    { name: "Newsletter Campaign", tweets: 28 },
    { name: "Product Launch", tweets: 67 },
    { name: "Personal Brand", tweets: 124 },
  ];

  const favorites = [
    {
      text: "The counter-intuitive secret nobody talks about when...",
      starred: true,
    },
    {
      text: "I increased traffic by 400% in 3 months. Here's what...",
      starred: true,
    },
    {
      text: "Why most creators fail at consistency (and how to...",
      starred: true,
    },
  ];

  const insights = [
    {
      label: "Analyzing your writing patterns...",
      progress: 75,
      color: "#00d4ff",
    },
    { label: "Peak posting", progress: 90, color: "#7b61ff" },
    { label: "Voice identity", progress: 65, color: "#ff3366" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className={styles.badge}>
            <FolderOpen className={styles.badgeIcon} />
            Organization
          </Badge>
          <h2 className={styles.title}>
            Build your{" "}
            <span className={styles.gradientText}>content library</span>
          </h2>
          <p className={styles.subtitle}>
            Save tweets, create projects, and let AI learn your style for better
            future generations.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.gridItem}
          >
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <FolderOpen className={styles.sectionIcon} />
                <h3 className={styles.cardTitle}>My Projects</h3>
              </div>

              <div className={styles.projectList}>
                {projects.map((project, i) => (
                  <div key={i} className={styles.projectItem}>
                    <div className={styles.projectInfo}>
                      <div className={styles.projectIcon}></div>
                      <span className={styles.projectName}>{project.name}</span>
                    </div>
                    <Badge className={styles.tweetCount}>
                      {project.tweets} tweets
                    </Badge>
                  </div>
                ))}
              </div>

              <Button className={styles.createButton}>
                <Zap className={styles.buttonIcon} />
                All teams your style
              </Button>
            </Card>
          </motion.div>

          {/* Favorites Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.gridItem}
          >
            <Card className={styles.card}>
              <div className={styles.cardHeader}>
                <Star className={styles.sectionIcon} />
                <h3 className={styles.cardTitle}>Favorites</h3>
              </div>

              <div className={styles.favoritesList}>
                {favorites.map((fav, i) => (
                  <div key={i} className={styles.favoriteItem}>
                    <Star className={styles.starIcon} />
                    <p className={styles.favoriteText}>{fav.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Contextual Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.intelligenceSection}
        >
          <Card className={`${styles.card} ${styles.intelligenceCard}`}>
            <Badge className={styles.aiBadge}>
              <Lightbulb className={styles.badgeIcon} />
              AI learns your style
            </Badge>
            <h3 className={styles.intelligenceTitle}>
              Contextual Intelligence
            </h3>
            <p className={styles.intelligenceText}>
              The more you save and favorite, the better our AI understands your
              voice, tone, and what resonates with your audience.
            </p>

            <div className={styles.insightsList}>
              {insights.map((insight, i) => (
                <div key={i} className={styles.insightItem}>
                  <div className={styles.insightHeader}>
                    <span className={styles.insightLabel}>{insight.label}</span>
                    <span className={styles.insightPercent}>
                      {insight.progress}%
                    </span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${insight.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      style={{ backgroundColor: insight.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
    </section>
  );
};

export default ContentLibrary;
