import PortfolioImg from "../assets/portfolio.jpeg";
import SuicidePrevention from "../assets/SuicidePrevention.jpeg";
import ToDoMaster from "../assets/ToDoMaster.jpeg";
import TextNova from "../assets/TextNova.jpeg";

const projectsData = [
  {
    id: 1,
    name: "project LifeLine : AI-Driven-Suicide-Prevention",
    description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
    techStack: [
      "Python",
      "pandas",
      "spaCy",
      "RegEx",
      "NLTK",
      "ML",
    ],
    image: SuicidePrevention,
    github: "https://github.com/morabagipravin/Suicide-Risk-Detection",
    website: "",
  },
  {
    id: 2,
    name: "To do Master",
    description: "Developed a React-based To-Do manager, containerized with Docker for efficient task management.",
    techStack: ["JavaScript", "React", "CSS", "GSAP", "Docker"],
    image: ToDoMaster,
    github: "https://github.com/morabagipravin/To-Do-Master",
    website: "",
  },
  {
    id: 3,
    name: "Text Nova",
    description: "A website offering various text-based tools and utilities.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap5"],
    image: TextNova,
    github: "https://github.com/morabagipravin/TextNova",
    website: "",
  },
];

export default projectsData;
