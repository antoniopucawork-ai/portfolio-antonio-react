import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";

import "./WorldPage.css";

// ========================================
// TRADUZIONI INTERFACCIA
// ========================================

const labels = {
  it: {
    back: "← Torna ai mondi",
    visit: "Visita il mondo ↗",
    industry: "Settore",
    role: "Il mio ruolo",
    technologies: "Tecnologie",
    notFound: "Mondo non trovato",
  },

  en: {
    back: "← Back to worlds",
    visit: "Visit the world ↗",
    industry: "Industry",
    role: "My role",
    technologies: "Technologies",
    notFound: "World not found",
  },
};

// ========================================
// WORLD PAGE
// ========================================

function WorldPage() {
  const { slug } = useParams();
  const { language } = useLanguage();

  // Recupera il progetto attraverso lo slug
  const project = projects.find((item) => item.slug === slug);

  // Recupera le traduzioni dell'interfaccia
  const ui = labels[language] ?? labels.en;

  // ========================================
  // MONDO NON TROVATO
  // ========================================

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

  // Recupera i contenuti nella lingua selezionata
  const content = project.content?.[language];

  if (!content) {
    return null;
  }

  // ========================================
  // PAGINA DEL MONDO
  // ========================================

  return (
    <main
      className="world-page"
      style={{
        "--world-accent": project.accentColor ?? "#9dbab0",
      }}
    >
      <div className="container">
        {/* ========================================
            NAVIGAZIONE
        ======================================== */}

        <Link to="/#projects" className="world-page__back">
          {ui.back}
        </Link>

        {/* ========================================
            INTRODUZIONE
        ======================================== */}

        <header className="world-page__hero">
          <span className="world-page__number">{content.number}</span>

          <h1 className="world-page__title">{content.title}</h1>

          <p className="world-page__subtitle">{content.subtitle}</p>

          <p className="world-page__description">{content.description}</p>
        </header>

        {/* ========================================
            INFORMAZIONI DEL PROGETTO
        ======================================== */}

        <div className="world-page__details">
          <div className="world-page__detail">
            <span>{ui.industry}</span>
            <p>{content.industry}</p>
          </div>

          <div className="world-page__detail">
            <span>{ui.role}</span>
            <p>{content.role}</p>
          </div>

          <div className="world-page__detail">
            <span>{ui.technologies}</span>

            <p>{project.technologies.join(" · ")}</p>
          </div>
        </div>

        {/* ========================================
            RACCONTO DEL PROGETTO
        ======================================== */}

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

        {/* ========================================
            RISULTATO FINALE
        ======================================== */}

        <div className="world-page__result">
          {/* ANTEPRIMA DEL PROGETTO */}

          <div className="world-page__preview">
            <img
              src={project.image}
              alt={project.alt}
              className="world-page__image"
              loading="lazy"
            />
          </div>

          {/* LINK AL SITO */}

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
