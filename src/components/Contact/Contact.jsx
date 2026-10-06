import missionControlScene from "../../assets/images/mission-control-scene.webp";
import { useLanguage } from "../../context/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__hero">
          <span className="section-label">{t.contact.label}</span>

          <h2 className="contact__title">
            {t.contact.titleLine1}
            <br /> {t.contact.titleLine2}
          </h2>

          <p className="contact__lead">{t.contact.lead}</p>
        </div>

        <div className="contact__scene">
          <img
            src={missionControlScene}
            alt="Mission Control on a lunar surface"
            className="contact__scene-image"
          />
        </div>

        <div className="contact__coordinates">
          <div className="coordinate">
            <span className="coordinate__label">{t.contact.transmission}</span>

            <a href="mailto:antoniopuca.work@gmail.com">
              antoniopuca.work@gmail.com
            </a>
          </div>

          <div className="coordinate">
            <span className="coordinate__label">{t.contact.frequency}</span>

            <a
              href="https://wa.me/393337738818"
              target="_blank"
              rel="noopener noreferrer"
            >
              +39 333 773 8818
            </a>
          </div>

          <div className="coordinate">
            <span className="coordinate__label">{t.contact.publicSignal}</span>

            <a
              href="https://instagram.com/antonio.puca.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @antonio.puca.dev
            </a>
          </div>
        </div>

        <div className="contact__transmission">
          <span className="contact__line"></span>

          <p className="contact__ending">{t.contact.ending}</p>

          <span className="contact__goodbye">{t.contact.goodbye}</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
