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
import Sponsor from "./components/Sponsor/sponsor";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MainTeam from "./components/Team/MainTeam";
import MainGallery from "./components/Gallery/MainGalley";
import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/Loading/LoadingScreen";
import FetchImageState from "./Context/FetchImage/FetchImageState";
function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <FetchImageState>
        <BrowserRouter>
          {loading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <div className={`App ${fadeIn ? "fade-in" : ""}`}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/gallery" element={<MainGallery />} />
                <Route path="/team" element={<MainTeam />} />
              </Routes>
              <Footer />
              <Analytics />
            </div>
          )}
        </BrowserRouter>
      </FetchImageState>
    </>
  );
}

export default App;
