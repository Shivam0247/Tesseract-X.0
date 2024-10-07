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
    <div className={`loaderScreen ${fadeOut ? "fade-out" : "fade-in"}`}>
      <div className="loader text-[40px] sm:text-[80px] md:text-[100px] lg:text-[120px]">
        {displayedWord}
      </div>
      <div className="percentage">{Math.floor(progress)}%</div>
    </div>
  );
};

export default LoadingScreen;
