import React from 'react'
import { TextEffect } from '../components/TextEffect';

const About = () => {
  return (
      <section className='max-w-md max-h-80 flex flex-col relative c-space left-0'>
          <div className='grid-container'>
            <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">Overview</p>
            <div className='grid-subtext text-justify'>
                <TextEffect per='word' as='h3' preset='slide'> ⟶  Building full Stack Web Applications</TextEffect>
                <TextEffect per='word' as='h3' preset='slide'> ⟶  Working with 3-D Visuals Libraries</TextEffect>
                <TextEffect per='word' as='h3' preset='slide'> ⟶  Developing Engaging U - Interfaces</TextEffect>
                <TextEffect per='word' as='h3' preset='slide'> ⟶  Making Responsive & Pixel Perfect Ui's</TextEffect>
            </div>
          </div>
      </section>
  );
};

export default About;