import React from "react";
import { Card } from "../utils/card";
import { projects } from "../constants/data";
import { motion } from "framer-motion";
import { boxVariant } from "../utils/BoxVarient";
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
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1 className="text-center text-3xl text-fuchsia-400 ">Projects</h1>
        <div className="mt-10 flex flex-wrap flex-col w-full justify-evenly md:flex-row mb-10">
          {projects.map((projects, index) => (
            <Card key={projects.title} index={index} {...projects} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
