import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MainTeam from "./components/Team/MainTeam";
import MainGallery from "./components/Gallery/MainGalley";
import { AboutUs } from "./components/AboutUs/AboutUs";
import LoadingScreen from "./components/Loading/LoadingScreen";
import FetchImageState from "./Context/FetchImage/FetchImageState";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setFadeIn(false);
    const timer = setTimeout(() => {
      handleLoadingComplete();
      setFadeIn(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollTop />
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
    </>
  );
}

function App() {
  return (
    <FetchImageState>
      <Router>
        <AppContent />
      </Router>
    </FetchImageState>
  );
}

export default App;
