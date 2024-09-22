import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

interface Experience {
  title: string;
  subTitle: string;
  result: string;
  des: string;
}

// Job experience data array
const experienceData : Experience[] = [
  {
    title: "Software Developer Intern",
    subTitle: "Open Function (July 2024 - September 2024)",
    result: "UK",
    des: `Developed and implemented a Retrieval-Augmented Generation (RAG) service designed to enhance the efficiency and relevance of documentation retrieval based on user queries. This system allowed users to quickly access precise and contextually accurate information from large document repositories.
    
    In parallel, I engineered a job generation service that streamlined the job-writing process for OpenFn, significantly reducing the time and effort required by users to create job expressions. This service integrated seamlessly with the RAG system, leveraging its ability to pull relevant context from the vector database, resulting in faster, more accurate job creation.
    
    Additionally, I wrote a series of Python scripts to automate the testing of output generation and developed a Docker script that embedded documentation into the vector database as part of the build process, ensuring smooth and efficient service deployment.`,
  },
  {
    title: "Web Developer Intern",
    subTitle: "Victo (January 2024 - February 2024)",
    result: "India",
    des: `Developed a sophisticated SaaS platform aimed at streamlining operations for manufacturing companies. I designed and implemented a responsive frontend using Next.js and Tailwind CSS, ensuring a seamless and intuitive user experience.
    
    My contributions included integrating Apollo Client with GraphQL to enhance data management and querying capabilities, resulting in a 40% reduction in API response times and improved overall system performance. I also implemented Twilio for OTP generation, adding a robust layer of security to user authentication processes.
    
    On the backend, I utilized Prisma with PostgreSQL to manage database interactions efficiently, ensuring reliable and optimized data handling. This comprehensive approach significantly improved the platform's functionality, facilitating efficient production record management and complaint resolution across multiple organizational levels, including managers, submanagers, and workers.`,
  },
];

const Experience : React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.map((job, index) => (
            <ResumeCard
              key={index}
              title={job.title}
              subTitle={job.subTitle}
              result={job.result}
              des={job.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
