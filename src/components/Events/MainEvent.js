import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
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
const DummyContent = ({ description, highlight, img1, img2 }) => {
  const images = [img1, img2];
  return (
    <>
      <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-200">{highlight}</span>{" "}
          {description}
        </p>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1} mockup from Aceternity UI`}
            height={500}
            width={500}
            className="md:w-3/4 md:h-3/4 h-full w-full mx-auto object-contain my-5 rounded-lg"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          color="primary"
          className="bg-white rounded-lg w-[20%] text-black"
        >
          Register
        </Button>
      </div>
    </>
  );
};

const data = [
  {
    category: "Network",
    title: "Designing your life",
    src: network1,
    content: (
      <DummyContent
        highlight={"The event"}
        description={
          "aims to provide students and aspiring entrepreneurs with valuable insights and practical advice on launching and scaling successful startups, leveraging Anay Mashruwala's extensive experience in the startup ecosystem."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_2.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_1.jpg"
        }
      />
    ),
  },
  {
    category: "Network",
    title: "Credibility Crunch",
    src: network2,
    content: (
      <DummyContent
        highlight={"The Credibility Crunch "}
        description={
          "event aims to enhance students critical thinking and problem-solving skills by engaging them in real-world business challenges. Teams will analyze case studies of corporate failures and devise strategic solutions as if they were in charge of the companies involved. This collaborative experience fosters teamwork, innovation, and practical application of business concepts, ultimately preparing students for future professional scenarios."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Anirveda",
    title: "Change My Mind",
    src: anirveda1,
    content: (
      <DummyContent
        highlight={"Continuing our tradition "}
        description={
          "of hosting one of the most vibrant and engaging events of the Tesseract, AV is excited to return with yet another challenging yet thrilling experience. Participants will embark on a journey to enhance their brand awareness, learning how to craft compelling brand identities through unique selling propositions and creative positioning strategies. Along with boosting their creativity by using bold and inventive ambush marketing tactics, instantly engaging and intriguing viewers. In addition to this, advancing  their critical thinking as they analyze competitors' strengths and weaknesses, would certainly help them rectify new ways to outshine the competition.Collaboration takes the center stage with team brainstorming sessions, where working together would help develop mindful responses enhancing teamwork! learning how to deliver impactful, entertaining pitches are complementary. Join us for an immersive experience where corporate perspectivemeet the five elements, each offering unique insights into the world of Tech-Economics!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Anirveda_2.jpg"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Anirveda",
    title: "Global-O-Poly",
    src: anirveda2,
    content: (
      <DummyContent
        highlight={"Global-O-Poly "}
        description={
          "is a thrilling event hosted by ANIRVEDA that plunges participants into the fast-paced world of global economics. Teams will take on the role of world leaders, managing nations with unique strengths and economic needs. The goal is to secure critical resources, such as natural minerals and energy, by competing in a dynamic global marketplace. Throughout the event, participants will analyze global scenarios, navigate economic trends, and make fast, strategic decisions. Every move counts, as nations face sudden market changes, geopolitical tensions, and fluctuating global circumstances. Teams must carefully manage budgets, negotiate trade deals, form alliances, and adjust strategies to ensure sustainable growth and stability.Success in Global-O-Poly requires balancing aggressive economic expansion with careful resource management. It's more than just a game- it's an immersive experience that offers valuable insights into global economics, trade, and diplomacy, giving future leaders the opportunity to test their strategic thinking and guide their nations toward global dominance."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Anirveda_2.jpg"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Anirveda",
    title: "Strategic Supply Management",
    src: anirveda3,
    content: (
      <DummyContent
        highlight={"Strategic Supply Management "}
        description={
          "Unlock the power of the elements with Strategic Supply Management , a dynamic event by Anirveda that brings together Earth, Water, Fire, Air, and Ether to simulate the real-world challenges of managing supply chains. This unique competition tests participants' ability to design, optimize, and navigate the complexities of modern supply chains using a multi-faceted, hands-on approach.Teams will dive into a series of dynamic challenges that simulate the complexities of supply chain management., such as building stable logistics (Earth), adapting to supply fluctuations (Water), innovating production processes (Fire), enhancing communication (Air), and integrating AI and cloud solutions (Ether).In a simulated environment, teams will make strategic decisions impacting their outcomes, with expert-led workshops on cutting-edge technologies and sustainable practices enhancing their skills. Networking opportunities will connect attendees with industry professionals. At the end of the event, teams will present their strategies to a panel of judges, competing for recognition and awards for innovative solutions."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cretus",
    title: "RoboChef",
    src: cretus1,
    content: (
      <DummyContent
        highlight={"Participants "}
        description={
          "will design robots that demonstrate innovation through movement, action, and creativity, reflecting the transformative power of fire in technology. The robots would be tasked with navigating maze and use a pen."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cretus",
    title: "Universe of Robotics",
    src: cretus2,
    content: (
      <DummyContent
        highlight={"Participants "}
        description={
          "would obtain a comprehensive understanding of robotics by associating the five elements of nature with different aspects of robot design and functionality. CAD designing signifies Earth. Software and Simulations signify space. Processors, Control Systems, and Power Electronics signify fire. Networks and Communication relate with Water. Finally Dynamics and Actuators knowledge signifies Air. "
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cretus",
    title: "3D Printing and Designing Workshop",
    src: cretus3,
    content: (
      <DummyContent
        highlight={"The event "}
        description={
          "focuses on the innovative use of technology (3D printing) to demonstrate the creativity and impact of modern design in manufacturing signifying Ether element. There would also be a Slicing and designing competition."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cretus",
    title: "VR Robosoccer",
    src: cretus4,
    content: (
      <DummyContent
        highlight={"The event "}
        description={
          "will consist of robocars playing soccer on the ground, signifying Earth. Video streaming from the bots would be channeled to a VR headset, signifying Air."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Aatmann",
    title: "Brain Sell",
    src: aataman1,
    content: (
      <DummyContent
        highlight={"An unique experiential learning event "}
        description={
          "designed to test participant's understanding of consumer psychology and their ability to adapt(water) to dynamic selling situations. Participants will be divided into groups and given a basic, everyday product. Their mission? To sell this product to a series of randomly selected individuals, each with *distinct psychological* profiles."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Aatmann",
    title: "Bring Your own Boost",
    src: aataman2,
    content: (
      <DummyContent
        highlight={"The participants "}
        description={
          "will be divided into groups, where every group would be assigned to a particular element or a corresponding emotion, where they need to create a game or maybe make a fusion of it with a generic one, in order to connect to the emotion or element they’re assigned to, thus giving them a wide spectrum to think about. "
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Aatmann",
    title: "Psynema 4.0",
    src: aataman3,
    content: (
      <DummyContent
        highlight={"Psynema 4.0: "}
        description={
          "Psynema offers a captivating experience that combines the power of film and the 5 elements of life with the depth of psychological analysis. Through carefully selected movie clips, we will explore the profound connections between human emotions, behaviors, and the natural world."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Avionics",
    title: "Drone Racing Simulator",
    src: Avionics1,
    content: (
      <DummyContent
        highlight={"The Drone Racing Simulator "}
        description={
          "is an exhilarating competition that immerses participants in the high-speed world of drone racing through a cutting-edge simulation environment. This event challenges competitors to navigate their drones through a complex virtual race course, aiming to achieve the fastest time and demonstrating precision, agility, and strategic acumen."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Avionics",
    title: "Glider Making Hackathon",
    src: Avionics2,
    content: (
      <DummyContent
        highlight={"Glider Making Hackathon "}
        description={
          "is our immersive, hands-on workshop focused on the art and science of glider design and construction."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Respawn",
    title: "FIFA Tournament",
    src: Respawn1,
    content: (
      <DummyContent
        highlight={"Respawn: "}
        description={
          "The Gaming Club invites you to compete in a thrilling FIFA tournament! The participants will participate in a traditional 1v1 mode and the matches will be played on laptops with controllers in Classic Kickoff Mode . Bring your A-game and battle for exciting prizes!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Respawn",
    title: "PC Building Workshop",
    src: Respawn2,
    content: (
      <DummyContent
        highlight={"Respawn: "}
        description={
          "The Gaming Club of PDEU presents a hands-on PC Building Workshop where participants will learn to assemble a custom gaming PC from scratch. The workshop will cover everything from choosing the right components to properly assembling and optimizing the system for high performance. Whether you're new to building PCs or looking to refine your skills, this event will provide expert guidance and practical knowledge to help you create your ideal gaming rig."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Respawn",
    title: "Escape Room Challenge",
    src: Respawn3,
    content: (
      <DummyContent
        highlight={"Participants will "}
        description={
          "play Keep Talking and Nobody Explodes (KTANE), a high-stakes puzzle game where one person tries to defuse a bomb based on instructions from their teammates. Communication is critical as players in separate rooms must describe puzzles and solutions under a time limit. Teams must work together to solve puzzles and defuse the bomb to escape before time runs out."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Mind Ripple",
    title: "Matrix Breakout",
    src: mindripple1,
    content: (
      <DummyContent
        highlight={"Join us "}
        description={
          "for a thrilling Escape Room Challenge! Teams of 2-4 will race against time, solving puzzles to unlock the four elements—earth, water, fire, and air—and escape the room. With each round, the puzzles get tougher, testing your teamwork and problem-solving skills. Exciting prizes await the top 3 teams, and everyone gets a cool sticker for participating! Don't miss out on this immersive adventure!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Mind Ripple",
    title: "Enigma",
    src: mindripple2,
    content: (
      <DummyContent
        highlight={"Get ready "}
        description={
          "for Enigma, an exciting tech quiz designed around the classical elements—Earth, Fire, and Water! Teams of up to 3 will face thrilling rounds, from tech-geography in Earth to rapid-fire questions in Firestorm and a high-stakes Water round where strategic risk-taking is key. Join us on 18th October 2024 from 10 AM to 12 PM for this fast-paced, interactive quiz, and compete for a prize pool of INR 3000!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Mind Ripple",
    title: "Quizter",
    src: mindripple3,
    content: (
      <DummyContent
        highlight={"In this game, "}
        description={
          "participants will be required to answer questions to determine their position on a Twister mat, with the complexity of each question influencing how favourable their position is on the mat."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Bulls and Bears",
    title: "Markets Unlocked",
    src: bullsandBears1,
    content: (
      <DummyContent
        highlight={"The Credibility Crunch "}
        description={
          "event aims to enhance students critical thinking and problem-solving skills by engaging them in real-world business challenges. Teams will analyze case studies of corporate failures and devise strategic solutions as if they were in charge of the companies involved. This collaborative experience fosters teamwork, innovation, and practical application of business concepts, ultimately preparing students for future professional scenarios."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Bulls and Bears",
    title: "Bazaar 6.0",
    src: bullsandBears2,
    content: (
      <DummyContent
        highlight={"Get ready "}
        description={
          "to immerse yourself in the dynamic world of stock trading with Bazaar 6.0, a six-hour real-time market simulation where you'll start with ₹5 lakhs of virtual capital and face the challenge of growing it through strategic investments. As news, rumors, and tips flood the market, you'll need to stay sharp, assess risks, and make quick decisions to build your portfolio. This event is designed to mimic real-world market conditions, pushing you to think critically and react swiftly. Whether you're an experienced trader or a beginner, Bazaar 6.0 will test your financial instincts in an unpredictable market environment. The top 20 participants will share a total prize pool of ₹10,000."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Bulls and Bears",
    title: "Crisis Compass",
    src: bullsandBears3,
    content: (
      <DummyContent
        highlight={"In Crisis Compass, "}
        description={
          "you'll be thrust into the heart of a financial storm, managing ₹1,00,000 of virtual money through a series of escalating crises, from market crashes to economic recessions. Each round presents new challenges, forcing you to adapt, make strategic investment decisions, and protect your assets while navigating an unpredictable financial landscape. This intense simulation will test your ability to stay calm under pressure, manage risk, and emerge financially stable despite the chaos. By the end, only the sharpest financial minds will thrive, with the top 3 participants sharing a prize pool of ₹3,000."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Synergy",
    title: "BizzTalk Session 1",
    src: Synergy1,
    content: (
      <DummyContent
        highlight={"BizzTalk Session 1, "}
        description={
          "organized by Synergy - The Entrepreneurship Club of PDEU, is a flagship event where participants can engage with founders of leading companies. The event focuses on entrepreneurial journeys, overcoming challenges, and business adaptability, symbolized by the water theme. It features expert talks, a panel discussion, Q&A, and networking opportunities, providing valuable insights into starting, scaling, and sustaining businesses."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Synergy",
    title: "Craft your Identity",
    src: Synergy2,
    content: (
      <DummyContent
        highlight={"The Hands-on Workshop "}
        description={
          "for Business Card Making, Logo Making, and LinkedIn Crash Course, organized by Synergy - The Entrepreneurship Club of PDEU, focuses on empowering participants with essential branding skills. Through this workshop, participants will design business cards, create logos, and optimize their LinkedIn profiles, aligning with the fire theme of creativity and passion. The event offers practical knowledge on personal branding and hands-on experience with design tools, helping entrepreneurs build a strong online and offline presence."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Synergy",
    title: "The Art of Negotiation",
    src: Synergy3,
    content: (
      <DummyContent
        highlight={"The Art of Negotiation "}
        description={
          "event, organized by Synergy - The Entrepreneurship Club of PDEU, focuses on teaching participants essential negotiation skills. Through role-playing activities and live negotiation exercises, attendees will learn strategies, body language, and emotional intelligence to effectively navigate business deals, resolve conflicts, and secure partnerships. The fire element symbolizes the intensity and passion required for successful negotiations, and the event offers a practical, hands-on experience for entrepreneurs to master these critical skills."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Symmetry",
    title: "No Code Game",
    src: Symmetry1,
    content: (
      <DummyContent
        highlight={"No Code Game: "}
        description={
          "Step into the world of game development without writing a single line of code! In this hands-on event, Symmetry will guide you through designing captivating game assets using Figma, while Encode will show you how to integrate these assets into a functional game using Unity. Ideal for both creative enthusiasts and aspiring developers, this workshop offers a perfect blend of design and technology."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Symmetry",
    title: "Stop Motion 3.0",
    src: Symmetry2,
    content: (
      <DummyContent
        highlight={"Step into the Stop Motion Workshop, "}
        description={
          "where imagination takes the wheel! Using prompts like racing cars, clay figures, and cardboard cities, you'll transform everyday objects into dynamic stories that leap off the screen. With just a few frames, watch your ideas come alive , inventive videos that blend creativity with technique. It's a world where anything can happen—your imagination is the only limit!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Symmetry",
    title: "Blender Basics",
    src: Symmetry3,
    content: (
      <DummyContent
        highlight={"Join us for an exciting Blender Workshop, "}
        description={
          "where you'll learn the basics of Blender from the ground up! Whether you're a beginner or looking to strengthen your skills, this workshop is perfect for diving into 3D modeling, animation, and more. Guiding you through this creative journey is none other than Kulverse, a highly reputed and talented video editor with years of experience. Kulverse's expertise and hands-on approach will help you master Blender's tools, empowering you to create stunning visuals and animations. Don't miss out on this opportunity to learn from one of the best in the field!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Symmetry",
    title: "Virtual Verse",
    src: Symmetry4,
    content: (
      <DummyContent
        highlight={"VirtualVerse: "}
        description={
          "An Immersive Experience invites you to step into a world where art meets technology. Imagine traditional art coming to life in a mesmerizing 270-degree adventure. It surrounds you with vibrant colors and captivating stories. Plus, you can click photos with this magical art as your backdrop. Explore themes like multiverse, sci-fi, and abstract. Whether you love art or tech, VirtualVerse is a unique journey into a world where imagination knows no bounds, and you can capture amazing photos with the projected backdrop."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "SOM",
    title: "Mind Maze",
    src: som1,
    content: (
      <DummyContent
        highlight={"Step into the Mind Maze, "}
        description={
          "where every turn is a test of your wits! Teams of 1-3 players face a twisting maze packed with brain-busting math puzzles. Choose your challenge—easy, medium, or hard—and move 5, 10, or 15 steps closer to victory. But watch out: strategy matters! Take the right path, and you might land on an Elemental Card for a sweet 3-step boost. It's not just about speed—it's about smarts. Balance accuracy with bold moves, and use your brainpower to navigate the maze. The team that cracks the puzzles and masters the maze wins! Think you’ve got the skills to escape?."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "SOM",
    title: "Elemental Math Masters",
    src: som2,
    content: (
      <DummyContent
        highlight={"Calling all math magicians! "}
        description={
          "Ready to unleash your genius in the Elemental Math Masters? Join us for a mind-bending, 3-round adventure where math meets magic, and only the sharpest minds will prevail! Round 1: Elemental Quiz Gauntlet Race through math challenges inspired by Earth (geometry), Water (calculus), Fire (algebra), Air (probability), and Aether (advanced topics). Be quick and accurate, or get left behind! Round 2: Elemental Auction Extravaganza Bid on math challenges that play to your strengths! Will you take risky, high-stakes problems or play it safe? Every point counts as you battle for the top spot. Round 3: Elemental Strategy ShowdownTackle a complex, multi-element challenge. Only the most cunning teams will unlock the final puzzle and win it all! Dare to Challenge Yourself? Join us for this epic quest of strategy, teamwork, and math mastery!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "SOM",
    title: "AlgoThon",
    src: som3,
    content: (
      <DummyContent
        highlight={"🚀 Ready for SoM's AlgoThon? "}
        description={
          "🌟 Think you've got the brainpower to solve real-world challenges with algorithms? AlgoThon is no ordinary hackathon—it's a race where teams of 1-4 will tackle complex problems using logic and optimization. Can you think outside the code? Why Join?Think Differently: Focus on algorithms, not just coding. Challenge Yourself: Test your skills against other innovators and see who comes out on top. What's in Store: Kickoff: Registration & problem distribution. Theme Talks: Insights into each challenge. Mentor Meetup: Get expert guidance.Pitch Time: Present your solutions and compete for epic prizes.🏆 Amazing Prizes: Win top rewards in each theme! Ready to take on the challenge? Sign up now and let's make magic happen!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Encode",
    title: "Guardians of the Elements",
    src: encode1,
    content: (
      <DummyContent
        highlight={"The event "}
        description={
          " will feature unique challenges inspired by the five elements. Earth tasks symbolize stability through navigation, Fire emphasizes quick thinking and action, Water focuses on adaptability and fluid problem-solving, Air promotes freedom and intellect through dynamic movement, and Ether presents mystical puzzles that embody connection and imagination."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Encode",
    title: "Capture the Flag: Elemental Edition",
    src: encode2,
    content: (
      <DummyContent
        highlight={"Join a dynamic cybersecurity competition "}
        description={
          "themed around the five elements! Earth focuses on foundational tasks, Fire tests speed, Water demands adaptability, Air emphasizes strategy, and Ether sparks creativity. Compete across these elements to sharpen your skills and tackle diverse challenges to Capture The Winning Flag!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Encode",
    title: "Code Tatva",
    src: encode3,
    content: (
      <DummyContent
        highlight={"Join us for a coding challenge "}
        description={
          "that blends the five elements. Unleash your coding potential through coding challenges. Incorporate the Earth for algorithms, Fire for speed, Water for adaptability, Air for problem-solving, and Ether for creativity."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "TIR",
    title: "Dome Designing",
    src: tir1,
    content: (
      <DummyContent
        highlight={"Convocation Dome Design: "}
        description={
          "Creating a Legacy for the Graduates Shape the future with a lasting legacy. This event offers participants the chance to design the convocation dome for PDEU's graduation ceremony. Combining architectural brilliance with structural soundness, participants will craft a dome that reflects both the spirit of the university and its graduates. Before the competition begins, participants will receive guidance on dome design principles, material selection, and aesthetic integration. This challenge is not just about construction—it's about creating an enduring symbol of achievement. Event Flow: 3:00 PM - Kick-off & Briefing: Overview of dome design principles and structural integrity. 3:30 PM - Design Challenge: Participants work on their dome designs, blending creativity with technical accuracy. 5:30 PM - Winner Announcement (Top 3 Designs): Judges evaluate the designs based on aesthetics, innovation, and structural integrity. 6:00 PM - Closing: A thank-you note, celebrating the creativity and hard work of all participants."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "TIR",
    title: "Global Architecture",
    src: tir2,
    content: (
      <DummyContent
        highlight={"Global Architecture: "}
        description={
          "A Journey Across Cultures Recreate the world, one landmark at a time.Global Architecture offers an immersive exploration of architectural wonders from around the world. Teams will spin a globe to randomly select a destination, then build models of that region's most iconic structures. This event is about more than just construction—participants will dive deep into the history, philosophy, and design principles of each region's architecture, blending creativity with cultural understanding. It's a journey of discovery and design, emphasizing global architectural diversity and sustainable practices. Event Flow: 3:00 PM - Kick-off: Introduction and event overview. 3:15 PM - Event Briefing: Insight into the architectural styles of selected regions. 3:30 PM - Start of Construction: Teams build models, showcasing the cultural and structural intricacies of global landmarks. 5:30 PM - Winner Announcement (Top 3 Teams): Judges assess the models based on creativity, accuracy, and cultural representation. 6:00 PM - Closing: Recognition of winners and appreciation for all participants."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "TIR",
    title: "Terra Turris",
    src: tir3,
    content: (
      <DummyContent
        highlight={"Terra Turris: "}
        description={
          "The Ultimate Architectural Challenge Where creativity meets innovation. Terra Turris invites participants to embark on a thrilling architectural adventure, challenging them to redesign and reconstruct Stark Tower—one of the Marvel Universe's most iconic structures. This competition emphasizes sustainable design, blending futuristic concepts with eco-friendly practices. Through hands-on engagement, participants will explore how to merge aesthetics and practicality while addressing real-world environmental concerns. It's more than just a challenge—it's an opportunity to shape the architecture of tomorrow. Event Flow: 3:00 PM - Kick-off: Welcome and event overview. 3:15 PM - Briefing & Instructions: Guidelines on sustainable and innovative designs. 3:30 PM - Construction Begins (Teams of 5): Participants work collaboratively on reimagining Stark Tower, balancing creativity and practicality. 5:30 PM - Winner Announcement (Top 3 Teams): Recognition of standout designs. 6:00 PM - Closing: A thank-you note to all participants, leaving them inspired by sustainable architecture."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cube-I-Cult",
    title: "Puzzle-Hunt",
    src: cube1,
    content: (
      <DummyContent
        highlight={"Join us for the Puzzle Hunt, "}
        description={
          "Where teams of 1-3 members will embark on an adventure around campus, solving puzzles at each location. Each clue will lead you to a new puzzle, and once you crack it, you'll discover the next spot to visit. The puzzles are inspired by the theme: elements of Water, Fire, Earth, Air, and Ether. The hunt will culminate in an exciting race to the final location at one of our Centre of Excellence. Unleash your skills and race against the clock for the win!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Cube-I-Cult",
    title: "Mosaic Building Workshop",
    src: cube2,
    content: (
      <DummyContent
        highlight={"In this event, "}
        description={
          "participants will work alongside club members to create a large-scale mosaic art piece using multiple 3x3 Rubik's cubes. The final image, inspired by the theme of Ether, will be made up of hundreds of individual cubes arranged and solved by the participants. Each Rubik's cube will serve as a pixel, and when combined, they will come together to form a vibrant mosaic. Join us in this collaborative artistic endeavor and see how individual contributions can create something beautiful!"
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "VGA",
    title: "Cineshaam",
    src: vga1,
    content: (
      <DummyContent
        highlight={"Cineshaam "}
        description={
          "arranges a line up of the greatest short films from various parts of India and the world. After a successful screening of oscar-nominated short films during Cineshaam, last year, we intend to put up academy award nominated or, otherwise critically acclaimed, movies for viewing and appreciation this year as well. Cinehsaam has received a huge response and appreciation from the audience in the past, which comprises students from college in and around Ahmedabad and Gandhinagar."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "VGA",
    title: "Color Grading Workshop",
    src: vga2,
    content: (
      <DummyContent
        highlight={"We will "}
        description={
          "be hosting an immersive Color grading workshop, designed to enhance creative storytelling through post-production techniques. Participants will gain hands-on experience with the industry standard software, mastering colour manipulation to evoke specific moods and enhance visual narratives."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Sorriso",
    title: "Shutter Trail",
    src: Sorriso1,
    content: (
      <DummyContent
        highlight={"Students will "}
        description={
          "have the chance to explore the campus in a fun and creative way. We are going to make them walk around different parts of the campus and use various photography techniques. These include things like Perspective and Angles, where they'll learn how to take photos from different viewpoints to make them look more interesting, and Macro Photography, where they can capture tiny details up close. They'll also try out Motion Blur, which shows movement in photos, and Double Exposure, where two images are combined into one. In addition, students will get to experiment with Street Photography, capturing everyday life on campus, and Forced Perspective, where they can create optical illusions by playing with distances and angles. All of these activities tie into the theme of Earth, as students will be capturing the environment around them in creative ways. By the end of this activity, they'll not only have some great photos but also a better understanding of how to use these techniques in their own photography."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Sorriso",
    title: "Product Photography (Workshop + Shoot)",
    src: Sorriso2,
    content: (
      <DummyContent
        highlight={"This workshop "}
        description={
          "will dive into advanced photography techniques. We'll start things off with a guest lecture, where an expert photographer will teach students about some cool techniques like using creative lighting to make photos look amazing. The lecture will also explain how these techniques are used by professionals, especially when they need to make a product look great in photos, like for ads or online stores. After learning all this, students will get to try it all out themselves. We'll move into a hands-on session where everyone can practice what they've learned. This means they'll actually set up the lighting, adjust their cameras, and take photos, putting the new techniques into action. By the end of the workshop, students will have both the knowledge and the practical experience to improve their photography skills."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Brahmand",
    title: "GesoDesic Hemisphere",
    src: Brahmand1,
    content: (
      <DummyContent
        highlight={"We are offering "}
        description={
          "an educational experience focused on the basics of positional astronomy and stargazing. Using a 360-degree Geodesic Hemisphere, participants will learn key celestial concepts and spatial coordinates. A mini-exhibition of past astronomical photographs will also be on display. "
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Brahmand",
    title: "AetherNet",
    src: Brahmand2,
    content: (
      <DummyContent
        highlight={"This event highlights the communication technologies "}
        description={
          "like satellite tracking and networks that connect us to space. Explore the fundamentals of satellite communication through hands-on assembly and configuration of ground station equipment. Learn about antennas, receivers, signal processing, and data management, and gain practical experience in operating a functional ground station on campus."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Brahmand",
    title: "HelioTrack: Navigating the Sun's Pulse",
    src: Brahmand3,
    content: (
      <DummyContent
        highlight={
          "Embark on a profound exploration of solar physics with HelioTrack, "
        }
        description={
          "a hands-on workshop dedicated to designing and building Sun sensors. Participants will delve into advanced solar technology, track the Sun through coding, and gain insights into the vital role of our closest star."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Brahmand",
    title: "Night Sky Gazing",
    src: Brahmand4,
    content: (
      <DummyContent
        highlight={"Join us to attend our Night Sky Gazing event "}
        description={
          "on the campus for an enlightening evening of celestial exploration, guided by astronomy experts. Participants will have the opportunity to observe constellations and planets through telescopes. Enjoy live music and fun activities while soaking in the beauty of the night sky."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Apogee3",
    title: "Earth to Ether",
    src: Apogee1,
    content: (
      <DummyContent
        highlight={"It will be a 3 day event "}
        description={
          "where we will teach the participating team will be taught about basic principals behind aerospace, how a solid propulsion motor is made. One second day they will be taught about electronics and on day they will be taught assembly and then finally rocket will be launched by the teams."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Nucleus",
    title: "Physics Expo",
    src: Nucleus1,
    content: (
      <DummyContent
        highlight={"A Physics Expo! "}
        description={
          "This dynamic event is designed to ignite curiosity, inspire future scientists, and showcase the marvels of the physical universe through interactive and awe-inspiring experiments. From roller coasters to pendulums, our dynamic exhibits will demonstrate the laws of physics in action and show how they apply to everyday objects and systems."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Nucleus",
    title: "Cyanotype Printing Workshop",
    src: Nucleus2,
    content: (
      <DummyContent
        highlight={"Explore this historic photographic technique "}
        description={
          "known for its striking blue hues and intricate patterns. Guided by expert instructors, you'll learn to create your own unique prints using sunlight and a simple chemical process. Whether you're a seasoned artist or a curious beginner, this hands-on experience will unlock your creative potential and provide you with beautiful, one-of-a-kind artwork to take home. Join us for a day of artistic discovery and craftsmanship in a supportive, inspiring environment."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Nucleus",
    title: "RGB Workshop",
    src: Nucleus3,
    content: (
      <DummyContent
        highlight={"In this event, "}
        description={
          "we are showing how the Arduino reads different compositions of red, blue, and green color in participant's color palettes and by writing the code for the Arduino Nano we can program it to display the composition of red or any color out of 3 in 3 digits 7 segments serial output display."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Empower U",
    title: "InspireX",
    src: Empower1,
    content: (
      <DummyContent
        highlight={"The Round Table Conference invites participants "}
        description={
          "to present real-world societal or environmental problems and engage in collaborative discussions. Rather than focusing on solutions, the event emphasizes problem identification, promoting dialogue and creative thinking. Participants will receive feedback from judges, but the primary aim is to raise awareness and encourage critical discussion on pressing global challenges."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Alchemy",
    title: "Parla Tech 6.0",
    src: Alchemy1,
    content: (
      <DummyContent
        highlight={"Talking about the description, "}
        description={
          "The primary thing is we are collaborating with the civiqueniti, that is the political science club of PDEU, that falls under S&C. The primary reason for doing so is that the term parlatech itself is inspired by the term parlament of technology, and civiqueniti seemed like one of the very best options for doing so because they are very much into the governance and administrative field."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
  {
    category: "Alchemy",
    title: "Fragrance Fusion",
    src: Alchemy2,
    content: (
      <DummyContent
        highlight={
          "Dive into the art and science of candle making with Fragrance Fusion! "
        }
        description={
          "In this hands-on event, participants will create personalized scented candles, exploring the chemistry behind the process."
        }
        img1={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_5.png"
        }
        img2={
          "https://snt-images-bucket.s3.ap-south-1.amazonaws.com/Network_4.png"
        }
      />
    ),
  },
];
