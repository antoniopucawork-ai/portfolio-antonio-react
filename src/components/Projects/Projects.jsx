import { projects } from "../../data/projects";

import NextMission from "../NextMission/NextMission";

import { useLanguage } from "../../context/useLanguage";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">{t.projects.label}</span>

          <h2>{t.projects.title}</h2>

          <p className="projects__lead">{t.projects.lead}</p>
        </div>

        <div className="projects__worlds">
          {projects.map((project) => {
            const content = t.projects.items[project.id];

            return (
              <article
                className={`world-card ${project.modifier}`}
                key={project.id}
              >
                <div className="world-card__media">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="world-card__image"
                  />
                </div>

                <div className="world-card__content">
                  <span className="world-card__number">{content.number}</span>

                  <h3 className="world-card__title">{content.title}</h3>

                  <span className="world-card__version">{content.version}</span>

                  <p className="world-card__category">{content.category}</p>

                  <p className="world-card__description">
                    {content.description}
                  </p>

                  <div className="world-card__tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="world-card__actions">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="world-card__button"
                    >
                      {content.button}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <NextMission />
      </div>
    </section>
  );
}

export default Projects;
