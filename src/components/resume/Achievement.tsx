import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

interface Achievement {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

const achievements = [
  {
    title: "Open Source Contributions",
    subTitle: "Open Function CLI (kit)",
    result: "Merged",
    des: "I contributed extensively to the Open Function CLI (kit) by identifying and solving five major issues. This contribution significantly enhanced the project's efficiency and usability. My work involved debugging and resolving critical bugs that had been hindering the user experience, as well as adding new and optimized commands for better functionality. These efforts culminated in my pull requests being successfully merged into the main repository, leading to an overall improvement in the CLI tool's stability and feature set.",
  },
  {
    title: "C4GT Program",
    subTitle: "Selected for DMP 2024 Mentorship Program",
    result: "Success",
    des: "After a rigorous selection process involving over 2500 applicants, I was chosen to be part of the esteemed DMP 2024 mentorship program. Over the course of three months, I collaborated with the Open Function team to implement two critical services: the Retrieval-Augmented Generation (RAG) service and a job generation service. These services were designed to streamline user interactions with the platform by offering enhanced content retrieval and job automation features, leading to a marked improvement in user experience and platform scalability.",
  },
];

const Achievement: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">(2024)</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Programs and Open Source
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {achievements.map((achievement, index) => (
            <ResumeCard
              key={index}
              title={achievement.title}
              subTitle={achievement.subTitle}
              result={achievement.result}
              des={achievement.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
