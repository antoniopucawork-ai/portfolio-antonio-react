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

    content: {
      it: {
        number: "Mondo 01",
        title: "Progettare la fiducia.",
        version: "Versione 3.0 · Online",
        category: "UX/UI Design · Sviluppo Web",
        description:
          "Come può un'esperienza digitale comunicare fiducia ed empatia? Un progetto dedicato alla creazione di una presenza professionale accogliente, chiara e consapevole.",
        button: "Esplora il mondo →",
        subtitle: "Un'esperienza digitale costruita intorno alle persone.",
        industry: "Psicologia e psicoterapia",
        role: "UX/UI Design e sviluppo web",
        sections: [
          {
            type: "text",
            label: "01 / IL PROBLEMA",
            title: "Come si trasmette fiducia attraverso uno schermo?",
            paragraphs: [
              "Un sito dedicato alla psicoterapia non può limitarsi a presentare servizi e informazioni.",
              "La sfida progettuale era creare un'esperienza capace di comunicare professionalità senza risultare distante, mantenendo i contenuti chiari e facilmente accessibili.",
            ],
          },
          {
            type: "text",
            label: "02 / IL RAGIONAMENTO",
            title: "Prima delle scelte visive, vengono le persone.",
            paragraphs: [
              "Prima di lavorare sull'aspetto del sito, mi sono concentrato su ciò che l'esperienza doveva comunicare.",
              "Ho cercato un equilibrio tra accoglienza, chiarezza e identità professionale.",
            ],
          },
          {
            type: "text",
            label: "03 / LE SCELTE",
            title: "Ogni dettaglio deve avere una ragione.",
            paragraphs: [
              "Ho lavorato sulla gerarchia visiva, sulla tipografia, sugli spazi e sulla leggibilità dei contenuti.",
              "Anche le interazioni sono state pensate per accompagnare la navigazione senza distrarre.",
            ],
          },
          {
            type: "text",
            label: "04 / L'EVOLUZIONE",
            title: "Tre versioni, un modo diverso di progettare.",
            paragraphs: [
              "Questo progetto si è evoluto attraverso tre versioni, accompagnando anche la mia crescita come sviluppatore.",
              "Ogni revisione mi ha portato a ragionare in modo più consapevole sull'esperienza utente e sull'identità visiva.",
            ],
          },
          {
            type: "text",
            label: "05 / IL RISULTATO",
            title: "Un'esperienza costruita intorno alle persone.",
            paragraphs: [
              "Il risultato è un sito professionale progettato per offrire una navigazione chiara, un'identità coerente e un'esperienza accogliente.",
            ],
          },
        ],
      },

      en: {
        number: "World 01",
        title: "Designing trust.",
        version: "Version 3.0 · Live",
        category: "UX/UI Design · Web Development",
        description:
          "How can a digital experience communicate trust and empathy? A project focused on creating a welcoming, clear and thoughtful professional presence.",
        button: "Explore the world →",
        subtitle: "A digital experience built around people.",
        industry: "Psychology and psychotherapy",
        role: "UX/UI Design and web development",
        sections: [
          {
            type: "text",
            label: "01 / THE CHALLENGE",
            title: "How do you communicate trust through a screen?",
            paragraphs: [
              "A psychotherapy website needs to do more than present services and information.",
              "The design challenge was to communicate professionalism without feeling distant, while keeping content clear and accessible.",
            ],
          },
          {
            type: "text",
            label: "02 / THE THINKING",
            title: "People come before visual decisions.",
            paragraphs: [
              "Before focusing on the visual design, I considered what the experience needed to communicate.",
              "I looked for a balance between warmth, clarity and professional identity.",
            ],
          },
          {
            type: "text",
            label: "03 / THE DECISIONS",
            title: "Every detail needs a reason.",
            paragraphs: [
              "I worked on visual hierarchy, typography, spacing and readability.",
              "Interactions were designed to support navigation without becoming distractions.",
            ],
          },
          {
            type: "text",
            label: "04 / THE EVOLUTION",
            title: "Three versions, a different way of designing.",
            paragraphs: [
              "This project evolved through three versions, reflecting my growth as a developer.",
              "Each revision encouraged me to think more intentionally about user experience and visual identity.",
            ],
          },
          {
            type: "text",
            label: "05 / THE RESULT",
            title: "An experience built around people.",
            paragraphs: [
              "The result is a professional website designed around clear navigation, a coherent identity and a welcoming experience.",
            ],
          },
        ],
      },
    },
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

    content: {
      it: {
        number: "Mondo 02",
        title: "Dare forma a un'identità.",
        version: "Redesign React · Online",
        category: "UX/UI Design · Sviluppo React",
        description:
          "Trasformare un'identità professionale in un'esperienza digitale coerente attraverso un redesign completo, una navigazione più chiara e un'architettura React.",
        button: "Esplora il mondo →",
        subtitle:
          "Trasformare una presenza digitale in un'identità riconoscibile.",
        industry: "Psicologia",
        role: "UX/UI Design e sviluppo React",
        sections: [
          {
            type: "text",
            label: "01 / IL PROBLEMA",
            title: "Un sito deve rappresentare chi c'è dietro.",
            paragraphs: [
              "Il punto di partenza era ripensare una presenza digitale professionale per renderla più chiara, coerente e riconoscibile.",
            ],
          },
          {
            type: "text",
            label: "02 / IL RAGIONAMENTO",
            title: "Costruire coerenza, non soltanto una nuova grafica.",
            paragraphs: [
              "Ho lavorato per dare una direzione comune alla struttura, ai contenuti e all'identità visiva.",
            ],
          },
          {
            type: "text",
            label: "03 / LE SCELTE",
            title: "Un'architettura pensata per evolvere.",
            paragraphs: [
              "Ho ricostruito il progetto con React, organizzando l'interfaccia in componenti riutilizzabili e curando l'esperienza responsive.",
            ],
          },
          {
            type: "text",
            label: "04 / IL RISULTATO",
            title: "Un'esperienza più coerente.",
            paragraphs: [
              "Il redesign ha portato a un sito con una struttura più ordinata, una navigazione più chiara e un linguaggio visivo riconoscibile.",
            ],
          },
        ],
      },

      en: {
        number: "World 02",
        title: "Shaping an identity.",
        version: "React Redesign · Live",
        category: "UX/UI Design · React Development",
        description:
          "Transforming a professional identity into a coherent digital experience through a complete redesign, clearer navigation and a React-based architecture.",
        button: "Explore the world →",
        subtitle: "Turning a digital presence into a recognisable identity.",
        industry: "Psychology",
        role: "UX/UI Design and React development",
        sections: [
          {
            type: "text",
            label: "01 / THE CHALLENGE",
            title: "A website should reflect the person behind it.",
            paragraphs: [
              "The starting point was to rethink a professional digital presence and make it clearer, more coherent and more recognisable.",
            ],
          },
          {
            type: "text",
            label: "02 / THE THINKING",
            title: "Creating consistency, not just a new visual design.",
            paragraphs: [
              "I worked to bring structure, content and visual identity into one consistent direction.",
            ],
          },
          {
            type: "text",
            label: "03 / THE DECISIONS",
            title: "An architecture designed to evolve.",
            paragraphs: [
              "I rebuilt the project with React, organising the interface into reusable components and refining the responsive experience.",
            ],
          },
          {
            type: "text",
            label: "04 / THE RESULT",
            title: "A more coherent experience.",
            paragraphs: [
              "The redesign resulted in a website with a more organised structure, clearer navigation and a recognisable visual language.",
            ],
          },
        ],
      },
    },
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

    content: {
      it: {
        number: "Mondo 03",
        title: "Semplificare la complessità.",
        version: "Sito React · Online",
        category: "Web Design · Sviluppo React",
        description:
          "Organizzare servizi professionali differenti in un percorso digitale chiaro, aiutando i visitatori a comprendere argomenti complessi e trovare le informazioni necessarie.",
        button: "Esplora il mondo →",
        subtitle: "Rendere semplici informazioni e servizi complessi.",
        industry: "Consulenza professionale",
        role: "Web Design e sviluppo React",
        sections: [
          {
            type: "text",
            label: "01 / IL PROBLEMA",
            title: "Come rendere comprensibili servizi differenti?",
            paragraphs: [
              "Il progetto riunisce diversi ambiti di consulenza professionale. La sfida era presentarli senza creare confusione.",
            ],
          },
          {
            type: "text",
            label: "02 / IL RAGIONAMENTO",
            title: "La chiarezza parte dall'organizzazione.",
            paragraphs: [
              "Ho cercato di costruire un percorso che aiutasse il visitatore a orientarsi tra le informazioni e individuare il servizio di cui ha bisogno.",
            ],
          },
          {
            type: "text",
            label: "03 / LE SCELTE",
            title: "Un percorso digitale guidato.",
            paragraphs: [
              "Ho lavorato sulla gerarchia dei contenuti, sulla navigazione e su un'interfaccia responsive sviluppata con React.",
            ],
          },
          {
            type: "text",
            label: "04 / IL RISULTATO",
            title: "Informazioni più facili da esplorare.",
            paragraphs: [
              "Il risultato è una presenza digitale che organizza i servizi in modo strutturato e facilita l'accesso alle informazioni.",
            ],
          },
        ],
      },

      en: {
        number: "World 03",
        title: "Simplifying complexity.",
        version: "React Website · Live",
        category: "Web Design · React Development",
        description:
          "Organising different professional services into a clear digital journey, helping visitors understand complex subjects and find the information they need.",
        button: "Explore the world →",
        subtitle: "Making complex services easier to understand.",
        industry: "Professional consulting",
        role: "Web Design and React development",
        sections: [
          {
            type: "text",
            label: "01 / THE CHALLENGE",
            title: "How do you make different services understandable?",
            paragraphs: [
              "The project brings together several areas of professional consulting. The challenge was to present them without creating confusion.",
            ],
          },
          {
            type: "text",
            label: "02 / THE THINKING",
            title: "Clarity begins with organisation.",
            paragraphs: [
              "I aimed to create a journey that helps visitors navigate the information and identify the services they need.",
            ],
          },
          {
            type: "text",
            label: "03 / THE DECISIONS",
            title: "A guided digital journey.",
            paragraphs: [
              "I focused on content hierarchy, navigation and a responsive interface built with React.",
            ],
          },
          {
            type: "text",
            label: "04 / THE RESULT",
            title: "Information that is easier to explore.",
            paragraphs: [
              "The result is a digital presence that organises services into a clear structure and makes information easier to access.",
            ],
          },
        ],
      },
    },
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

    content: {
      it: {
        number: "Mondo 04",
        title: "Costruire insieme.",
        version: "EPICODE · Progetto di team",
        category: "Sviluppo Front-End · Collaborazione",
        description:
          "Ricostruire un'interfaccia complessa lavorando in squadra, combinando competenze tecniche, collaborazione e un workflow Git condiviso.",
        button: "Esplora il mondo →",
        subtitle: "Un progetto in cui il codice incontra la collaborazione.",
        industry: "Formazione e sviluppo web",
        role: "Sviluppo Front-End · Teamwork",
        sections: [
          {
            type: "text",
            label: "01 / IL PROBLEMA",
            title: "Ricostruire un'interfaccia complessa in squadra.",
            paragraphs: [
              "Durante una Build Week di EPICODE, il team ha lavorato alla ricostruzione di un'interfaccia ispirata ad Airbnb.",
            ],
          },
          {
            type: "text",
            label: "02 / IL MIO CONTRIBUTO",
            title: "Dalla navigazione alle interazioni.",
            paragraphs: [
              "Mi sono occupato di parti della navigazione interattiva, dei dropdown dinamici e della logica JavaScript, contribuendo anche alla resa responsive.",
            ],
          },
          {
            type: "text",
            label: "03 / IL METODO",
            title: "Collaborare significa costruire insieme.",
            paragraphs: [
              "Il progetto ha richiesto coordinamento tra i membri del team e l'utilizzo di un workflow Git condiviso.",
            ],
          },
          {
            type: "text",
            label: "04 / IL RISULTATO",
            title: "Un'esperienza di sviluppo condivisa.",
            paragraphs: [
              "La Build Week mi ha permesso di mettere in pratica competenze tecniche e collaborazione all'interno di un progetto comune.",
            ],
          },
        ],
      },

      en: {
        number: "World 04",
        title: "Building together.",
        version: "EPICODE · Team Project",
        category: "Front-End Development · Teamwork",
        description:
          "Recreating a complex interface as part of a development team, combining technical skills, collaboration and a shared Git workflow.",
        button: "Explore the world →",
        subtitle: "A project where code meets collaboration.",
        industry: "Education and web development",
        role: "Front-End Development · Teamwork",
        sections: [
          {
            type: "text",
            label: "01 / THE CHALLENGE",
            title: "Recreating a complex interface as a team.",
            paragraphs: [
              "During an EPICODE Build Week, our team worked on recreating an interface inspired by Airbnb.",
            ],
          },
          {
            type: "text",
            label: "02 / MY CONTRIBUTION",
            title: "From navigation to interactions.",
            paragraphs: [
              "I worked on parts of the interactive navigation, dynamic dropdowns and JavaScript logic, while also contributing to responsive behaviour.",
            ],
          },
          {
            type: "text",
            label: "03 / THE METHOD",
            title: "Collaboration means building together.",
            paragraphs: [
              "The project required coordination between team members and a shared Git workflow.",
            ],
          },
          {
            type: "text",
            label: "04 / THE RESULT",
            title: "A shared development experience.",
            paragraphs: [
              "The Build Week helped me put technical and collaborative skills into practice within a shared project.",
            ],
          },
        ],
      },
    },
  },
];
