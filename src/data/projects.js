import jessicaV3 from "../assets/images/jessica-v3.webp";
import fabiana from "../assets/images/fabiana-react.webp";
import fulvio from "../assets/images/fulvio-home.webp";
import airbnb from "../assets/images/airbnb-home.webp";

export const projects = [
  {
    id: 1,
    slug: "progettare-la-fiducia",
    client: "Jessica Di Flumeri",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: jessicaV3,
    alt: "Homepage del sito professionale di psicoterapia",
    url: "https://jessica-diflumeri.netlify.app/",
    modifier: "world-card--jessica",
  },
  {
    id: 2,
    slug: "dare-forma-a-un-identita",
    client: "Fabiana Le Grottaglie",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "Lucide React",
      "Responsive Design",
    ],
    image: fabiana,
    alt: "Homepage del sito professionale realizzato in React",
    url: "https://dottoressafabianalegrottagile.netlify.app/",
    modifier: "world-card--fabiana world-card--reverse",
  },
  {
    id: 3,
    slug: "semplificare-la-complessita",
    client: "Fulvio Martello",
    technologies: ["React", "Vite", "JavaScript", "CSS3", "Responsive Design"],
    image: fulvio,
    alt: "Homepage del sito di consulenza professionale",
    url: "https://dottor-fulvio.netlify.app/",
    modifier: "world-card--fulvio",
  },
  {
    id: 4,
    slug: "costruire-insieme",
    client: "EPICODE · Team Project",
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
    alt: "Homepage del progetto Airbnb Clone",
    url: "https://github.com/devHP-source/Build-Week-2",
    modifier: "world-card--airbnb world-card--reverse",
  },
];
