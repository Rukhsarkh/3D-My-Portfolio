import React from "react";
import { TextEffect } from "./TextEffect.jsx";
import { techStackes } from "../constants/index.jsx";

const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {techStackes.map((item) => (
        <div key={item.id}>
          <div className="h-full w-full rounded-full overflow-hidden border-2 border-gray-500 shadow-lg hover:shadow-xl hover:scale-150 transition-transform duration-300 ease-in-out hover:cursor-pointer">
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

const SpeechBubble = ({ children }) => {
  return (
    <div className="relative max-w-xs mx-auto">
      <div className="bg-white border-2 border-gray-300 rounded-full p-4 relative">
        <div className="transform -rotate-1 origin-bottom-left">
          {children}
        </div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-gray-300"></div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-2 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container bg-[url('assets/spotlight3.png')] bg-cover">
            <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">
              Tech Stack
            </p>
            <TechStackGrid />
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className=" grid-container bg-[url('assets/batman7.jpg')] bg-cover">
            <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag p-3 border-2 border-white rounded-md grid-subtext'">
              Howdy ! This is Rukh
            </p>
            {/* <h1 className="text-4xl font-custom text-gray_gradient text-center">
              imma introvert Yapper!!!
            </h1> */}

            <SpeechBubble>
              <p className="text-gray-800 font-custom text-3xl">Imma introvert Yapper!!!</p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
