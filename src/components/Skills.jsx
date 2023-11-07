import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { skills } from "../constants/data";

export const Skills = () => {
  return (
    <section className="bg-gradient">
      <div className="container mx-auto p-4">
        <div className="flex flex-col">
          <div className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <h2 className="text-4xl tracking-tight font-extrabold text-center text-white">
            Technologies
          </h2>
          <div className="h-1 w-1/2 self-end mx-8 my-4 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-14 pb-10">
          {skills.map((skills, index) => (
            <div className="w-28 h-28" key={index}>
              <BallCanvas icon={skills.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
