"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return React.createElement(
    "div",
    {
      className:
        "h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20",
      ref: containerRef,
    },
    React.createElement(
      "div",
      {
        className: "py-10 md:py-40 w-full relative",
        style: {
          perspective: "1000px",
        },
      },
      React.createElement(Header, { translate, titleComponent }),
      React.createElement(Card, { rotate, translate, scale }, children)
    )
  );
};

export const Header = ({ translate, titleComponent }) => {
  return React.createElement(
    motion.div,
    {
      style: {
        translateY: translate,
      },
      className: "div max-w-5xl mx-auto text-center",
    },
    titleComponent
  );
};

export const Card = ({ rotate, scale, children }) => {
  return React.createElement(
    motion.div,
    {
      style: {
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      },
      className:
        "max-w-[68rem] -mt-12 mx-auto h-[15rem] md:h-[40rem] sm:h-[25rem] w-full border-4 border-[#6C6C6C] md:p-3 bg-[#222222] rounded-[30px] shadow-2xl overflow-hidden",
    },
    React.createElement(
      "div",
      {
        className: "h-[100%] w-full overflow-hidden rounded-2xl md:rounded-2xl",
      },
      children
    )
  );
};
