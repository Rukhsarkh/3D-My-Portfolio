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

const Hero = () => {

  const isSmall = useMediaQuery({query: ("max-width: 440px")});
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({query: ("min-width: 768px", "max-width: 1024px")});

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-3xl font-thin text-white text-center font-generalsans">
          Hi, I'm Rukhsar<span className="waving-hand">🎀</span>
        </p>

        <p className=" font-thin hero_tag text-gray_gradient">
          Full Stack Developer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
          
              <HeroCamera>
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
      </div>
    </section>
  );
};

export default Hero;
