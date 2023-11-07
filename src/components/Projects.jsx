import React from "react";
import { Card } from "../utils/card";
import { projects } from "../constants/data";
import { motion } from "framer-motion";
import { boxVariant3 } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Projects = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section
      id="projects"
      className="h-screen flex bg-gradient items-center justify-center"
    >
      <motion.div
        className="container"
        ref={ref}
        variants={boxVariant3}
        initial="hidden"
        animate={control}
      >
        <div className="flex flex-col">
          <div className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <h1 className="text-4xl tracking-tight font-extrabold text-center text-white">
            Projects
          </h1>
          <div className="h-1 w-1/2 self-end mx-8 my-4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="mt-10 flex flex-wrap flex-col w-full justify-evenly items-center lg:flex-row mb-10">
          {projects.map((projects, index) => (
            <Card key={projects.title} index={index} {...projects} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
