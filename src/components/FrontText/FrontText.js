import React, { useState, useEffect, useRef } from "react";
import "./FrontText.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FrontText() {
  const targetDate = new Date("2024-10-15T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const textRef = useRef(null);

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

  return (
    <div className="FrontText" ref={textRef}>
      <div className="MainText">
        <span className="Maintitle sm:text-[100px] text-[50px]">
          <span className="font-robotic-1">T</span>
          <span className="font-modern-1">E</span>
          <span className="font-robotic-2">S</span>
          <span className="font-modern-2">S</span>
          <span className="font-robotic-1">A</span>
          <span className="font-modern-1">R</span>
          <span className="font-robotic-2">A</span>
          <span className="font-modern-2">C</span>
          <span className="font-robotic-1">T</span>
        </span>
        <span className="sm:text-[100px] text-[50px]">
          <span className="font-modern-1">X</span>
          <span className="font-modern-2">.</span>
          <span className="font-modern-1">0</span>
        </span>
      </div>

      <div className="countDown">
        <span className="countdown flex flex-col text-[17px]">
          <span>
            <span>{timeLeft.days} : </span>
            <span>{timeLeft.hours}</span> : <span>{timeLeft.minutes}</span> :
            <span> {timeLeft.seconds}</span>
          </span>
          <span className="text-[13px]">
            <span>DD : </span>
            <span>HH</span> : <span>MM</span> :<span> SS</span>
          </span>
        </span>
        <span>PDEU</span>
      </div>
    </div>
  );
}

export default FrontText;
