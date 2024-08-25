import logo from "./logo.svg";
import "./App.css";
import { Input } from "@nextui-org/react";
import Navbar from "./components/Navbar/Navbar";
import FrontText from "./components/FrontText/FrontText";
import Intro from "./components/Intro/Intro";
import * as Event from "./components/Events/Event";
import Team from "./components/Team/Team";
import Gallery from "./components/Gallery/Gallery";
import { TracingBeam } from "./components/ui/tracing-beam";
import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/Loader/Loading';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 300); // Delay to add some transition time
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${isLoading ? 'loading' : ''} ${showContent ? 'loaded' : ''}`}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="content">
          <div className="App">
            <Navbar />
            <FrontText />
            <Intro />
            <Event.AppleCardsCarouselDemo />
            <Team />
            <Gallery />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;