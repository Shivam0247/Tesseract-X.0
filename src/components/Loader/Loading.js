// LoadingScreen.js
import React, { useEffect, useState } from 'react';

const fakeLogs = [
    '[OK] Starting S&T Club services...',
    '[OK] Initializing system resources...',
    '[OK] Loading S&T framework...',
    '[OK] Connecting to S&T network...',
    '[OK] Establishing secure communication channels...',
    '[OK] Authenticating user credentials...',
    '[OK] Fetching S&T Club database...',
    '[OK] Loading user preferences...',
    '[OK] Setting up environment variables...',
    '[OK] Checking for system updates...',
    '[OK] Applying patches and updates...',
    '[OK] Initializing core modules...',
    '[OK] Starting background services...',
    '[OK] Loading API handlers...',
    '[OK] Compiling assets...',
    '[OK] Optimizing database connections...',
    '[OK] Synchronizing with S&T servers...',
    '[OK] Fetching latest research articles...',
    '[OK] Connecting to Git repositories...',
    '[OK] Initializing AI-based analysis tools...',
    '[OK] Setting up machine learning models...',
    '[OK] Starting data analysis pipelines...',
    '[OK] Establishing connection with cloud servers...',
    '[OK] Monitoring system health...',
    '[OK] Loading visualization tools...',
    '[OK] Configuring user interface...',
    '[OK] Applying theme settings...',
    '[OK] Launching S&T dashboard...',
    '[OK] Starting real-time data feed...',
    '[OK] Encrypting sensitive information...',
    '[OK] Finalizing setup...',
    '[OK] Performing system diagnostics...',
    '[OK] Rendering S&T Club homepage...',
    '[OK] S&T Club initialization complete.',
  ];

const LoadingScreen = () => {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prevIndex) => {
        if (prevIndex < fakeLogs.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.loadingContainer}>
      <div style={styles.logContainer}>
        {fakeLogs.slice(0, logIndex + 1).map((log, index) => (
          <p key={index} style={styles.logText}>{log}</p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    height: '100vh',
    backgroundColor: '#000',
    color: '#0f0',
    fontFamily: 'monospace',
  },
  logContainer: {
    textAlign: 'left',
    padding: '20px',
  },
  logText: {
    margin: 0,
  },
};

export default LoadingScreen;
