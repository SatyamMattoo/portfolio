import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiDocker, SiPython } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Full Stack Developer.", "Tech Enthuiast."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Satyam Mattoo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a results-driven software developer with expertise in TypeScript, Python, and
          full-stack development, specializing in building scalable applications.
          Proficient in frontend technologies like Next.js, Tailwind CSS, and GraphQL,
          as well as backend systems using Node.js, Prisma, and PostgreSQL.
        </p>
      </div>
      
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <a href='https://github.com/SatyamMattoo' className="bannerIcon" target='_blank' rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href='https://twitter.com/SatyamMattoo07' className="bannerIcon" target='_blank' rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com/in/satyam-mattoo' className="bannerIcon" target='_blank' rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiDocker />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;