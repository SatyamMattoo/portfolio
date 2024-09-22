import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-10 flex items-center justify-between">
      <p className="text-center text-gray-500 text-base">
        © 2022. All rights reserved by Satyam Mattoo
      </p>
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
  );
}

export default Footer;
