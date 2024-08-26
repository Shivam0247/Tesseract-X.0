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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Team" element={<MainTeam />} />
        </Routes>
        {/* <FrontText />
        <Intro />
        <Event.AppleCardsCarouselDemo />
        <Team />
        <Gallery />
        <Sponsor /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
