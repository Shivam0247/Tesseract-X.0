import React from "react";
import FrontText from "../FrontText/FrontText";
import Intro from "../Intro/Intro";
import * as Event from "../Events/Event";
import Team from "../Team/Team";
import Galler from "../Gallery/Gallery";
import Sponsor from "../Sponsor/sponsor";

function Home() {
  return (
    <div>
      <FrontText />
      <Intro />
      <Event.AppleCardsCarouselDemo />
      <Team />
      <Galler />
      {/* <Sponsor /> */}
    </div>
  );
}

export default Home;
