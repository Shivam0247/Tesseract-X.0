import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("Loading...");
  const [fadeOut, setFadeOut] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const totalLoadingTime = 4000; // Total time for loading screen in milliseconds
  const wordDisplayTime = 2500; // Time to display words in milliseconds
  const shuffleInterval = wordDisplayTime / 27; // Interval for word changing
  const words = [
    "Aatmann",
    "Alchemy",
    "Anirveda",
    "Apogee3",
    "Avioics",
    "Brahmand",
    "Bulls & Bears",
    "Cretus",
    "Cube-I-Cult",
    "EmpowerU",
    "Encode",
    "Mind Ripple",
    "Network",
    "Nucleus",
    "Respawn",
    "SOM",
    "Sorriso",
    "Symmetry",
    "Synergy",
    "TIR",
    "VGA",
  ];

  // Simulate progress increase to reach 100% in totalLoadingTime
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(
          oldProgress + 100 / (totalLoadingTime / 100),
          100
        );
        if (newProgress >= 100) {
          clearInterval(progressInterval);
        }
        return newProgress;
      });
    }, 100); // Adjust the interval as needed

    return () => clearInterval(progressInterval);
  }, []);

  // Update the displayed word periodically based on progress
  useEffect(() => {
    let wordInterval;
    if (progress < 100) {
      // Update word while progress is below 100
      wordInterval = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
      }, shuffleInterval);
    } else {
      // When progress reaches 100%, show "TESSERACT"
      setDisplayedWord("TESSERACT");
      setFadeOut(true);
      setTimeout(() => {
        onLoadingComplete();
      }, 1000); // Wait for fade-out duration of 0.5 seconds
    }

    return () => clearInterval(wordInterval);
  }, [progress, onLoadingComplete]);

  // Update displayed word based on wordIndex change
  useEffect(() => {
    if (progress < 100) {
      setDisplayedWord(words[wordIndex]);
    }
  }, [wordIndex, progress, words]);

  return (
    <div className="loadingscreen h-[80%] w-full bg-black bg-grid-white/[0.150] relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 h-[60%] w-full flex justify-center items-center">
        <div
          className={`loaderScreen w-[100vw] min-h-[90vh] sm:h-[100vh] ${
            fadeOut ? "fade-out" : "fade-in"
          }`}
        >
          <div className="loader text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px]">
            {displayedWord}
          </div>
          <div className="percentage">{Math.floor(progress)}%</div>
        </div>
      </p>
    </div>
  );
};

export default LoadingScreen;
