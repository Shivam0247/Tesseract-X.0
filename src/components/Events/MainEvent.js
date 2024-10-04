import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "../Team/Team.css";
import { Carousel, Card } from "../ui/apple-cards-carousel_MainEvent";
import network1 from "../../Images/Events/Network/Netwrok 1.1.png";
import network2 from "../../Images/Events/Network/Network 2.1.jpg";
import anirveda1 from "../../Images/Events/Anirveda/1.1.jpg";
import anirveda2 from "../../Images/Events/Anirveda/2.1.jpg";
import anirveda3 from "../../Images/Events/Anirveda/3.1.jpg";
import cretus1 from "../../Images/Events/Cretus/1.1.jpg";
import cretus2 from "../../Images/Events/Cretus/2.1.png";
import cretus3 from "../../Images/Events/Cretus/3.1.jpg";
import cretus4 from "../../Images/Events/Cretus/4.2.jpg";
import aataman1 from "../../Images/Events/Aatman/1.2.png";
import aataman2 from "../../Images/Events/Aatman/2.1.jpg";
import aataman3 from "../../Images/Events/Aatman/3.1.jpg";
import Avionics1 from "../../Images/Events/Avionics/1.2.jpg";
import Avionics2 from "../../Images/Events/Avionics/2.1.jpg";
import Respawn1 from "../../Images/Events/Respawn/1.2.jpg";
import Respawn2 from "../../Images/Events/Respawn/2.1.jpg";
import Respawn3 from "../../Images/Events/Respawn/3.2.jpg";
import mindripple1 from "../../Images/Events/Mind Ripple/1.2.png";
import mindripple2 from "../../Images/Events/Mind Ripple/2.1.png";
import mindripple3 from "../../Images/Events/Mind Ripple/3.1.png";
import bullsandBears1 from "../../Images/Events/B&B/1.2.png";
import bullsandBears2 from "../../Images/Events/B&B/2.1.png";
import bullsandBears3 from "../../Images/Events/B&B/3.1.png";
import Synergy1 from "../../Images/Events/Synergy/1.3.png";
import Synergy2 from "../../Images/Events/Synergy/2.1.jpg";
import Synergy3 from "../../Images/Events/Synergy/3.3.png";
import Symmetry1 from "../../Images/Events/Symmetry/1.2.jpg";
import Symmetry2 from "../../Images/Events/Symmetry/2.3.jpg";
import Symmetry3 from "../../Images/Events/Symmetry/3.1.jpg";
import Symmetry4 from "../../Images/Events/Symmetry/4.3.png";
import som1 from "../../Images/Events/SOM/1.3.jpg";
import som2 from "../../Images/Events/SOM/2.1.jpg";
import som3 from "../../Images/Events/SOM/3.1.jpg";
import encode1 from "../../Images/Events/Encode/1.1.jpg";
import encode2 from "../../Images/Events/Encode/2.1.png";
import encode3 from "../../Images/Events/Encode/3.1.jpg";
import tir1 from "../../Images/Events/TIR/1.3.jpg";
import tir2 from "../../Images/Events/TIR/2.3.jpg";
import tir3 from "../../Images/Events/TIR/3.1.jpg";
import cube1 from "../../Images/Events/Cube-i-Cult/1.2.png";
import cube2 from "../../Images/Events/Cube-i-Cult/2.3.png";
import vga1 from "../../Images/Events/VGA/1.1.jpg";
import vga2 from "../../Images/Events/VGA/2.3.jpg";
import Sorriso1 from "../../Images/Events/Sorriso/1.1.jpg";
import Sorriso2 from "../../Images/Events/Sorriso/2.1.jpg";
import Brahmand1 from "../../Images/Events/Brahmand/1.2.png";
import Brahmand2 from "../../Images/Events/Brahmand/2.1.jpg";
import Brahmand3 from "../../Images/Events/Brahmand/3.1.jpg";
import Brahmand4 from "../../Images/Events/Brahmand/4.1.jpg";
import Apogee1 from "../../Images/Events/Apogee/1.1.jpg";
import Nucleus1 from "../../Images/Events/Nucleus/1.2.png";
import Nucleus2 from "../../Images/Events/Nucleus/2.3.jpg";
import Nucleus3 from "../../Images/Events/Nucleus/3.1.png";
import Empower1 from "../../Images/Events/Empower U/1.2.jpg";
import Alchemy1 from "../../Images/Events/Alchemy/1.3.png";
import Alchemy2 from "../../Images/Events/Alchemy/2.1.jpg";

