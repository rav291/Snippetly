"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import {
  IconSquareRoundedX,
  IconBulb,
  IconRocket,
  IconTarget,
  IconSparkles,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const loadingStates = [
  {
    text: "Analyzing your content",
    tip: "💡 Pro tip: Longer transcripts generate more diverse tweets",
  },
  {
    text: "Identifying key themes",
    tip: "🚀 AI is finding the most engaging parts of your content",
  },
  {
    text: "Crafting engaging hooks",
    tip: "🎯 First impressions matter - we're optimizing your opening lines",
  },
  {
    text: "Optimizing character count",
    tip: "✨ Each tweet is crafted to maximize engagement within Twitter's limits",
  },
  {
    text: "Adding viral elements",
    tip: "🔥 We're incorporating trending patterns to boost your reach",
  },
  {
    text: "Finalizing your tweets",
    tip: "⚡ Almost ready! Your content will be perfectly formatted",
  },
];

const tips = [
  "💡 Tip: Use trending hashtags to increase visibility",
  "🎯 Pro tip: Post during peak hours (9-10 AM, 1-3 PM, 7-9 PM)",
  "🚀 Engagement hack: Ask questions in your tweets",
  "✨ Best practice: Keep your tone consistent across all tweets",
  "🔥 Viral secret: Use emotional triggers in your content",
  "⚡ Pro tip: Retweet your own tweets with different angles",
];

export function MultiStepLoader({
  loading,
  onComplete,
}: {
  loading: boolean;
  onComplete?: () => void;
}) {
  const [currentTip, setCurrentTip] = useState(0);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    if (loading) {
      setShowTips(true);
      const tipInterval = setInterval(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
      }, 3000);

      return () => clearInterval(tipInterval);
    } else {
      setShowTips(false);
    }
  }, [loading]);

  return (
    <Loader
      loadingStates={loadingStates}
      loading={loading}
      duration={2500}
      showTips={showTips}
      currentTip={tips[currentTip]}
      onComplete={onComplete}
    />
  );
}
