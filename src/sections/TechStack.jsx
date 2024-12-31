import React, { useCallback, useEffect, useState } from "react";
import { techStackes } from "../constants/index.jsx";
import { slides } from "../constants/slides.jsx";
import {motion, AnimatePresence, easeInOut} from "framer-motion";
import Button from "../components/Button.jsx";

const motionButton = React.forwardRef(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>
    {children}
  </button>
));
const AnimatedButton = motion(motionButton);

const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
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

const TechStack = () => {

      const [currentIndex, setCurrentIndex] = useState(0);
      const [isContentVisible, setIsContentVisible] = useState(false);
      const handleClick = () => {
        if(!isContentVisible){
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          setIsContentVisible(true);
        }
      };
      
      useEffect(() => {
        let timer;
        if(isContentVisible){
          timer = setTimeout(() => {
            setIsContentVisible(false);
          }, 5000);
        }

        return () => clearTimeout(timer);
      }, [isContentVisible]);

      const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };

      const buttonVariants = {
        idle: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
      };

      // Button text animation variants
      const textVariants = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 }
      };

      return (
        <section className="c-space my-20 sm:mb-96">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }} 
                    whileInView={{ x: 0, opacity: 1 }} 
                    transition={{ ease: 'easeOut', duration: 0.9 }} 
                    viewport={{amount: 0.3}}
                >
                    <div className='text-center text-white border-2 border-white rounded-xl w-fit mx-auto p-4 my-10'>
                        <span className="text-xl sm:text-3xl font-bold text-justify p-2 uppercase">
                            Tech
                        </span>
                        <span className="text-2xl sm:text-4xl font-bold text-blue-800">
                            Stack
                        </span>
                    </div>
                </motion.div>

                <div>
                    <div className="grid grid-rows-6 xl:grid-cols-2 md:grid-cols-2 gap-5 grid-cols-1 h-full relative ">
                      {/* div 1 */}
                        <div className="col-span-1 row-span-6 relative sm:left-10 sm:z-10">
                            <div className="col-span-1 row-span-1">
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-2xl md:text-3xl font-bold text-blue-700">
                                        Hover Over the Icons
                                    </p>
                                    <svg viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet" width="35%" height="70%">
                                        <defs>
                                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto-start-reverse">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                                            </marker>
                                        </defs>
                                        <path d="M1 1 Q130 5, 150 50" fill="none" stroke="white" stroke-width="3" marker-end="url(#arrowhead)"/>
                                    </svg>
                                </div>
                            </div>

                            <div className="col-span-1 row-span-5 border-b-8 shadow-2xl shadow-blue-300 sm:border-2 sm:border-gray-500 sm:rounded-lg sm:shadow-none">
                                <div className="grid-container">
                                    <p className="'mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">
                                        Tech Stack
                                    </p>
                                    <TechStackGrid />
                                </div>
                            </div>
                        </div>

                        {/* div 2 */}
                        <div className="col-span-1 row-span-6 relative sm:border-2 sm:border-gray-500 sm:rounded-lg sm:-bottom-96">
                          <div className="sm:relative mx-auto sm:top-5 h-64 md:w-96">
                            <AnimatePresence mode="wait">
                              {isContentVisible && (
                                  <motion.div
                                      key={currentIndex}
                                      variants={contentVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="exit"
                                      transition={{ duration: 0.5 }}
                                      className={`text-justify font-bold text-3xl text-white tracking-wide`}
                                  >
                                    <p className="text-white text-3xl text-center content content-center h-72 md:w-96 p-4 border-t-2 border-l-2 rounded-full">
                                      {slides[currentIndex].content}
                                    </p>
                                  </motion.div>
                              )}
                            </AnimatePresence> 
                          </div >
                          
                          <img src="assets/eveRobo.png" alt="batman" className="relative -right-20 md:-right-40 md:-bottom-20 h-60 w-60 sm:h-96 sm:w-96 animate-slow-bounce accent-indigo-800"/>
                          
                          <div className="absolute border-2 h-10 w-96 blur-2xl bg-white sm:left-32"></div>
                          <div className="relative mb-4 ">
                            <a onClick={handleClick} className="relative sm:-bottom-20">
                              <Button onClick={handleClick} name={isContentVisible ? "Hire me, i❜ll handle your (not so easy) CSS sss ..." : "Read Eve❜s Current mind, She Repeats things in her mind . . ."} isBeam containerClass="relative md:top-5 text-white text-2xl font-bold tracking-wide"></Button>
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
      );
    };

    export default TechStack;