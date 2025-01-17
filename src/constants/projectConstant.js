import SuicidePreventionImage from "../assets/SuicidePrevention.jpeg";
import ToDoMasterImage from "../assets/ToDoMaster.jpeg";
import TextNovaImage from "../assets/TextNova.jpeg";
import RiskyRollImage from "../assets/RiskyRoll.jpeg";

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
    image: SuicidePreventionImage,
    github: "https://github.com/morabagipravin/Suicide-Risk-Detection",
    website: "",
  },
  {
    id: 2,
    name: "To do Master",
    description: "Developed a React-based To-Do manager, containerized with Docker for efficient task management.",
    techStack: ["JavaScript", "React", "CSS", "GSAP", "Docker"],
    image: ToDoMasterImage,
    github: "https://github.com/morabagipravin/To-Do-Master",
    website: "",
  },
  {
    id: 3,
    name: "Text Nova",
    description: "A website offering various text-based tools and utilities.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap5"],
    image: TextNovaImage,
    github: "https://github.com/morabagipravin/TextNova",
    website: "",
  },
  {
    id: 4,
    name: "Risky-Roll",
    description: "Created a 2-player JavaScript game where the goal is to reach 100 points by rolling dice. Be cautious, rolling a 1 resets your current points.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: RiskyRollImage,
    github: "https://github.com/morabagipravin/Risky-Roll",
    website: "",
},

];

export default projectsData;
