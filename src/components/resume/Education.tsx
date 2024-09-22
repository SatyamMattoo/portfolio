import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// Define the structure of the educationData
interface EducationRecord {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

interface EducationSection {
  sectionTitle: string;
  timePeriod: string;
  records: EducationRecord[];
}

// Education data array
const educationData: EducationSection[] = [
  {
    sectionTitle: "Graduation",
    timePeriod: "(2021 - 2025)",
    records: [
      {
        title: "B.Tech - ECE",
        subTitle: "UIT, Shimla (2021 - 2025)",
        result: "8.7/10",
        des: "A comprehensive 4-year Bachelor of Technology degree in Electronics and Communication Engineering, offering an in-depth study of modern electronics, communication systems, and digital technologies. The program equipped me with practical experience in circuit design, embedded systems, and telecommunications, along with exposure to software development in C, C++, and Python.",
      },
    ],
  },
  {
    sectionTitle: "Schooling",
    timePeriod: "(2007 - 2021)",
    records: [
      {
        title: "ICSE - 12th",
        subTitle: "Sacred Heart School (2020 - 2021)",
        result: "93%",
        des: "Completed senior secondary education with a focus on Science, Mathematics, and Computer Science. The curriculum emphasized analytical problem-solving, scientific principles, and the practical application of knowledge, preparing me for advanced technical studies.",
      },
      {
        title: "ICSE - 10th",
        subTitle: "Sacred Heart School (2018 - 2019)",
        result: "94%",
        des: "Achieved a solid foundation in key subjects such as Physics, Chemistry, Mathematics, and English during my secondary education. This phase focused on fostering critical thinking, creativity, and a comprehensive understanding of core academic concepts.",
      },
    ],
  },
];

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {educationData.map((section, index) => (
        <div key={index}>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">
              {section.timePeriod}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {section.sectionTitle}
            </h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {section.records.map((record, i) => (
              <ResumeCard
                key={i}
                title={record.title}
                subTitle={record.subTitle}
                result={record.result}
                des={record.des}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};


export default Education;
