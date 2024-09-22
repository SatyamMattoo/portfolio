import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft: React.FC = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Satyam Mattoo</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          A Full Stack Developer with experience in building MERN stack and NextJS websites.
          I am passionate about creating efficient, scalable, and user-friendly
          applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7876740985</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">satyammattoo2003@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
}

export default ContactLeft;
