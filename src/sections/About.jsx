import React from "react";
import { TextEffect } from "../components/TextEffect";
import { useWindowSize } from "../hooks/useWindowSize";
const About = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768; //mobile breakpoint

  return (
    <section className="c-space m-40">
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-5">
        <p className="lg:text-5xl lg:text-right md:text-3xl font-thin text-justify text-white">
          <TextEffect per="word" preset="fade">
            Connecting STRUCTURES AND 𝐹UNCTIONS
          </TextEffect>
        </p>
        {isMobile && <hr className="w-[100%] mx-auto border-white"></hr>}
        <p className="lg:text-5xl lg:text-left md:text-3xl font-thin text-justify text-white">
          <TextEffect per="word" preset="fade">
            BLENDING St𝓎le WITH SUBSTANCE
          </TextEffect>
        </p>
      </div>
    </section>
  );
};

export default About;
