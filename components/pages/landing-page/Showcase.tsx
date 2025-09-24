/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Rohan",
    username: "@rohan_techie",
    body: "The pace of innovation in AI is genuinely breathtaking; it feels like we're on the cusp of a new industrial revolution. However, the ethical implications around job displacement and bias in algorithms require far more immediate and thoughtful discourse. We need to build responsibly, not just rapidly.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Priya",
    username: "@priya_writes",
    body: "I'm genuinely astonished by how seamlessly new smart home tech integrates into daily life, making mundane tasks effortless. It's a testament to good design when technology becomes invisible. Yet, the privacy concerns about constant data collection remain a looming shadow over all this convenience, demanding more transparency.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Arjun",
    username: "@arjun_insights",
    body: "I'm at a loss for words when I see how far connectivity has come, bringing the entire world to our fingertips. This ubiquitous access to information and people is truly amazing, but it also highlights the urgent need for digital literacy and critical thinking skills to navigate misinformation effectively. The responsibility is immense.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Meera",
    username: "@meera_ai_hub",
    body: "AI isn't just a tool; it's a co-pilot fundamentally changing how we approach problem-solving. But we're barely scratching the surface of its true societal impact. The ethical considerations are paramount, and we need more than just engineering solutions to navigate them responsibly.",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Sanjay",
    username: "@sanjay_trends",
    body: "Subscription fatigue is real, making us re-evaluate what we truly value online. Instead of endless streaming services, imagine a world where quality, independent content thrives because we directly support creators. The old 'ad-supported' model is just exhausting and unsustainable now.",
    img: "https://avatar.vercel.sh/sanjay",
  },
  {
    name: "Deepa",
    username: "@deepa_digital",
    body: "The metaverse everyone's hyping? It's just a fancy rebranding of existing virtual worlds, and frankly, it feels more like a walled garden dream than an open, accessible future. Until it offers genuinely new utility beyond gaming and meetings, it's merely another tech buzzword without substance.",
    img: "https://avatar.vercel.sh/deepa",
  },
  {
    name: "Kiran",
    username: "@kiran_lifehacks",
    body: "Our phones are too smart, or maybe we just don't use them smartly enough. The constant notifications and endless apps are a productivity killer, diminishing our focus. We desperately need a digital detox culture that's as easy to adopt as the latest social media trend. Simplicity is the new luxury for our minds.",
    img: "https://avatar.vercel.sh/kiran",
  },
  {
    name: "Vivek",
    username: "@vivek_dev_ops",
    body: "Low-code/no-code platforms are empowering, but let's be honest, they're also creating a massive wave of 'accidental complexity' down the line. While they democratize development, the lack of foundational software engineering knowledge could lead to fragile systems. Long-term maintainability is a ticking time bomb waiting to explode.",
    img: "https://avatar.vercel.sh/vivek",
  },
  {
    name: "Ananya",
    username: "@ananya_future",
    body: "The 'always-on' culture fueled by instant messaging and remote work is unsustainable for mental health and genuine productivity. We need clearer boundaries and a re-emphasis on focused work without constant interruptions. Technology should serve our well-being, not dictate our availability 24/7. It's time to reclaim our offline lives and peace of mind.",
    img: "https://avatar.vercel.sh/ananya",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      style={{
        width: "400px"
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[800px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:30s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
