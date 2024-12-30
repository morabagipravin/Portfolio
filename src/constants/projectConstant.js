import PortfolioImg from "../assets/portfolio.jpeg";
import SuicidePrevention from "../assets/SuicidePrevention.jpeg";
import ToDoMaster from "../assets/ToDoMaster.jpeg";

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
];

export default projectsData;
