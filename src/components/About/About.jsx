import { useLanguage } from "../../context/useLanguage";

function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">{t.about.label}</span>

        <div className="about__content">
          <div className="about__left">
            <h2>
              {t.about.titleLine1}

              <br />

              {t.about.titleLine2}

              <br />

              {t.about.titleLine3}

              <br />
              <br />

              {t.about.titleLine4}

              <br />

              {t.about.titleLine5}
            </h2>
          </div>

          <div className="about__right">
            <p>{t.about.paragraph1}</p>

            <p>{t.about.paragraph2}</p>

            <p>{t.about.paragraph3}</p>

            <p>{t.about.paragraph4}</p>

            <span className="about__signature">{t.about.signature}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
