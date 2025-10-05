import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
    Resources: ["Documentation", "Blog", "Guides", "Help Center", "Community"],
    Company: ["About", "Careers", "Contact", "Privacy", "Terms"],
  };

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Parallax Background Elements */}
      <motion.div
        className={`${styles.parallaxLayer} ${styles.layer1}`}
        style={{ y: y1 }}
      />
      <motion.div
        className={`${styles.parallaxLayer} ${styles.layer2}`}
        style={{ y: y2 }}
      />
      <motion.div
        className={`${styles.parallaxLayer} ${styles.layer3}`}
        style={{ y: y3 }}
      />

      {/* Mouse follower gradient */}
      <div
        className={styles.mouseGradient}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.08), transparent 40%)`,
        }}
      />

      <div className={styles.container}>
        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to transform your{" "}
              <span className={styles.gradientText}>content workflow</span>?
            </h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of creators who are already using Snippetly to
              scale their content.
            </p>
            <div className={styles.ctaButtons}>
              <Button className={styles.primaryButton}>
                <Sparkles className={styles.buttonIcon} />
                Start Free Trial
                <ArrowRight className={styles.buttonIcon} />
              </Button>
              <Button className={styles.secondaryButton}>Schedule Demo</Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <motion.div
            className={styles.brandSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.logo}>
              <Sparkles className={styles.logoIcon} />
              <span className={styles.logoText}>Snippetly</span>
            </div>
            <p className={styles.brandDescription}>
              The complete creator workflow system for content generation,
              organization, and scheduling.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              className={styles.linksSection}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.linksTitle}>{category}</h3>
              <ul className={styles.linksList}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.footerLink}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={styles.copyright}>
            © 2025 Snippetly. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>•</span>
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
            <span className={styles.separator}>•</span>
            <a href="#" className={styles.bottomLink}>
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated blobs */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
    </footer>
  );
};

export default Footer;
