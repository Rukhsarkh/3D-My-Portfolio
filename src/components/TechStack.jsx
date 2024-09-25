import React, { useCallback, useEffect, useState } from "react";
import { TextEffect } from "./TextEffect.jsx";
import { techStackes } from "../constants/index.jsx";
import { slides } from "../constants/slides.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
} from './Carousel.jsx';
import {motion} from "framer-motion";

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
      }, 2000); // Change slide every 5 seconds
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
        {/* {showNavigation && <CarouselIndicator />} */}
        {showNavigation && <button className=" text-white text-2xl rounded-lg p-2 ml-0 mb-2 border-2 border-white" onClick={handlePauseResume}>{isStop ? <div className="flex flex-row"><img src="assets/pause.png" alt="pause" className="w-8 h-8"></img> &nbsp;<p>Stop</p></div> : <div className="flex flex-row"><img src="assets/play.png" alt="play" className="w-8 h-8"></img> &nbsp;<p>Start</p></div>}</button>}
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

const TechStack = () => {
  return (
    <section className="c-space my-20 flex flex-col border-2">
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity:1 }} transition={{ ease: 'easeOut', duration: 0.9 }} viewport={{amount: 0.3}}>
        <div className='text-center text-white border-2 border-white rounded-xl w-fit mx-auto p-4 my-10'>
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              Tech
            </span>
            <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-800 text-blue-700 text-transparent bg-clip-text">
              Stack
            </span>
        </div>
        </motion.div>

      <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container bg-[url('assets/spotlight3.png')] bg-cover">
            <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">
              Tech Stack
            </p>
            <TechStackGrid />
          </div>
        </div>

        <div className="col-span-1 xl:row-span-6">
          <div className="grid-container bg-[url('assets/batman3.jpg')] bg-cover grid grid-cols-2 grid-rows3 justify-between"> 
            <CarouselBasic/>
            <div className="flex flex-row gap-2">
              <div className="w-20 h-20 border-2 border-white"></div>
              <div>
                <h1 className=" text-green-600 text-3xl font-extrabold"><span className="font-custom">𝟡𝟘❜s Coder Batman. . .</span></h1>
                <h1 className=" text-blue-600 text-3xl font-extrabold"><span className="font-custom">100 Moods １ Xpression</span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
