import jessicaV3 from "../assets/images/jessica-v3.webp";
import fabiana from "../assets/images/fabiana-react.webp";
import airbnb from "../assets/images/airbnb-home.webp";

export const projects = [
  {
    id: 1,
    number: "World 01",
    title: "Jessica Di Flumeri",
    version: "Version 3.0 · Live",
    category: "Psychologist Website · UX/UI Redesign",
    description:
      "The project that transformed the way I think about digital experiences. A complete redesign focused on trust, emotional clarity and meaningful user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: jessicaV3,
    alt: "Homepage del sito di Jessica Di Flumeri",
    url: "https://jessica-diflumeri.netlify.app/",
    button: "Enter World →",
    modifier: "world-card--jessica",
  },
  {
    id: 2,
    number: "World 02",
    title: "Fabiana Le Grottaglie",
    version: "React Redesign · Live",
    category: "Psychologist Website · React Development",
    description:
      "A complete redesign and rebuild of Fabiana's professional website, focused on clarity, trust and accessibility. The original project evolved into a React-based experience with a more structured architecture, responsive navigation and a stronger visual identity.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Lucide React",
      "Responsive Design",
    ],
    image: fabiana,
    alt: "Homepage del nuovo sito React di Fabiana Le Grottaglie",
    url: "https://dottoressa-fabiana-le-grottagile.netlify.app/",
    button: "Enter World →",
    modifier: "world-card--fabiana world-card--reverse",
  },

  {
    id: 3,
    number: "World 03",
    title: "Airbnb Clone",
    version: "EPICODE · Team Project",
    category: "Front-End Development · Build Week",
    description:
      "A collaborative recreation of Airbnb built during EPICODE's Build Week. I contributed to the development of interactive navigation, dynamic dropdowns, JavaScript logic and responsive user interface components while working within a shared Git workflow.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "React",
      "Git",
      "GitHub",
    ],
    image: airbnb,
    alt: "Homepage dell'Airbnb Clone sviluppato durante la Build Week di EPICODE",
    url: "https://github.com/devHP-source/Build-Week-2",
    button: "View Source →",
    modifier: "world-card--airbnb",
  },
];
