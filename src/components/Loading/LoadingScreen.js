import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("Tesseract");
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const shuffleTime = 2500;
  const finalWordDisplayTime = 2500;

  const getRandomCharacter = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const updateDisplayedWord = () => {
    if (loading) {
      let updatedWord = "";
      for (let i = 0; i < displayedWord.length; i++) {
        updatedWord += getRandomCharacter();
      }
      setDisplayedWord(updatedWord);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() * 10; // Increase the progress randomly
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      updateDisplayedWord();
    }, 100);

    return () => clearInterval(wordInterval);
  }, [loading]);

  useEffect(() => {
    const shuffleTimeout = setTimeout(() => {
      setLoading(false);
      setDisplayedWord("TESSERACT");
    }, shuffleTime);

    return () => clearTimeout(shuffleTimeout);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }, finalWordDisplayTime);
    }
  }, [progress, onLoadingComplete]);

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
