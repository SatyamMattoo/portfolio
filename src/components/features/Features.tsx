import React from 'react';
import { MdModelTraining } from 'react-icons/md';
import { FaMobile, FaGlobe, FaDatabase } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';
import { SiNextdotjs, SiNodedotjs } from "react-icons/si";

// Define the type for features data
interface Feature {
  title: string;
  des: string;
  icon: JSX.Element;
}

const featuresData: Feature[] = [
  {
    title: "Frontend Development",
    des: "Responsive interfaces using Next.js, Tailwind CSS, and animations with Framer Motion.",
    icon: <SiNextdotjs />
  },
  {
    title: "Backend Development",
    des: "Building scalable backend systems using Node.js, Express.js, and Prisma. Efficiently managing databases and server-side logic to handle complex applications.",
    icon: <SiNodedotjs />
  },
  {
    title: "Databases",
    des: "Proficient in handling and optimizing databases with technologies like Prisma, PostgreSQL, MongoDB, and Redis. Expertise in managing complex queries, database schema, and ensuring performance optimization.",
    icon: <FaDatabase />
  },
  {
    title: "AI - Retrieval Augmented Generation",
    des: "Built AI services using RAG for efficient data retrieval. Integrated vector databases to efficiently store and retrieve documentation.",
    icon: <MdModelTraining />
  },
  {
    title: "Hosting & Deployment",
    des: "Experienced in end-to-end deployment of web applications on platforms like Netlify, Vercel, and AWS. Ensuring seamless and efficient deployment of web applications.",
    icon: <FaGlobe />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            des={feature.des}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
