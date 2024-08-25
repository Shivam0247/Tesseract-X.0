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
import TeamPage from "./components/Team/TeamPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontText />
      <Intro />
      <Event.AppleCardsCarouselDemo />
      <Team />
      <Gallery />
      <TeamPage />
      <Gallery />
    </div>
  );
}

export default App;
