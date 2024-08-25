import React, { useState, useEffect } from "react";
import "./FrontText.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MaskContainer } from "../ui/svg-mask-effect";

gsap.registerPlugin(ScrollTrigger);

function FrontText() {
  const targetDate = new Date("2024-10-15T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [shuffledText, setShuffledText] = useState("Tessaract X.0");
  const originalText = "Tessaract X.0";

  const padWithZero = (number) => {
    return number.toString().padStart(2, "0");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        const days = padWithZero(
          Math.floor(difference / (1000 * 60 * 60 * 24))
        );
        const hours = padWithZero(
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const minutes = padWithZero(
          Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        );
        const seconds = padWithZero(
          Math.floor((difference % (1000 * 60)) / 1000)
        );

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    // Initialize GSAP timeline for page load animation
    gsap.fromTo(
      ".MainText",
      {
        y: 100,
        autoAlpha: 0,
        scale: 0.5,
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Initialize GSAP ScrollTrigger for scroll animation
    ScrollTrigger.create({
      trigger: ".FrontText",
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.fromTo(
        ".MainText",
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
        },
        {
          y: 100,
          autoAlpha: 0,
          scale: 0.5,
          duration: 0.5,
          ease: "power2.inOut",
        }
      ),
      markers: false, // Set to true to enable markers for debugging
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    const shuffleText = () => {
      const textArray = originalText.split("");

      // Mix in random special characters
      const augmentedArray = textArray.map((char) =>
        Math.random() > 0.5
          ? specialChars.charAt(Math.floor(Math.random() * specialChars.length))
          : char
      );

      for (let i = augmentedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [augmentedArray[i], augmentedArray[j]] = [
          augmentedArray[j],
          augmentedArray[i],
        ];
      }
      return augmentedArray.join("");
    };

    const interval = setInterval(() => {
      setShuffledText(shuffleText());
    }, 50); // Speed up the shuffling by reducing the interval time

    setTimeout(() => {
      clearInterval(interval);
      setShuffledText(originalText);
    }, 1500); // Shorten the duration of shuffling

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl mx-auto front-text-paragraph text-left text-[4rem] font-bold 
  sm:text-[6rem] md:text-[9rem]"
          >
            {shuffledText}
          </p>
        }
        className="h-[100vh] border rounded-md front-text-paragraph"
      >
        <span className="text-red-500">Warning:</span> Side effects of attending{" "}
        <span className="text-red-500">TESSARACT</span> may include
        uncontrollable excitement, tech inspiration overload, and the
        irresistible urge to create the next big thing !
      </MaskContainer>
    </div>
  );
}

export default FrontText;
