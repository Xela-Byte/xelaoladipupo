import {
  backend,
  creator,
  css,
  fethi,
  figma,
  freelance,
  git,
  healthgo,
  healthgoIcon,
  horixon,
  html,
  intellics,
  javascript,
  joinmonie,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
  },
];

const technologies = [
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "FETHI ICT Unit",
    icon: fethi,
    iconBg: "#383E56",
    date: "August 2019 - January 2020",
    points: [
      "Learning the prequisites of programming.",
      "Building proficient websites and managing already built codebase and softwares.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in interactive quiz sections and learning drills.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Intellics Solutions",
    icon: intellics,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Responsible for creating web-based solutions that meet the specific needs of the clients and the organization.",
      "Worked with a variety of programming languages, frameworks, and technologies to build user-friendly, responsive, and visually appealing websites.",
      "Learnt and integrated search engine optimization (SEO) best practices throughout websites.",
      "Enhanced understanding of web development technologies, including HTML, CSS, and JavaScript and popular frameworks like React.",
    ],
  },
  {
    title: "Freelancing Developer",
    company_name: "Fiverr, Freelancer.com, Upwork",
    icon: freelance,
    iconBg: "#383E56",
    date: "Feb 2021 - Mar 2022",
    points: [
      "Gained extensive experience working on a diverse range of projects throughout the period of freelancing.",
      "Developed strong collaboration skills through works with clients.",
      "Demonstrated their problem-solving abilities and innovative thinking during the freelancing experience.",
      "Became committed to continuous learning and professional growth.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "HealthGo",
    icon: healthgoIcon,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Gained extensive experience in integrating web3 technologies and deep understanding of blockchain protocols, smart contracts, and decentralized storage systems into the healthcare app.",
      "Successfully implemented telemedicine features and integrated real-time video conferencing, messaging systems, and remote patient monitoring capabilities, allowing patients to connect with healthcare professionals virtually.",
      "Development of a robust health education module with implemented features like interactive tutorials, personalized health content, and gamification elements to engage users and promote health literacy.",
      "Implemented secure wallet solutions that enable users to securely store and manage their digital assets.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "This looks so good! The app showcase is pretty impressive.",
    name: "Tarun Khatri",
    designation: "CEO",
    company: "Troibits",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "This is great! You did absolutely well. Let's make greatnes together",
    name: "Divine Gift Soetan",
    designation: "CEO",
    company: "HealthGo Inc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Xela is an impressive personnel with edge cutting, fast intuitive knowlegde in his career.",
    name: "Endurance Johnson",
    designation: "CEO",
    company: "Hivend",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "JoinMonie",
    description: `Web based platform that enables individuals and organizations to raise funds for a specific cause or project. Our website
provides a user-friendly interface that allows fundraisers to set up their campaigns and manage their donations, while also offering potential
donors an easy and secure way to contribute.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: joinmonie,
    source_code_link: "https://join-monie.vercel.app/",
  },
  {
    name: "Horixon",
    description: `A professional and engaging online platform that showcases the unique value proposition of startups and provides
visitors with all the information they need to understand the company's products and services.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: horixon,
    source_code_link: "http://horixon.vercel.app/",
  },
  {
    name: "HealthGo",
    description:
      "A healthcare mobile application targeted at telemedicine, health education, virtual appointment based on web3 technologies and integrations",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ReactNative",
        color: "green-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
    ],
    image: healthgo,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.developers.healthgo&hl=en&gl=US",
  },
];

export { services, technologies, experiences, testimonials, projects };
