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
  firebase,
  express,
  mongo,
  radix,
  gcs,
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
    href: "https://www.linkedin.com/in/satyam-mattoo/",
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
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "mongodb",
    icon: mongo,
  },
  {
    name: "radix",
    icon: radix,
  },
  {
    name: "gcs",
    icon: gcs,
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
    description:
      " | Expertise in React.js, Next.js, Tailwind CSS, Chakra UI, Radix UI, Framer Motion, and Sass 💻 | Crafting engaging user experiences with a touch of motion magic 🚀 | Utilizing Google Cloud Storage for efficient data handling 🌐 |",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:
      "| Specializing in Node.js, Express, MongoDB, and Google Cloud Storage ⚙️ | Building robust server-side solutions with a focus on efficiency, scalability, and cloud-based data management 🚀 |",
  },
];

export const projects = [
  {
    title: "E-journal Application",
    description:
      "Upload and get your articles reviewed with this website powered by Google Cloud Storage and RTK Query",
    github: "https://github.com/SatyamMattoo/journal-frontend",
    app: "https://ejournal-satyam.netlify.app/",
    about:
      "https://www.linkedin.com/posts/satyam-mattoo_excited-to-share-my-latest-project-a-ejournal-activity-7127172134501552128-9-3y?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Chat app",
    description:
      "Seamless real-time chat app built with React and Google Firebase. Experience instant connections and dynamic messaging.",
    github: "https://github.com/SatyamMattoo/chat-app",
    app: "https://chat-app-by-satyam.netlify.app/",
    about:
      "https://www.linkedin.com/posts/satyam-mattoo-918933228_github-satyammattoochat-app-a-chat-app-activity-7072465603696934912-fnpw?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Task Management Application",
    description:
      "Seamlessly manage tasks while enjoying the convenience of text-to-speech features. Your to-dos just got even easier to handle.",
    github: "https://github.com/SatyamMattoo/todo-frontend",
    app: "https://todo-satyammattoo.netlify.app/",
    about:
      "https://www.linkedin.com/posts/satyam-mattoo-918933228_mernstackmagic-innovationjourney-techwonders-activity-7096925733981237248-I9X1?utm_source=share&utm_medium=member_desktop",
  },
];