function MainEvent() {
  // Grouping the data by category
  const categories = Array.from(new Set(data.map((item) => item.category)));

  const [openKeys, setOpenKeys] = useState(
    categories.map((_, index) => (index + 1).toString())
  );

  const handleSelectionChange = (keys) => {
    const keysArray = Array.from(keys);
    setOpenKeys(keysArray);
  };

  return (
    <div className="MainTeam w-full min-h-[50vh] pb-20 py-10 bg-black">
      <h2 className="max-w-[100%] mx-[1.8em] mb-[1rem] text-4xl md:text-5xl flex justify-center font-bold text-neutral-200 mt-[6rem]">
        The Event
      </h2>
      <h4 className="text-neutral-300 flex justify-center text-[15px] mb-[3em]">
        Presenting the Events
      </h4>

      <Accordion
        selectionMode="multiple"
        selectedKeys={openKeys}
        onSelectionChange={handleSelectionChange}
        className="text-white px-5 sm:px-[3em]"
        fullWidth
      >
        {/* Map over categories to create AccordionItems for each */}
        {categories.map((category, index) => {
          // Filter the data based on the current category
          const categoryItems = data.filter(
            (item) => item.category === category
          );
          const cards = categoryItems.map((card, i) => (
            <Card key={card.src} card={card} index={i} />
          ));

          return (
            <AccordionItem
              key={(index + 1).toString()}
              aria-label={category}
              title={
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {category} Events
                </span>
              }
              keepContentMounted
            >
              <div className="team mx-[2em] flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row flex-wrap justify-center">
                <Carousel items={cards} />
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default MainEvent;

const DummyContent = () => {
  return (
    <>
      {[...Array(3).keys()].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes.
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Network",
    title: "Designing your life",
    src: network1,
    content: <DummyContent />,
  },
  {
    category: "Network",
    title: "Credibility Crunch",
    src: network2,
    content: <DummyContent />,
  },
  {
    category: "Anirveda",
    title: "Change My Mind",
    src: anirveda1,
    content: <DummyContent />,
  },
  {
    category: "Anirveda",
    title: "Global-O-Poly",
    src: anirveda2,
    content: <DummyContent />,
  },
  {
    category: "Anirveda",
    title: "Strategic Supply Management",
    src: anirveda3,
    content: <DummyContent />,
  },
  {
    category: "Cretus",
    title: "RoboChef",
    src: cretus1,
    content: <DummyContent />,
  },
  {
    category: "Cretus",
    title: "Universe of Robotics",
    src: cretus2,
    content: <DummyContent />,
  },
  {
    category: "Cretus",
    title: "3D Printing and Designing Workshop",
    src: cretus3,
    content: <DummyContent />,
  },
  {
    category: "Cretus",
    title: "VR Robosoccer",
    src: cretus4,
    content: <DummyContent />,
  },
  {
    category: "Aatmann",
    title: "Brain Sell",
    src: aataman1,
    content: <DummyContent />,
  },
  {
    category: "Aatmann",
    title: "Bring Your own Boost",
    src: aataman2,
    content: <DummyContent />,
  },
  {
    category: "Aatmann",
    title: "Psynema 4.0",
    src: aataman3,
    content: <DummyContent />,
  },
  {
    category: "Avionics",
    title: "Drone Racing Simulator",
    src: Avionics1,
    content: <DummyContent />,
  },
  {
    category: "Avionics",
    title: "Glider Making Hackathon",
    src: Avionics2,
    content: <DummyContent />,
  },
  {
    category: "Respawn",
    title: "FIFA Tournament",
    src: Respawn1,
    content: <DummyContent />,
  },
  {
    category: "Respawn",
    title: "PC Building Workshop",
    src: Respawn2,
    content: <DummyContent />,
  },
  {
    category: "Respawn",
    title: "Escape Room Challenge",
    src: Respawn3,
    content: <DummyContent />,
  },
  {
    category: "Mind Ripple",
    title: "Matrix Breakout",
    src: mindripple1,
    content: <DummyContent />,
  },
  {
    category: "Mind Ripple",
    title: "Enigma",
    src: mindripple2,
    content: <DummyContent />,
  },
  {
    category: "Mind Ripple",
    title: "Quizter",
    src: mindripple3,
    content: <DummyContent />,
  },
  {
    category: "Bulls and Bears",
    title: "Markets Unlocked",
    src: bullsandBears1,
    content: <DummyContent />,
  },
  {
    category: "Bulls and Bears",
    title: "Bazaar 6.0",
    src: bullsandBears2,
    content: <DummyContent />,
  },
  {
    category: "Bulls and Bears",
    title: "Crisis Compass",
    src: bullsandBears3,
    content: <DummyContent />,
  },
  {
    category: "Synergy",
    title: "BizzTalk Session 1",
    src: Synergy1,
    content: <DummyContent />,
  },
  {
    category: "Synergy",
    title: "Craft your Identity",
    src: Synergy2,
    content: <DummyContent />,
  },
  {
    category: "Synergy",
    title: "The Art of Negotiation",
    src: Synergy3,
    content: <DummyContent />,
  },
  {
    category: "Symmetry",
    title: "GameCraft",
    src: Symmetry1,
    content: <DummyContent />,
  },
  {
    category: "Symmetry",
    title: "Stop Motion 3.0",
    src: Symmetry2,
    content: <DummyContent />,
  },
  {
    category: "Symmetry",
    title: "Blender Basics",
    src: Symmetry3,
    content: <DummyContent />,
  },
  {
    category: "Symmetry",
    title: "Virtual Verse",
    src: Symmetry4,
    content: <DummyContent />,
  },
  {
    category: "SOM",
    title: "Mind Maze",
    src: som1,
    content: <DummyContent />,
  },
  {
    category: "SOM",
    title: "Elemental Math Masters",
    src: som2,
    content: <DummyContent />,
  },
  {
    category: "SOM",
    title: "AlgoThon",
    src: som3,
    content: <DummyContent />,
  },
  {
    category: "Encode",
    title: "Guardians of the Elements",
    src: encode1,
    content: <DummyContent />,
  },
  {
    category: "Encode",
    title: "Capture the Flag: Elemental Edition",
    src: encode2,
    content: <DummyContent />,
  },
  {
    category: "Encode",
    title: "Code Tatva",
    src: encode3,
    content: <DummyContent />,
  },
  {
    category: "TIR",
    title: "Dome Designing",
    src: tir1,
    content: <DummyContent />,
  },
  {
    category: "TIR",
    title: "Global Architecture",
    src: tir2,
    content: <DummyContent />,
  },
  {
    category: "TIR",
    title: "Terra Turris",
    src: tir3,
    content: <DummyContent />,
  },
  {
    category: "Cube-I-Cult",
    title: "Puzzle-Hunt",
    src: cube1,
    content: <DummyContent />,
  },
  {
    category: "Cube-I-Cult",
    title: "Mosaic Building Workshop",
    src: cube2,
    content: <DummyContent />,
  },
  {
    category: "VGA",
    title: "Cineshaam",
    src: vga1,
    content: <DummyContent />,
  },
  {
    category: "VGA",
    title: "Color Grading Workshop",
    src: vga2,
    content: <DummyContent />,
  },
  {
    category: "Sorriso",
    title: "Shutter Trail",
    src: Sorriso1,
    content: <DummyContent />,
  },
  {
    category: "Sorriso",
    title: "Product Photography (Workshop + Shoot)",
    src: Sorriso2,
    content: <DummyContent />,
  },
  {
    category: "Brahmand",
    title: "GesoDesic Hemisphere",
    src: Brahmand1,
    content: <DummyContent />,
  },
  {
    category: "Brahmand",
    title: "AetherNet",
    src: Brahmand2,
    content: <DummyContent />,
  },
  {
    category: "Brahmand",
    title: "HelioTrack: Navigating the Sun's Pulse",
    src: Brahmand3,
    content: <DummyContent />,
  },
  {
    category: "Brahmand",
    title: "Night Sky Gazing",
    src: Brahmand4,
    content: <DummyContent />,
  },
  {
    category: "Apogee3",
    title: "Earth to Ether",
    src: Apogee1,
    content: <DummyContent />,
  },
  {
    category: "Nucleus",
    title: "Physics Expo",
    src: Nucleus1,
    content: <DummyContent />,
  },
  {
    category: "Nucleus",
    title: "Cyanotype Printing Workshop",
    src: Nucleus2,
    content: <DummyContent />,
  },
  {
    category: "Nucleus",
    title: "RGB Workshop",
    src: Nucleus3,
    content: <DummyContent />,
  },
  {
    category: "Empower U",
    title: "InspireX",
    src: Empower1,
    content: <DummyContent />,
  },
  {
    category: "Alchemy",
    title: "Parla Tech 6.0",
    src: Alchemy1,
    content: <DummyContent />,
  },
  {
    category: "Alchemy",
    title: "Fragrance Fusion",
    src: Alchemy2,
    content: <DummyContent />,
  },
];
