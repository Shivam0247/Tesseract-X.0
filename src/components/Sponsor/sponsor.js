import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
function Sponsor() {
  const testimonials = [
    {
      back: "Title Sponsor",
      image: "/maxresdefault.jpg",
    },
    {
      back: "Title Sponsor",
      image: "/logo2.png",
    },
    {
      back: "Co-Title Sponsor",
      image: "/logo3.jpg",
    },
    {
      back: "Co-Title Sponsor",
      image: "/logo4.jpg",
    },
    {
      back: "Education Partner",
      image: "/logo5.jpg",
    },
  ];

  return (
    <div className="w-full min-h-[50vh] pb-20 py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-[2em] mb-[1em] text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Pioneers of Possibility.
      </h2>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
}

export default Sponsor;
