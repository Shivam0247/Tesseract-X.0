import React from "react";
import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import "./Team.css";
import Khushi from "../../ProfilePhoto/KhushiShah.jpeg";
import Krish from "../../ProfilePhoto/KrishModi.png";

function Team() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Team");
  };
  return (
    <div className="w-full min-h-[50vh] pb-20 py-10 bg-black">
      <h2 className="max-w-7xl pl-4 mx-[2em] mb-[1em] text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        The Minds Behind the Magic.
      </h2>

      <div className="TeamCard team mx-[2em] flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row flex-wrap justify-center">
        <TeamCard
          name="Khushi Shah"
          position="General Secretary"
          img={Khushi}
          linkedIn="https://www.linkedin.com/in/khushi-shah-2178a4278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          insta="https://www.instagram.com/khushiee.iee/profilecard/?igsh=NXl3dWFzNnBranhx"
          twitter=""
        />
        <TeamCard
          name="Krish Modi"
          position="Treasurer"
          img={Krish}
          linkedIn="https://www.linkedin.com/in/krishmodi33/"
          insta="https://www.instagram.com/krishmodi_0202/"
          twitter=""
        />
      </div>

      <div className="btn flex justify-center items-center h-[8vh]">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black text-white flex items-center space-x-2"
          duration={1}
          clockwise={true}
          onClick={handleButtonClick}
        >
          <span>View All Members</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Team;
