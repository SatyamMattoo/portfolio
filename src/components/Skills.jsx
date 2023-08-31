import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { skills } from "../constants/data";

export const Skills = () => {
  return (
    <section className="bg-gradient">
      <div className="container mx-auto p-4">
        <div>
          <h2 className="text-3xl text-center text-fuchsia-400">
            Technologies
          </h2>
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
