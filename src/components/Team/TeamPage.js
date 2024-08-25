import React, { useEffect } from "react";
import "../FrontText/FrontText.css";
import TeamCard from "./TeamCard-2.js";
// import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Aos from "aos";
import "aos/dist/aos.css";

function TeamPage() {
    Aos.init();
  return (
    <div className="w-full min-h-[100vh] pb-20 py-10 bg-black">
      <div className="MainText justify-content-center text-center p-5 m-10">
        <span className="Maintitle sm:text-[60px] text-[50px] text-white ml-5">
          <span className="font-robotic-1">T</span>
          <span className="font-modern-1">h</span>
          <span className="font-robotic-2">e</span>
          <span className="font-modern-2">  </span>
          <span className="font-robotic-1">M</span>
          <span className="font-modern-1">i</span>
          <span className="font-robotic-2">n</span>
          <span className="font-modern-2">d</span>
          <span className="font-robotic-1">s</span>
          <span className="font-robotic-1">  </span>
          <span className="font-modern-1">B</span>
          <span className="font-robotic-2">e</span>
          <span className="font-modern-2">h</span>
          <span className="font-robotic-1">i</span>
          <span className="font-modern-1">n</span>
          <span className="font-robotic-2">d</span>
          <span className="font-modern-2">  </span>
          <span className="font-robotic-1">T</span>
          <span className="font-modern-1">h</span>
          <span className="font-robotic-2">e</span>
          <span className="font-modern-2">  </span>
          <span className="font-robotic-1">M</span>
          <span className="font-robotic-2">a</span>
          <span className="font-modern-2">g</span>
          <span className="font-robotic-1">i</span>
          <span className="font-modern-1">c</span>
        </span>
      </div>

      <div className="team mx-[5em] flex flex-row flex-wrap justify-center" >
        <div className="" data-aos="fade-up" data-aos-delay="300">
            <TeamCard
                name="Khushi Shah"
                position="General Secretary"
                img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>

        <div className="" data-aos="fade-up" data-aos-delay="400">
        <TeamCard
          name="Krish Modi"
          position="Treasurer"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="500">
        <TeamCard
          name="Shivam Patel"
          position="Tech Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="300">
        <TeamCard
          name="Ansh Soni"
          position="GD Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="400">
        <TeamCard
          name="Khushi Uttamani"
          position="Social Media Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="500">
        <TeamCard
          name="Khushi Uttamani"
          position="Logistics Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="300">
        <TeamCard
          name="Khushi Uttamani"
          position="Publicity Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="400">
        <TeamCard
          name="Khushi Uttamani"
          position="Event Management Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="500">
        <TeamCard
          name="Khushi Uttamani"
          position="Sponsership Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="300">
        <TeamCard
          name="Khushi Uttamani"
          position="Hospitality Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="400">
        <TeamCard
          name="Khushi Uttamani"
          position="Fine Arts Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        
        </div>
        <div className="" data-aos="fade-up" data-aos-delay="400">
        <TeamCard
          name="Khushi Uttamani"
          position="Fine Arts Head"
          img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        
        </div>
        
        
        
        
        
        
        
        
      </div>

      {/* <div className="btn flex justify-center items-center h-[8vh]">
        <HoverBorderGradient
          containerClassName="rounded-full"
          className="bg-black text-white flex items-center space-x-2"
          duration={1}
          clockwise={true}
        >
          <span>View All Members</span>
        </HoverBorderGradient>
      </div> */}
    </div>
  );
}

export default TeamPage;
