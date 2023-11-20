import React from "react";
import { smLogo } from "../assets";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei/core";
import { MeshDistortMaterial } from "@react-three/drei/core";
import { motion } from "framer-motion";
import { boxVariant1 } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Hero = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section
      id="home"
      className="h-screen bg-gradient w-full flex items-center flex-col"
    >
      <div className="container mx-auto h-full flex justify-center">
        <motion.div
          className="content-wrapper flex items-center card"
          ref={ref}
          variants={boxVariant1}
          initial="hidden"
          animate={control}
        >
          <div className="flex">
            <div className="w-1 mr-8 md:h-62 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500"></div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-content">
                <h1 className="text-4xl lg:text-5xl pb-4 font-bold">
                  Hey I'm <span className="text-fuchsia-400">Satyam</span>
                </h1>
                <p className="pb-4 max-w-[480px] text-lg text-left">
                  I'm a 3rd-year BTech graduate and a Full Stack Developer with
                  a passion for innovation.I specialize in building captivating
                  and responsive full stack websites that bridge creativity and
                  functionality. Let's turn visions into reality and reimagine
                  the digital landscape together! 🚀🌐
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full lg:block hidden relative">
            <Canvas className=" absolute inset-0">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.9} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1}>
                <MeshDistortMaterial
                  color="#E879F9"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Canvas>
          </div>
        </motion.div>
      </div>
      <img src={smLogo} alt="" className="h-20 md:hidden" />
    </section>
  );
};
