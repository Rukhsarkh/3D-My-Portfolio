import React from "react";
import { TextEffect } from "../components/TextEffect";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion } from "framer-motion";

const About = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768; //mobile breakpoint

  return (
    <section className="mx-5 flex items-center justify-center p-4 bg-gradient-to-br from-green-700 to-indigo-900 rounded-xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-black bg-opacity-30 backdrop-blur-md">
          <div className="absolute inset-0 bg-[url('assets/AboutBack.png')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 p-8 md:p-12 space-y-8 md:space-y-12">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-white text-center md:text-right">
                <TextEffect per="word" preset="fade">
                  Connecting STRUCTURES AND 𝐹UNCTIONS
                </TextEffect>
              </h2>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </motion.div>

            {isMobile && <hr className="w-full border-white opacity-30" />}

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-white text-center md:text-left">
                <TextEffect per="word" preset="fade">
                  BLENDING St𝓎le WITH SUBSTANCE
                </TextEffect>
              </h2>
              <div className="w-full h-0.5 bg-gradient-to-r from-white via-white to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;