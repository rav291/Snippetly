"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const NoTranscriptMode = () => {
  const [temperature, setTemperature] = useState([0.7]);
  const [genre, setGenre] = useState("witty");
  const [tone, setTone] = useState("casual");
  const [length, setLength] = useState("short");

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4" variant="outline">
            <Zap className="w-4 h-4 mr-2" />
            Parameter Mode
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            No transcript? <span className="gradient-text">No problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our smart parameter system to generate tweets that match your
            exact style and goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-6 glass">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Temperature: {temperature[0]}
                    <span className="text-muted-foreground ml-2">
                      {temperature[0] < 0.3
                        ? "(Safe)"
                        : temperature[0] > 0.7
                        ? "(Creative)"
                        : "(Balanced)"}
                    </span>
                  </label>
                  <Slider
                    value={temperature}
                    onValueChange={setTemperature}
                    max={1}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Genre
                  </label>
                  <div className="grid grid-cols-2 gap-2">
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
                        className={
                          genre === item.toLowerCase()
                            ? "bg-gradient-primary"
                            : "glass"
                        }
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Tone</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Casual", "Professional", "Sarcastic"].map((item) => (
                      <Button
                        key={item}
                        variant={
                          tone === item.toLowerCase() ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setTone(item.toLowerCase())}
                        className={
                          tone === item.toLowerCase()
                            ? "bg-gradient-primary"
                            : "glass"
                        }
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Length
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Short", "Starter", "Thread"].map((item) => (
                      <Button
                        key={item}
                        variant={
                          length === item.toLowerCase() ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setLength(item.toLowerCase())}
                        className={
                          length === item.toLowerCase()
                            ? "bg-gradient-primary"
                            : "glass"
                        }
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary glow-hover">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Random Tweet
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 glass glow">
              <Badge className="mb-4" variant="secondary">
                Live Preview
              </Badge>
              <div className="space-y-4">
                <motion.div
                  className="p-4 bg-gradient-card rounded-lg border border-white/10"
                  key={`${genre}-${tone}-${length}-${temperature[0]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm">
                    {genre === "witty" && tone === "casual"
                      ? "🤔 Hot take: Everyone's talking about AI replacing jobs, but what if it just made us better at the human stuff? Like actually connecting with people instead of drowning in busywork."
                      : "💡 The future belongs to creators who understand that AI isn't about replacement—it's about amplification. Here's how to stay ahead of the curve."}
                  </p>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/10">
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>Reply</span>
                      <span>Repost</span>
                      <span>Like</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
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
    </section>
  );
};

export default NoTranscriptMode;
