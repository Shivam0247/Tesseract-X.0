import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactTerminal } from "react-terminal";
import ReactTypingEffect from "react-typing-effect";
import { ContainerScroll } from "../ui/container-scroll-animation";
import image from "../../Images/fiveelements.jpg";
import video1 from "../../Video/ThemeLaunch.mp4";
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const [asciiLines, setAsciiLines] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const navigate = useNavigate();
  const terminalRef = useRef(null);
  const scrollPosition = useRef(0);
  const targetScrollY = useRef(0);

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
          setHasTriggered(true);
        }
      },
      onLeaveBack: () => {
        setShowWelcome(false);
      },
      onUpdate: () => {
        const inputFocused =
          document.activeElement.tagName === "INPUT" ||
          document.activeElement.tagName === "TEXTAREA";
        if (inputFocused) {
          window.scrollTo(0, targetScrollY.current);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [hasTriggered]);

  useEffect(() => {
    targetScrollY.current = window.innerHeight * 1;

    const handleFocus = () => {
      scrollPosition.current = window.scrollY;
    };

    const terminalInput = document.querySelector(".react-terminal");
    terminalInput?.addEventListener("focus", handleFocus);

    return () => {
      terminalInput?.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handleCommand = (command) => {
    console.log("Command received:", command);

    const commandParts = command.trim().split(" ");
    const cmd = commandParts[0].toLowerCase();
    const args = commandParts.slice(1);

    if (cmd === "about") {
      navigate("/about");
      return "";
    }

    if (commands[cmd]) {
      console.log("Executing command:", cmd);
      return commands[cmd](...args);
    } else {
      console.log("Command not found:", cmd);
      return "Command not found";
    }
  };

  const commands = {
    whoami: () => "SnT (Science and Technical Committee).",
    home: () => {
      window.location.assign("/");
      return "Redirecting to Home page";
    },
    about: () => {
      window.location.assign("/AboutUs");
      return "Redirecting to About page";
    },
    gallery: () => {
      window.location.assign("/Gallery");
      return "Redirecting to Gallery page";
    },
    team: () => {
      window.location.assign("/Team");
      return "Redirecting to Team page";
    },
    info: () => "SnT is xyz.........",
    tesseract: () => "TESSERACT is xyz.....",
    cd: (directory) => `Changed path to ${directory}.`,
    echo: (text) => text,
    help: () => (
      <div>
        List of all commands:
        <br />
        <br />
        <strong>help</strong> - Display all the commands
        <br />
        <strong>clear</strong> - Clear Screen
        <br />
        <br />
        <strong>-----Information-----</strong>
        <br /> <br />
        <strong>whoami</strong> - Info About the user
        <br />
        <strong>info</strong> - Info About SnT
        <br />
        <strong>tesseract</strong> - Info About Tesseract
        <br />
        <br />
        <strong>-----Navigation-----</strong>
        <br /> <br />
        <strong>home</strong> - Go to the Home page
        <br />
        <strong>about</strong> - Go to the About page
        <br />
        <strong>event</strong> - Go to the Event page
        <br />
        <strong>gallery</strong> - Go to the Gallery page
        <br />
        <strong>team</strong> - Go to the Team page
        <br />
        <strong>contact</strong> - Go to the Contact page
        <br />
      </div>
    ),
    snt: () => asciiLines.map((line, index) => <pre key={index}>{line}</pre>),
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

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayPause = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          try {
            videoElement.play().catch((error) => {
              console.error("Error playing video:", error);
            });
          } catch (error) {
            console.error("Error occurred in play attempt:", error);
          }
        } else {
          try {
            videoElement.pause().catch((error) => {
              console.error("Error pausing video:", error);
            });
          } catch (error) {
            console.error("Error occurred in pause attempt:", error);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="h-[100vh] w-full bg-black bg-grid-white/[0.150] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 h-[60%] w-full flex justify-center items-center">
        <div className="text flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-xl font-semibold text-white sm:text-4xl">
                  The future is elemental <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    ELEMENTRIX
                  </span>
                </h1>
              </>
            }
          >
            <video
              ref={videoRef}
              poster={image}
              loop
              autoPlay
              controls
              preload="auto"
              className="w-[100%] h-[100%]"
            >
              <source src={video1} type="video/mp4" />
            </video>
          </ContainerScroll>
        </div>
      </p>
    </div>
  );
}

export default Intro;
