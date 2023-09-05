import React from "react";
import { Card } from "../utils/card";
import { services } from "../constants/data";
import { motion } from "framer-motion";
import { boxVariant2 } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Portfolio = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section id="portfolio" className=" h-screen flex items-center justify-center bg-gradient p-4">
      <div className="container mx-auto">
        <motion.div
          className="flex item-center justify-center flex-col "
          ref={ref}
          variants={boxVariant2}
          initial="hidden"
          animate={control}
        >
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
            Roles
          </h1>
          <div className="mt-10 flex gap-10 items-center justify-center flex-col md:flex-row mb-10">
            {services.map((service, index) => (
              <Card key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
