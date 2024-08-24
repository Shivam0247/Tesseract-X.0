import React, { useState, useEffect, useRef } from "react";
import "./Intro.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTerminal } from "react-terminal";
import ReactTypingEffect from "react-typing-effect";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const [asciiLines, setAsciiLines] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false); // New state to track if typing has triggered

  const asciiArt = `
    // ASCII art here
  `;

  useEffect(() => {
    const lines = asciiArt.split("\n");
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < lines.length) {
        setAsciiLines((prevLines) => [...prevLines, lines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const typeMessage = (message, speed) => {
      let i = 0;
      const intervalId = setInterval(() => {
        setWelcomeMessage((prev) => prev + message[i]);
        i++;
        if (i >= message.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setShowWelcome(false);
          }, 3000);
        }
      }, speed);
    };

    const trigger = ScrollTrigger.create({
      trigger: ".typing-trigger",
      start: "top center",
      onEnter: () => {
        if (!hasTriggered) {
          setShowWelcome(true);
          typeMessage("Welcome to the SnT", 100);
          setHasTriggered(true); // Set flag to true after triggering
        }
      },
      onLeaveBack: () => {
        setShowWelcome(false);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [hasTriggered]); // Add hasTriggered to dependencies

  const handleCommand = (command) => {
    console.log("Command received:", command);

    const commandParts = command.trim().split(" ");
    const cmd = commandParts[0];
    const args = commandParts.slice(1);

    if (commands[cmd]) {
      return commands[cmd](...args);
    } else {
      return "Command not found";
    }
  };

  const commands = {
    whoami: () => "SnT(science and technical committee).",
    info: () => "SnT is xyz.........",
    TESSARACT: () => "TESSARACT is xyz.....",
    cd: (directory) => `Changed path to ${directory}.`,
    echo: (text) => text,
    help: () => `Available commands: whoami, cd [directory], echo [text], help`,
    SnT: () => asciiLines.map((line, index) => <pre key={index}>{line}</pre>),
  };

  const titleRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
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
          <div className="typing-trigger w-[100%] h-[100%]">
            {" "}
            {/* This is the trigger element */}
            <ReactTerminal
              className="CMD gradient-border"
              commands={commands}
              prompt="SnT@pdeu ~ %"
              errorMessage={
                <span className="text-red-500">command not found</span>
              }
              welcomeMessage={
                showWelcome ? (
                  <div className="welcome-message flex justify-center items-center h-[97%]">
                    <p
                      className="front-text-paragraph"
                      style={{
                        textAlign: "center",
                        color: "#FFFEFC",
                      }}
                    >
                      <ReactTypingEffect
                        text="Welcome To The SnT"
                        cursor={" "}
                        typingDelay={10}
                        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                        displayTextRenderer={(text, i) => (
                          <p className="typing-text">
                            {text.split("").map((char, i) => (
                              <span key={i}>{char}</span>
                            ))}
                          </p>
                        )}
                      />
                    </p>
                  </div>
                ) : (
                  <>
                    {
                      "Welcome to the SnT Terminal. Type 'help' for more details."
                    }
                    <br />
                  </>
                )
              }
              onChange={handleCommand}
              themes={{
                "my-custom-theme": {
                  themeBGColor: "",
                  themeToolbarColor: "",
                  themeColor: "#FFFEFC",
                  themePromptColor: "#a917a8",
                  errorTextColor: "#FF0000",
                },
              }}
              theme="my-custom-theme"
            />
          </div>
        </div>
      </p>
    </div>
  );
}

export default Intro;
