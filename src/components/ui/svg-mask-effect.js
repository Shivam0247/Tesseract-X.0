"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import mask from "./mask.svg"; // Correctly import the SVG file
import back from "../../Images/front1.jpeg"; // Correctly import the background image

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 800, // Increase the reveal size to make the circle larger
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative w-[100%] border-none", className)}
      animate={{
        backgroundColor: isHovered ? "black" : "var(--black)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute text-white"
        style={{
          backgroundImage: `url(${back})`, // Use the imported background image
          backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // Adjust the position if needed
          maskImage: `url(${mask})`, // Use the imported SVG file
          WebkitMaskImage: `url(${mask})`, // For WebKit browsers
          maskSize: `${maskSize}px`,
          WebkitMaskSize: `${maskSize}px`, // For WebKit browsers
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat", // For WebKit browsers
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`, // For WebKit browsers
        }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
