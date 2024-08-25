import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

function sponsor() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      back: "asssas",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
      back: "asssas",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      back: "asssas",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      back: "asssas",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
      back: "asssas",
    },
  ];

  return (
    <div className="w-full min-h-[100vh] pb-20 py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-[2em] mb-[1em] text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Pioneers of Possibility.
      </h2>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="medium"
        />
      </div>
    </div>
  );
}

export default sponsor;
