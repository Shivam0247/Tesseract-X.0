// background-boxes.js
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BossCore = ({ className, ...rest }) => {
  const rows = new Array(10).fill(1); // Fewer rows for a more prominent effect
  const cols = new Array(10).fill(1); // Fewer columns for a more prominent effect
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(0%, 0%)`, // No skew or rotation
      }}
      className={cn(
        "absolute top-0 left-0 p-4 flex flex-wrap w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row-${i}`}
          className="w-24 h-24 border-l border-slate-700 flex flex-wrap"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0.5 },
              }}
              animate={{
                transition: { duration: 1 },
              }}
              key={`col-${j}`}
              className="w-24 h-24 border-r border-t border-slate-700 flex items-center justify-center"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-8 w-8 text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boss = React.memo(BossCore);
