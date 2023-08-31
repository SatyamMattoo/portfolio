//  icons
import {FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
} from '../assets';

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
    name: "contact",
    href: "contact",
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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },

];

export const sections = [
    {
      title: "Frontend Developer",
      content:
        "I am proficient in HTML, CSS, JavaScript and React and have experience developing responsive and user-friendly web applications.",
 },
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express and Node.js",
  },
];