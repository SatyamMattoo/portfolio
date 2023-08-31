import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei/core";
import { MeshDistortMaterial } from "@react-three/drei/core";
import {my} from "../assets";
import { Arrow } from "./Arrow";

export const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-primary w-full flex items-center flex-col"
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex items-center h-full">
          <div className=" items-center justify-center w-1/2 h-1/2 relative hidden md:flex">
            <img src={my} className="z-10 absolute" />
            <Canvas className="z-1 absolute">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.9} />
              <directionalLight position={[1, 2, 3]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#E879F9"
                  attach="material"
                  distort={0.4}
                  wireframe={true}
                  wireframeLinejoin="miter"
                  wireframeLinecap="butt"
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
          <div className="w-1 mr-8 h-[480px] md:h-96 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500"></div>
          <div className="text-content">
            <h1 className="text-4xl mb-8 text-fuchsia-400">About me</h1>
            <p className="pb-4 max-w-[480px] text-lg text-left">
              Hey there! I'm a third-year BTech graduate who thrives as a Full
              Stack Developer. I've sculpted captivating and responsive websites
              using the MERN stack, infusing innovation into every pixel. Beyond
              the code, my creativity extends to the world of poetry. I'm not
              just crafting websites; I'm weaving words that inspire and spark
              emotion. I'm on the lookout for an internship to dive deeper into
              the art of web development. Let's collaborate to build digital
              wonders and craft poetic lines of code. 🌟🎨📝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
