import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

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
    if (progress >= 100) {
      setTimeout(() => {
        onLoadingComplete(); // Notify parent component that loading is complete
      }, 500); // A short delay before hiding the screen
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="scanner">
        <div className="fingerprint"></div>
        <div className="scan-line"></div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
