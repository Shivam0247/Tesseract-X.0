import React, { useEffect, useRef } from "react";
import "./Intro.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTerminal } from "react-terminal";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const commands = {
    whoami: () => "SnT(science and technical committee).",
    info: () => "SnT is xyz.........",
    TESSARACT: () => "TESSARACT is xyz.....",
    cd: (directory) => `Changed path to ${directory}.`,
    echo: (text) => text,
    help: () => `Available commands: whoami, cd [directory], echo [text], help`,
  };

  const titleRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    const titleAnimation = gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    const infoAnimation = gsap.fromTo(
      infoRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Cleanup function to remove ScrollTrigger instances
    return () => {
      if (titleAnimation.scrollTrigger) {
        titleAnimation.scrollTrigger.kill();
      }
      if (infoAnimation.scrollTrigger) {
        infoAnimation.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div className="h-[100vh] w-full bg-black bg-grid-white/[0.150] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 h-[60%] w-full flex justify-center items-center">
        <div className="glass-effect h-[100%] w-[70%] flex justify-center items-center">
          <ReactTerminal
            className="CMD gradient-border" // Added gradient-border class here
            commands={commands}
            prompt="SnT >>"
            welcomeMessage={
              <>
                {"Welcome to the SnT Terminal. Type 'help' for more details."}
                <br />
              </>
            }
            themes={{
              "my-custom-theme": {
                themeBGColor: "",
                themeToolbarColor: "",
                themeColor: "#FFFEFC",
                themePromptColor: "#a917a8",
              },
            }}
            theme="my-custom-theme"
          />
        </div>
      </p>
    </div>
  );
}

export default Intro;
