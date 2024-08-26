import React from "react";
import TeamCard from "./TeamCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { HoverBorderGradient } from "../ui/hover-border-gradient";

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

      <div className="team mx-[2em] flex-grow-0 flex-shrink-0 basis-1/3 flex flex-row flex-wrap justify-center">
        <TeamCard
          name="xyz"
          position="President"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamCard
          name="xyz"
          position="Vice President"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamCard
          name="Khushi Shah"
          position="General Secretary"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TeamCard
          name="Krish Modi"
          position="Treasurer"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
