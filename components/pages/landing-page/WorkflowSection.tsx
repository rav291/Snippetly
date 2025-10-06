import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Calendar, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WorkflowSection.module.css';

const WorkflowSection = () => {
  const workflows = [
    {
      icon: Sparkles,
      title: "Generated",
      count: 3,
      items: [
        { text: "Just discovered this game-changing productivity hack...", status: "Draft" },
        { text: "Here's what nobody tells you about AI tools:", status: "Draft" },
        { text: "Why simple tech stacks are 10x better this week:", status: "Draft" }
      ]
    },
    {
      icon: Calendar,
      title: "Scheduled",
      count: 2,
      items: [
        { text: "Content written to build your web biz...", time: "2:45 PM" },
        { text: "The biggest tech startup myths you need...", time: "4:30 PM" }
      ]
    },
    {
      icon: Send,
      title: "Posted",
      count: 1,
      items: [
        { text: "Why automated AI-powered workflows...", stats: "2.3k views" }
      ]
    }
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
            <Sparkles className={styles.badgeIcon} />
            Workflow System
          </Badge>
          <h2 className={styles.title}>
            More than just generation
            <br />
            <span className={styles.gradientText}>it's a complete workflow</span>
          </h2>
          <p className={styles.subtitle}>
            This is what makes Slippidly different. Organize, refine, and schedule your
            content like a pro.
          </p>
        </motion.div>

        <div className={styles.workflowGrid}>
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <motion.div
                key={workflow.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={styles.workflowCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitleRow}>
                      <Icon className={styles.cardIcon} />
                      <h3 className={styles.cardTitle}>{workflow.title}</h3>
                    </div>
                    <Badge className={styles.countBadge}>{workflow.count}</Badge>
                  </div>

                  <div className={styles.itemsList}>
                    {workflow.items.map((item, i) => (
                      <div key={i} className={styles.item}>
                        <div className={styles.itemBullet}></div>
                        <div className={styles.itemContent}>
                          <p className={styles.itemText}>{item.text}</p>
                          <div className={styles.itemMeta}>
                            {item.status && <span className={styles.status}>{item.status}</span>}
                            {item.time && <span className={styles.time}>{item.time}</span>}
                            {item.stats && <span className={styles.stats}>{item.stats}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {index === 0 && (
                    <button className={styles.moreButton}>+ Generate More</button>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
    </section>
  );
};

export default WorkflowSection;