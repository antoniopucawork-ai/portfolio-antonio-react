import { useEffect, useRef } from "react";

import { evolutionItems } from "../../data/evolution";
import { useLanguage } from "../../context/useLanguage";

function ProjectPreview({ item, content, viewProject }) {
  const previewClasses = [
    "timeline__preview",
    item.featured ? "timeline__preview--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={previewClasses}>
      <img src={item.image} alt={item.alt} className="timeline__image" />

      <div className="timeline__overlay">
        <span className="timeline__project">{content.project}</span>

        <span className="timeline__project-phase">{content.phase}</span>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="timeline__button"
        >
          {viewProject}
        </a>
      </div>
    </div>
  );
}

function TimelineText({ content }) {
  return (
    <>
      <span className="timeline__phase">{content.phase}</span>

      <h3>{content.title}</h3>

      <p>{content.description}</p>
    </>
  );
}

function Evolution() {
  const timelineRef = useRef(null);

  const { t } = useLanguage();

  useEffect(() => {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    const items = timeline.querySelectorAll(".timeline__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.3,
      },
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="evolution" id="evolution">
      <div className="container">
        <span className="section-label">{t.evolution.label}</span>

        <div className="evolution__hero">
          <span className="evolution__eyebrow">{t.evolution.eyebrow}</span>

          <h2 className="evolution__title">{t.evolution.title}</h2>

          <p className="evolution__lead">{t.evolution.lead}</p>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline__line"></div>

          <div className="timeline__items">
            {evolutionItems.map((item) => {
              const content = t.evolution.items[item.id];

              return (
                <article className="timeline__item" key={item.id}>
                  <div className="timeline__left">
                    {item.imageSide === "left" ? (
                      <ProjectPreview
                        item={item}
                        content={content}
                        viewProject={t.evolution.viewProject}
                      />
                    ) : (
                      <TimelineText content={content} />
                    )}
                  </div>

                  <div className="timeline__center">
                    <span className="timeline__star"></span>
                  </div>

                  <div
                    className={
                      item.imageSide === "right"
                        ? "timeline__right timeline__right--offset"
                        : "timeline__right"
                    }
                  >
                    {item.imageSide === "right" ? (
                      <ProjectPreview
                        item={item}
                        content={content}
                        viewProject={t.evolution.viewProject}
                      />
                    ) : (
                      <TimelineText content={content} />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Evolution;
