import { useLanguage } from "../context/useLanguage";

function MissionLogPage() {
  const { t } = useLanguage();

  const sections = Object.entries(t.missionLog.sections);

  return (
    <>
      <header className="mission-header">
        <div className="container">
          <a href="/#adhd-daily" className="mission-header__back">
            {t.missionLog.back}
          </a>
        </div>
      </header>

      <main>
        <section className="mission-log">
          <div className="container">
            <span className="section-label">{t.missionLog.label}</span>

            <div className="mission-log__hero">
              <span className="mission-log__status">{t.missionLog.status}</span>

              <h1 className="mission-log__title">{t.missionLog.title}</h1>

              <p className="mission-log__lead">{t.missionLog.lead}</p>
            </div>

            {sections.map(([number, section]) => (
              <section className="mission-log__section" key={number}>
                <span className="mission-log__number">
                  {number.padStart(2, "0")}
                </span>

                <div>
                  <h2>{section.title}</h2>

                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {section.progress && (
                    <ul className="mission-log__progress">
                      {section.progress.map(([label, status]) => (
                        <li key={label}>
                          <span>{label}</span>

                          <strong>{status}</strong>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default MissionLogPage;
