import { TweetCard } from "@/components/magicui/tweet-card";

export default function TweetCardServer({ id }: { id: string }) {
  return (
    <div className="w-full">
      <TweetCard id={id} />
    </div>
  );
}
