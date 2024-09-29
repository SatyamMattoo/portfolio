import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectThree, projectTwo } from "../../assets/index.ts";
import ProjectsCard from './ProjectsCard';

// Define the type for project data
interface ProjectData {
  title: string;
  description: string;
  src: string;
  github: string;
  live?: string; // 'live' link is optional
}

// Array to hold project details from resume
const projectsData: ProjectData[] = [
  {
    title: "CLI Tool - Markdown to HTML",
    description: `Created a Typescript CLI tool that allows you to convert single or multiple Markdown files to HTML.
                  This tool includes features like automatic conversion of Markdown files on save along with custom CSS 
                  implementation and live preview of the converted HTML.`,
    src: projectThree,
    github: "https://github.com/SatyamMattoo/cli-mth",
    live: "https://www.npmjs.com/package/mth-live-cli"
  },
  {
    title: "E-Journal Management Website",
    description: `MERN stack with RTK Query for optimized performance.
                  Successfully built a full-fledged web application emphasizing user interaction and efficient publication workflows. 
                  Expanded expertise in handling complex workflows and optimizing user experiences with RTK Query and GCS.`,
    src: projectOne,
    github: "https://github.com/SatyamMattoo/journal-backend",
    live: "https://ejournal-satyam.netlify.app/"
  },
  {
    title: "Real-Time Chat App",
    description: `React.js and Chakra UI for sleek design and responsiveness. Backend powered by Google Firebase for secure chat storage and real-time messaging.
                  Successfully launched a dynamic chat app emphasizing user-friendly design and real-time communication. 
                  Expanded proficiency in real-time messaging protocols and Firebase security practices.`,
    src: projectTwo,
    github: "https://github.com/SatyamMattoo/chat-app",
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* Map over the projectsData array */}
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.description}
            src={project.src}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
