import React from "react";
import { Card } from "../utils/card";
import { services } from "../constants/data";
import { motion } from "framer-motion";
import { boxVariant3 } from "../utils/BoxVarient";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export const Portfolio = () => {
  const { ref, control } = useInViewAnimation();

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center justify-center bg-gradient p-4"
    >
      <div className="container mx-auto">
        <motion.div
          className="flex item-center justify-center flex-col card"
          ref={ref}
          variants={boxVariant3}
          initial="hidden"
          animate={control}
        >
          <div className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <h1 className="text-4xl tracking-tight font-extrabold text-center text-white">
            Roles
          </h1>
          <div className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="mt-5 flex gap-10 items-center justify-center flex-col md:flex-row mb-10">
            {services.map((service, index) => (
              <Card key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
