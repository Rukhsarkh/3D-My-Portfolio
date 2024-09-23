import React, { useEffect, useState } from "react";
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

export function CarouselBasic() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = slides.length;

  const handleIndexChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handlePauseResume = () => {
    setIsPaused()//stop and start
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div
      className='relative w-full max-w-xs'
      onMouseEnter={() => setShowNavigation(true)}
      onMouseLeave={() => setShowNavigation(false)}
    >
      <Carousel
        index={currentSlide}
        onIndexChange={handleIndexChange}
        disableDrag={true}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {slide.content}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && <CarouselNavigation />}
        <CarouselIndicator />
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
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-2 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-5">
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
              <div className="w-10 h-10 border-2 border-white"></div>
              <h1 className=" text-blue-900 text-3xl font-extrabold">Wayne❜s Intrusive Thoughts</h1>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-1" >
          <div className="grid-container">
            <p className="className='mx-auto sm:text-4xl text-2xl text-blue-900 text-center p-2 border-2 border-white rounded-md grid-subtext'">
              𝟡𝟘❜s <span className="font-custom">Nostalgic Batman ...</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
