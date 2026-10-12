import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";

import "./WorldPage.css";

function WorldPage() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const project = projects.find((item) => item.slug === slug);

  const labels = {
    it: {
      back: "← Torna ai mondi",
      visit: "Visita il progetto ↗",
      industry: "Settore",
      role: "Il mio ruolo",
      technologies: "Tecnologie",
      notFound: "Mondo non trovato",
    },
    en: {
      back: "← Back to worlds",
      visit: "Visit the project ↗",
      industry: "Industry",
      role: "My role",
      technologies: "Technologies",
      notFound: "World not found",
    },
  };

  const ui = labels[language] ?? labels.en;

  if (!project) {
    return (
      <main className="world-page">
        <div className="container">
          <h1>{ui.notFound}</h1>

          <Link to="/#projects" className="world-page__back">
            {ui.back}
          </Link>
        </div>
      </main>
    );
  }

  const content = project.content?.[language];

  if (!content) {
    return null;
  }

  return (
    <main className="world-page">
      <div className="container">
        {/* TORNA AI MONDI */}

        <Link to="/#projects" className="world-page__back">
          {ui.back}
        </Link>

        {/* INTRODUZIONE */}

        <header className="world-page__hero">
          <span className="world-page__number">{content.number}</span>

          <h1 className="world-page__title">{content.title}</h1>

          <p className="world-page__subtitle">{content.subtitle}</p>

          <p className="world-page__description">{content.description}</p>
        </header>

        {/* INFORMAZIONI DEL PROGETTO */}

        <div className="world-page__details">
          <div>
            <span>{ui.industry}</span>
            <p>{content.industry}</p>
          </div>

          <div>
            <span>{ui.role}</span>
            <p>{content.role}</p>
          </div>

          <div>
            <span>{ui.technologies}</span>

            <p>{project.technologies.join(" · ")}</p>
          </div>
        </div>

        {/* ANTEPRIMA DEL PROGETTO */}

        <div className="world-page__preview">
          <img
            src={project.image}
            alt={project.alt}
            className="world-page__image"
          />
        </div>

        {/* RACCONTO DEL PROGETTO */}

        <div className="world-page__story">
          {content.sections.map((section, index) => (
            <section
              className="world-page__section"
              key={`${project.slug}-${index}`}
            >
              <span className="world-page__section-label">{section.label}</span>

              <h2 className="world-page__section-title">{section.title}</h2>

              <div className="world-page__section-content">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* LINK AL PROGETTO */}

        <div className="world-page__footer">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="world-page__visit"
          >
            {ui.visit}
          </a>
        </div>
      </div>
    </main>
  );
}

export default WorldPage;
