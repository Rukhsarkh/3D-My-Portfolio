import React from "react";
import { techStackes } from "../constants/index.jsx";
import { motion } from "framer-motion";

const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {techStackes.map((item) => (
        <div key={item.id} className="flex justify-center items-center">
          <div className="h-16 w-16 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg hover:shadow-xl hover:scale-125 transition-transform duration-300 ease-in-out hover:cursor-pointer">
            {React.cloneElement(item.icon, {
              className: "w-full h-full object-contain",
              alt: item.title,
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const TechStack = () => {
  return (
    <motion.div
      // initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ amount: 0.3 }}
      className="flex-1 flex flex-col items-center p-4"
    >
      <div className="flex flex-col items-center gap-2 mb-8 mt-20">
        <p className="text-2xl sm:text-3xl font-bold text-blue-700 text-center">
          Hover Over the Icons
        </p>
        <svg
          viewBox="0 0 200 80"
          preserveAspectRatio="xMidYMid meet"
          width="35%"
          height="70%"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto-start-reverse"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="white" />
            </marker>
          </defs>
          <path
            d="M1 1 Q130 5, 150 50"
            fill="none"
            stroke="white"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      <div className="w-full border-b-2 shadow-2xl shadow-blue-300 sm:border-gray-500 sm:rounded-lg p-4 sm:border-b-0">
        <div className="text-center mb-8">
          <div className="text-white border-2 border-white rounded-xl w-fit mx-auto p-4">
            <span className="text-xl sm:text-3xl font-bold uppercase">
              Tech
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-blue-800 ml-2">
              Stack
            </span>
          </div>
        </div>
        <TechStackGrid />
      </div>
    </motion.div>
  );
};

export default TechStack;
