import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import { DirectionalLight } from "three";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Rings";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { TextEffect } from "../components/TextEffect";

const Hero = () => {

  const isSmall = useMediaQuery({query: ("max-width: 440px")});
  const isMobile = useMediaQuery({ query: "(max-width: 832px)" });
  const isTablet = useMediaQuery({query: ("min-width: 832px", "max-width: 1024px")});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-3xl font-thin text-white text-center font-generalsans">
          H𝒾, i❜m Rukhsar<span className="waving-hand">🌷</span>
        </p>

        <p className="hero_tag text-gray_gradient">
          <TextEffect per="char" preset='fade'>
            {
              isMobile ? `❛❛ Full Stack Dev ❜❜`:`❛❛ Building Frontends - Backends ❜❜`
            }
          </TextEffect>
        </p>
      </div>

      {/* <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
          
              <HeroCamera isMobile={isMobile} >
                <HackerRoom
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                  scale={sizes.deskScale}
                />
              </HeroCamera>

              <group>
                <Target position={sizes.targetPosition}/>
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Rings position={sizes.ringPosition}/>
                <Cube position={sizes.cubePosition}/>
              </group>

              <ambientLight intensity={0.5} />

              <directionalLight intensity={0.5} position={[10, 10, 10]} />

              <PerspectiveCamera
                makeDefault
                position={[0, 0, 20]}
              ></PerspectiveCamera>

          </Suspense>
        </Canvas>

        <div className="absolute left-0 right-0 bottom-7 w-full z-10 c-space ">
          <a href="#contact" className="w-fit">
            <Button name="Let's Work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
