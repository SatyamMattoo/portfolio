import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Development Skills',
    skills: [
      { name: 'React', percentage: '80%' },
      { name: 'Next.js', percentage: '70%' },
      { name: 'TypeScript', percentage: '80%' },
      { name: 'Databases', percentage: '80%' },
      { name: 'NodeJS', percentage: '80%' },
      { name: 'Docker', percentage: '90%' },
      { name: 'Git', percentage: '90%' },
    ],
  },
  {
    category: 'AI Skills',
    skills: [
      { name: 'Python', percentage: '60%' },
      { name: 'RAG', percentage: '80%' },
      { name: 'Vector Databases', percentage: '60%' },
      { name: 'Embeddding Models', percentage: '85%' },
      { name: 'OpenAI', percentage: '40%' },
    ],
  },
];

const SkillBar = ({ name, percentage }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{name}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        style={{ width: percentage }}
      >
        <span className="absolute -top-7 right-0">{percentage}</span>
      </motion.span>
    </span>
  </div>
);

const SkillsSection = ({ category, skills }) => (
  <div className="w-full lgl:w-1/2">
    <div className="py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px] uppercase">
        Features
      </p>
      <h2 className="text-3xl md:text-4xl font-bold">{category}</h2>
    </div>
    <div className="mt-14 w-full flex flex-col gap-6">
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {skillsData.map((section, index) => (
        <SkillsSection
          key={index}
          category={section.category}
          skills={section.skills}
        />
      ))}
    </motion.div>
  );
};

export default Skills;
