import { useLanguage } from "../../context/useLanguage";

function Horizon() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="horizon">
      <div className="container">
        <div className="horizon__stars" aria-hidden="true"></div>

        <div className="horizon__content">
          <span className="horizon__eyebrow">{t.horizon.eyebrow}</span>
          <h2 className="horizon__title">
            {t.horizon.titleLine1}
            <br /> {t.horizon.titleLine2}
          </h2>

          <p className="horizon__text">
            {t.horizon.textLine1}
            <br /> {t.horizon.textLine2}
          </p>
          <p className="horizon__closing">{t.horizon.closing}</p>

          <span className="horizon__signature">{t.horizon.signature}</span>
        </div>
      </div>
    </section>
  );
}

export default Horizon;
