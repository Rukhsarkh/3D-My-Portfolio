import React from 'react'
import { TextEffect } from '../components/TextEffect';

const SVGComponent = () => {
  return (
    <svg
      style={{
        position: "absolute",
        top: "95%",
        left: "160%",
        transform: "translate(-46%, -40%)",
        height: "150px",
        width: "100%",
        fill: "white",
        zIndex: 2
      }}
      viewBox="131.074 57.627 76.878 116.919"
    >
      <path
        d="M 203.901 173.237 C 201.826 173.003 199.756 172.768 197.682 172.534 C 197.604 172.542 197.526 172.549 197.444 172.546 C 189.533 172.339 181.729 171.432 173.983 169.839 C 172.076 169.448 172.471 166.174 174.447 166.393 C 180.272 167.038 186.095 167.682 191.92 168.327 C 180.389 158.304 169.264 147.807 161.787 134.249 C 153.209 118.683 151.088 100.53 157.155 83.694 C 157.432 82.924 158.631 83.225 158.401 84.038 C 153.506 101.339 155.963 119.183 165.198 134.577 C 173.295 148.081 185.346 159.538 197.858 168.983 L 197.861 168.983 C 194.26 165.334 191.877 160.655 191.127 155.393 C 190.799 153.1 194.311 152.115 194.635 154.424 C 195.557 161.014 199.057 166.475 204.807 169.893 C 206.221 170.741 205.752 173.448 203.901 173.237 Z"
        transform="matrix(0.99863, 0.052336, -1, 0.99863, 6.958268, -9.22702)"
      />
      <text
        x="-20.074"
        y="78.576"
        style={{
          fill: "white",
          fontFamily: "Segoe UI",
          fontSize: "15.8px",
          whiteSpace: "pre",
          fontWeight: 500,
        }}
      >
        Hover Effect HERE 
      </text>
    </svg>
  );
};

const About = () => {
  return (
      // <section className='max-w-xl max-h-80 flex flex-row relative c-space left-0'>
      //   <div className='sm:max-w-xl max-w-full'>
      //     <div className='grid-container'>
      //         <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">Overview</p>
      //         <div className='font-thin text-3xl text-white text-justify'>
      //             {/* <TextEffect per='word' as='h3' preset='shake'> ⟶  Building full Stack Web Applications</TextEffect>
      //             <TextEffect per='word' as='h3' preset='shake'> ⟶  Working with 3-D Visuals Libraries</TextEffect>
      //             <TextEffect per='word' as='h3' preset='shake'> ⟶  Developing Engaging U - Interfaces</TextEffect>
      //             <TextEffect per='word' as='h3' preset='shake'> ⟶  Making Responsive & Pixel Perfect Ui's</TextEffect> */}
      //             <TextEffect per='word' as='h3' preset='slide'> ❛❛ Bridging Gap between Innovation & Application by Levaraging AI Toolings ❜❜</TextEffect>
      //         </div>
      //       </div>
      //   </div>

      //   <SVGComponent/>
        
      // </section>

      <section className='c-space m-20'>
            <p className='text-white md:text-5xl text-6xl font-thin md:text-right text-justify'>
              <TextEffect per='word' as='h3' preset='fade'>Connecting STRUCTURES AND FUNCTIONS</TextEffect>
            </p>
      </section>
  );
};

export default About;