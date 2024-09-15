// import { PerspectiveCamera } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import CanvasLoader from "../components/CanvasLoader";
// import { Suspense } from "react";
// import HackerRoom from "../components/HackerRoom";
// import { DirectionalLight } from "three";

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative' id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-3xl font-medium text-white text-center font-generalsans">Hi, I'm Rukhsar <span className="waving-hand">🎀</span></p>

            <p className="hero_tag text-gray_gradient">Building 3D visuals | Full Stack Web Applications</p>
        </div>

        {/* <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader/>}></Suspense>
              <HackerRoom scale={0.07} position={[0,-8,0]} rotation={[0.1,-Math.PI,0]}/>
              <ambientLight intensity={0.5}/>
              <DirectionalLight intensity={0.5} position={[10,10,10]}/>
              <PerspectiveCamera makeDefault position={[0, 0, 30]}></PerspectiveCamera>
            </Canvas>
        </div> */}
    </section>
  )
}

export default Hero;