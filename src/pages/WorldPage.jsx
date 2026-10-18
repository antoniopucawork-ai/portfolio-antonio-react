import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";

import "./WorldPage.css";

// ========================================
// CONFIGURAZIONE SEO
// ========================================

const SITE_URL = "https://antonio-puca-portfolio.netlify.app";

const HOME_SEO = {
  title: "Antonio Puca | Web Developer",
  description:
    "Sono Antonio Puca, web developer. Progetto e sviluppo siti web moderni, responsive e applicazioni React, con attenzione al design e all'esperienza utente.",
  ogDescription:
    "Sviluppo siti web e applicazioni React, unendo tecnologia, design ed esperienza utente. Scopri i miei progetti.",
};

// Aggiorna o crea un meta tag
function updateMeta(attribute, name, content) {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

// Aggiorna il canonical
function updateCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

// Applica i metadati SEO
function applySEO({ title, description, url, ogDescription }) {
  document.title = title;

  updateMeta("name", "description", description);

  updateMeta("property", "og:title", title);
  updateMeta("property", "og:description", ogDescription || description);
  updateMeta("property", "og:url", url);

  updateMeta("name", "twitter:title", title);
  updateMeta("name", "twitter:description", ogDescription || description);

  updateCanonical(url);
}

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

  // Recupera i contenuti nella lingua selezionata
  const content = project?.content?.[language] ?? project?.content?.it;

  // ========================================
  // SEO DINAMICA
  // ========================================

  useEffect(() => {
    if (!project || !content) {
      document.title = "Progetto non trovato | Antonio Puca";

      updateMeta("name", "robots", "noindex, follow");

      return () => {
        updateMeta("name", "robots", "index, follow");

        applySEO({
          title: HOME_SEO.title,
          description: HOME_SEO.description,
          ogDescription: HOME_SEO.ogDescription,
          url: `${SITE_URL}/`,
        });
      };
    }

    const pageUrl = `${SITE_URL}/world/${project.slug}`;

    applySEO({
      title: `${content.title} | Antonio Puca`,
      description: content.description,
      ogDescription: content.description,
      url: pageUrl,
    });

    updateMeta("name", "robots", "index, follow");

    // Ripristina i metadati della homepage
    // quando si esce dalla pagina del progetto.
    return () => {
      applySEO({
        title: HOME_SEO.title,
        description: HOME_SEO.description,
        ogDescription: HOME_SEO.ogDescription,
        url: `${SITE_URL}/`,
      });
    };
  }, [project, content]);

  // ========================================
  // MONDO NON TROVATO
  // ========================================

  if (!project || !content) {
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
