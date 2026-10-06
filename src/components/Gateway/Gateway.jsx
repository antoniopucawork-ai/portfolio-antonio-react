import { useLanguage } from "../../context/useLanguage";

function Gateway() {
  const { t } = useLanguage();

  return (
    <section className="gateway">
      <div className="container">
        <span className="timeline__star"></span>

        <p className="gateway__lead">{t.gateway.lead}</p>
        <h2 className="gateway__title">
          {t.gateway.titleLine1}
          <br /> {t.gateway.titleLine2}
        </h2>

        <span className="gateway__scroll">{t.gateway.scroll}</span>
      </div>
    </section>
  );
}

export default Gateway;
