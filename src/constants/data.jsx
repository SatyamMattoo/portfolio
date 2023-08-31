//  icons
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  frontend,
  backend,
} from "../assets";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "projects",
    href: "projects",
  },
];

export const social = [
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/SatyamMattoo07",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/SatyamMattoo/",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/satyam-mattoo-918933228/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill

export const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description:" | Expertise in React.js, Tailwind CSS, Chakra UI, Framer Motion, and Sass 💻 | Crafting engaging user experiences with a touch of motion magic 🚀 |",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:"| Specializing in Node.js, Express, and MongoDB ⚙️ | Building robust server-side solutions with a focus on efficiency and scalability 🚀 |",
  },
];

export const projects =[
  {
    title:"Chat app",
    description:"Seamless real-time chat app built with React and Google Firebase. Experience instant connections and dynamic messaging.",
    github:"https://github.com/SatyamMattoo/chat-app",
    app:"https://chat-app-by-satyam.netlify.app/",
    about:"https://www.linkedin.com/posts/satyam-mattoo-918933228_github-satyammattoochat-app-a-chat-app-activity-7072465603696934912-fnpw?utm_source=share&utm_medium=member_desktop",
  },
  {
    title:"Task Management Application",
    description:"Stay organized with our MERN-powered task management app! 📝💡 Seamlessly manage tasks while enjoying the convenience of text-to-speech features. Your to-dos just got even easier to handle. 🗣️🚀",
    github:"https://github.com/SatyamMattoo/todo-frontend",
    app:"https://todo-satyammattoo.netlify.app/",
    about:"https://www.linkedin.com/posts/satyam-mattoo-918933228_mernstackmagic-innovationjourney-techwonders-activity-7096925733981237248-I9X1?utm_source=share&utm_medium=member_desktop",
  },
]