import { Link } from "react-router-dom";

import { useLanguage } from "../../context/useLanguage";

function NextMission() {
  const { t } = useLanguage();

  return (
    <div className="next-mission" id="adhd-daily">
      <div className="next-mission__visual" aria-hidden="true">
        <div className="mission-orbit"></div>

        <div className="mission-spacecraft">
          <span className="mission-spacecraft__core"></span>

          <span className="mission-spacecraft__trail"></span>
        </div>

        <span className="mission-destination">ADHD Daily</span>
      </div>

      <div className="next-mission__content">
        <div className="next-mission__meta">
          <span className="next-mission__eyebrow">{t.nextMission.eyebrow}</span>

          <span className="next-mission__status">{t.nextMission.status}</span>
        </div>

        <h3 className="next-mission__title">{t.nextMission.title}</h3>

        <p className="next-mission__lead">{t.nextMission.lead}</p>

        <p className="next-mission__description">{t.nextMission.description}</p>

        <div className="next-mission__progress">
          <div className="next-mission__progress-item">
            <span>{t.nextMission.productDirection}</span>

            <span>{t.nextMission.productDirectionStatus}</span>
          </div>

          <div className="next-mission__progress-item">
            <span>{t.nextMission.reactApplication}</span>

            <span>{t.nextMission.reactApplicationStatus}</span>
          </div>

          <div className="next-mission__progress-item">
            <span>{t.nextMission.backend}</span>

            <span>{t.nextMission.backendStatus}</span>
          </div>
        </div>

        <Link to="/mission-log" className="next-mission__link">
          {t.nextMission.missionLog}
        </Link>
      </div>
    </div>
  );
}

export default NextMission;
