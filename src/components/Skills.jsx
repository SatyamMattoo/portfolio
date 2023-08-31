import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { skills } from "../constants/data";
import { Arrow } from "./Arrow";

export const Skills = () => {
  return (
    <section id="skills" className="bg-primary">
      <div className="container mx-auto p-4">
        <motion.div>
          <h2 className="text-fuchsia-500 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px]">
            Technologies.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-14 pb-10">
          {skills.map((skills, index) => (
            <div className="w-28 h-28" key={index}>
              <BallCanvas icon={skills.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Arrow />
      </div>
    </section>
  );
};
