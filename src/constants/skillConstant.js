import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
// import HTMLIcon from "../assets/HTML5.svg";
// import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";
// import JWTIcon from "../assets/JWT.png";
// import PostgreSQLIcon from "../assets/postgresql.svg";
// import SequelizeIcon from "../assets/Sequelize.svg";


const skills = [
  // Programming Languages
  {
    id: 1,
    name: "JavaScript",
    type: "Programming Language",
    image: JavaScriptIcon,
  },
  {
    id: 2,
    name: "TypeScript",
    type: "Programming Language",
    image: TypeScriptIcon,
  },

  // Frontend Libraries and Frameworks
  {
    id: 3,
    name: "React",
    type: "JavaScript Library",
    image: ReactIcon,
  },
  {
    id: 4,
    name: "Next.js",
    type: "React Framework",
    image: NextJsIcon,
  },

  // Styling and CSS Frameworks
  {
    id: 5,
    name: "Tailwind CSS",
    type: "CSS Framework",
    image: TailwindIcon,
  },
  {
    id: 6,
    name: "Bootstrap",
    type: "CSS Framework",
    image: BootstrapIcon,
  },

  // Backend and Databases
  {
    id: 7,
    name: "Node.js",
    type: "JavaScript Runtime",
    image: NodeJsIcon,
  },
  {
    id: 8,
    name: "Express",
    type: "Web Framework",
    image: ExpressIcon,
  },
  // {
  //   id: 9,
  //   name: "Sequelize",
  //   type: "ORM",
  //   image: SequelizeIcon, // Make sure you have this icon
  // },
  // {
  //   id: 10,
  //   name: "PostgreSQL",
  //   type: "Database",
  //   image: PostgreSQLIcon, // Make sure you have this icon
  // },
  {
    id: 11,
    name: "MongoDB",
    type: "Database",
    image: MongoDBIcon,
  },
  // {
  //   id: 12,
  //   name: "JWT (jsonwebtoken)",
  //   type: "Authentication",
  //   image: JWTIcon, // Optional: if you have a token icon
  // },

  // Tools and Version Control
  {
    id: 13,
    name: "Git",
    type: "Version Control",
    image: GitIcon,
  },
  {
    id: 14,
    name: "GitHub",
    type: "Code Hosting Platform",
    image: GitHubIcon,
  },
  // {
  //   id: 15,
  //   name: "Nodemon",
  //   type: "Development Tool",
  //   image: NodemonIcon, // Optional: you can use a generic terminal icon
  // },
  // {
  //   id: 16,
  //   name: "Dotenv",
  //   type: "Environment Management",
  //   image: DotenvIcon, // Optional: use an env or gear icon
  // },

  // Optional fundamentals
  // {
  //   id: 17,
  //   name: "HTML",
  //   type: "Markup Language",
  //   image: HTMLIcon,
  // },
  // {
  //   id: 18,
  //   name: "CSS",
  //   type: "Styling Language",
  //   image: CSSIcon,
  // },
];

export default skills;