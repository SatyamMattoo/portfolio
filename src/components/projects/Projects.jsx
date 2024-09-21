import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

// Array to hold project details from resume
const projectsData = [
  {
    title: "E-Journal Management Website",
    description: `Tech Stack: MERN stack with RTK Query for optimized performance.
                  Achievements: Successfully built a full-fledged web application emphasizing user interaction and efficient publication workflows. 
                  Expanded expertise in handling complex workflows and optimizing user experiences with RTK Query and GCS.`,
    src: projectOne, // Placeholder for the actual project image, you can replace it with an appropriate image
    github: "https://github.com/SatyamMattoo/journal-backend",
    live: "https://ejournal-satyam.netlify.app/"
  },
  {
    title: "Real-Time Chat App",
    description: `Tech Stack: React.js and Chakra UI for sleek design and responsiveness. Backend powered by Google Firebase for secure chat storage and real-time messaging.
                  Achievements: Successfully launched a dynamic chat app emphasizing user-friendly design and real-time communication. 
                  Expanded proficiency in real-time messaging protocols and Firebase security practices.`,
    src: projectTwo, // Placeholder for the actual project image
    github: "https://github.com/SatyamMattoo/chat-app",
  }
];

const Projects = () => {
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
