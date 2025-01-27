import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../constants/slides.jsx";
import Button from "../components/Button.jsx";

const EveSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleClick = () => {
    if (!isContentVisible) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsContentVisible(true);
    }
  };

  useEffect(() => {
    let timer;
    if (isContentVisible) {
      timer = setTimeout(() => {
        setIsContentVisible(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isContentVisible]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      viewport={{ amount: 0.3 }}
      className="flex-1 flex flex-col justify-center items-center p-4 relative"
    >
      <div className="w-full h-full flex flex-col justify-center items-center mt-20">
        <div className="max-sm:h-20 sm:h-32 w-full relative flex justify-center items-center max-sm:mb-20 lg:mb-10">
          <AnimatePresence mode="wait">
            {isContentVisible && (
              <motion.div
                key={currentIndex}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-justify font-bold text-2xl sm:text-3xl text-white tracking-wide"
              >
                <p className="text-white text-3xl text-center content content-center h-72 md:w-96 p-4 border-t-2 border-l-2 rounded-full">
                  {slides[currentIndex].content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <img
          src="assets/eveRobo.png"
          alt="batman"
          className="h-40 w-40 sm:h-60 sm:w-60 animate-slow-bounce mt-8"
        />

        <div className="absolute border-2 h-10 w-80 blur-2xl bg-white max-sm:bottom-0 sm:bottom-12"></div>
        <div className="mt-8">
          <a onClick={handleClick} className="relative sm:-bottom-20">
            <Button
              onClick={handleClick}
              name={
                isContentVisible
                  ? "Hire me, I'll handle your (not so easy) CSS..."
                  : "Read Eve's Current Mind, She Repeats Things..."
              }
              isBeam
              containerClass="text-white text-lg sm:text-xl font-bold tracking-wide"
            />{" "}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EveSection;
