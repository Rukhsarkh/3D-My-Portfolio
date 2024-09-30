import React, { useCallback, useEffect, useState } from "react";
import { techStackes } from "../constants/index.jsx";
import { slides } from "../constants/slides.jsx";
import {motion, AnimatePresence, easeInOut} from "framer-motion";
import Button from "./Button.jsx";

const motionButton = React.forwardRef(({ children, ...props }, ref) => (
  <button ref={ref} {...props}>
    {children}
  </button>
));
const AnimatedButton = motion(motionButton);
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
} from './Carousel.jsx';

export function CarouselBasic() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isStop, setIsStop] = useState(true);
  const totalSlides = slides.length;

  const handleIndexChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handlePauseResume = useCallback(() => {
    setIsStop((prevIsStop) => !prevIsStop);
  }, []);

  const handleInteraction = useCallback(() => {
    setShowControls(true);
    const timer = setTimeout(() => setShowControls(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;
    if (isStop) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
      }, 10000); // Change slide every 5 seconds
    }
    return () => clearInterval(timer);
  }, [isStop, totalSlides]); 

  return (
    <div className='relative w-full max-w-xs transform -translate-x-1/5 -translate-y-1/5'onTouchStart={handleInteraction} onMouseEnter={() => setShowNavigation(true)} onMouseLeave={() => setShowNavigation(false)}>
      <Carousel index={currentSlide} onIndexChange={handleIndexChange} disableDrag={true}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {slide.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && <CarouselNavigation />}
        {/* {<button className=" text-white text-2xl rounded-lg p-2 border-2 border-white" onClick={handlePauseResume}>{isStop ? <div className="flex flex-row"><img src="assets/pause.png" alt="pause" className="w-8 h-8"></img> &nbsp;<p>Stop</p></div> : <div className="flex flex-row"><img src="assets/play.png" alt="play" className="w-8 h-8"></img> &nbsp;<p>Start</p></div>}</button>} */}
        {/* {showNavigation && <CarouselIndicator />} */}
      </Carousel>
    </div>
  );
}

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

const IntruMsg = () => {
  return (
    <div className='flex aspect-square items-start justify-center'>
      <div className="w-1/2 h-1/2 bg-white-500 text-black">
        {
          slides.map((slide, index) => (
            <div key={index}>
              {slide.content}
            </div>
          ))
        }
      </div>
    </div>
  )
}

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
                                <p className="text-white text-3xl text-center content content-center h-72 md:w-96 p-4 border-2 rounded-full">
                                  {slides[currentIndex].content}
                                </p>
                              </motion.div>
                          )}
                        </AnimatePresence> 
                      </div >
                      
                      <img src="assets/eva Robot.jpg" alt="batman" className="relative -right-20 md:-right-40 md:-bottom-20 h-60 w-60 sm:h-96 sm:w-96 animate-slow-bounce accent-indigo-800"/>
                      
                      <div className="absolute border-2 h-10 w-96 blur-2xl bg-white sm:left-32"></div>
                      {/* <div className="relative mb-4 "> */}
                        <a onClick={handleClick} className="relative sm:-bottom-20">
                          <Button onClick={handleClick} name={isContentVisible ? "i use Standard practices of Code, i❜ll handle your (not so easy) CSS sss, Hire me ..." : "Read Eve❜s Current mind, She Repeats things in her mind . . ."} isBeam containerClass="relative md:top-5 text-white text-2xl font-bold tracking-wide"></Button>
                        </a>
                      {/* </div> */}
                    </div>
                    
                     {/* div 2  */}
                    {/* <div className="col-span-1 row-span-6 border-2 bg-[url('assets/batman3.jpg')] bg-cover"> */}
                        {/* <div className="grid-container bg-[url('assets/batman3.jpg')] bg-cover flex flex-col justify-between"> */}
                          {/* <div>
                                <AnimatePresence mode="wait">
                                    {isContentVisible && (
                                        <motion.div
                                            key={currentIndex}
                                            variants={contentVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.5 }}
                                            className={`text-center ${slides[currentIndex].color} font-bold text-lg`}
                                        >
                                            {slides[currentIndex].content}
                                        </motion.div>
                                    )}
                                  </AnimatePresence>                
                            </div> */}
                            {/* <div className="flex flex-col gap-1 align-bottom">
                                {!isContentVisible && (
                                  <AnimatedButton
                                    className="mb-5 sm:min-w-96 text-3xl p-1 text-white border-2 rounded-lg"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick();
                                    }}
                                    variants={buttonVariants}
                                    initial="idle"
                                    whileHover="hover"
                                    whileTap="tap"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    disabled={isContentVisible}
                                  >
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={isContentVisible ? 'wait' : 'click'}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                        >
                                          {isContentVisible ? "Bat": "Wanna Know Bat's mind Rn ?"}
                                        </motion.span>
                                    </AnimatePresence>
                                  </AnimatedButton>
                                )}
                                <span className="font-custom text-green-600 text-3xl tracking-wide md:text-4xl">Recreated 𝟡𝟘❜s Nostalgia . .</span>
                                <hr className="border-b border-white my-3"></hr>
                                <span className="text-blue-300 theme-span">Every Dev is a Dark Knight With 
                                <span className="text-blue-600 theme-span"> 100 Moods And １ Expression . .</span></span>
                            </div> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
  );
};

export default TechStack;


{/* <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
  <div className="col-span-1 row-span-6">
    <div className="col-span-1 row-span-1"></div>
    <div className="col-span-1 row-span-5"></div>
  </div>
  <div className="">

  </div>
</div> */}