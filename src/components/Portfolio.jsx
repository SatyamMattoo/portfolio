import React from "react";
import { Card } from "../utils/card";
import { services } from "../constants/data";
import { motion } from "framer-motion";
import { boxVariant } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Portfolio = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section
      id="portfolio"
      className=" h-screen flex items-center justify-center bg-gradient p-4"
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col "
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h1 className="text-center text-3xl text-fuchsia-400 ">Roles</h1>
          <div className="mt-20 flex gap-10  flex-col md:flex-row mb-20">
            {services.map((service, index) => (
              <Card key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
