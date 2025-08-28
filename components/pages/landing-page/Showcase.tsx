"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import LightRays from "@/components/custom/react-bits/LightRays";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "This tweet generator is incredible! I went from struggling to write engaging content to creating viral tweets in minutes. Game changer for my social media strategy.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "As a content creator, this tool has saved me hours every week. The AI understands my brand voice perfectly and generates tweets that actually perform well.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I was skeptical about AI tweet generators, but this one actually produces quality content. My engagement has increased by 40% since I started using it.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);
const fourthRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-80 cursor-pointer overflow-hidden rounded-xl border p-6 transition",
        "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur-md",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <img
          className="rounded-full w-12 h-12"
          width="48"
          height="48"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-white/90 leading-relaxed">
        {body}
      </blockquote>
    </figure>
  );
};

const ShowCase = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center')",
            backgroundPosition: "center 30%",
            backgroundSize: "cover",
            minHeight: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-[40rem] w-full flex-row items-center justify-center gap-6 overflow-hidden [perspective:900px]">
        <div
          className="flex flex-row items-center gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-lg"
          style={{
            transform:
              "translateX(-90px) translateZ(-100px) rotateX(16deg) rotateY(-8deg) rotateZ(16deg)",
          }}
        >
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:22s]" vertical>
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:21s]" vertical>
            {thirdRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          <Marquee pauseOnHover className="[--duration:23s]" vertical>
            {fourthRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
      </div>
    </section>
  );
};

export default ShowCase;
