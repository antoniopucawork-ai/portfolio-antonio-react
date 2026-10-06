import { useEffect, useRef } from "react";

import antonioHero from "../../assets/images/antonio-hero.jpg";
import { useLanguage } from "../../context/useLanguage";

function Hero() {
  const heroRef = useRef(null);

  const { t } = useLanguage();

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const universeLinks = hero.querySelectorAll(".universe-link");

    let mouseX = 0;
    let mouseY = 0;

    let animationFrameId;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const updateUniverse = () => {
      universeLinks.forEach((link) => {
        const node = link.querySelector(".universe-node");

        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();

        const nodeX = rect.left + rect.width / 2;
        const nodeY = rect.top + rect.height / 2;

        const dx = mouseX - nodeX;
        const dy = mouseY - nodeY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 180;

        const intensity = Math.max(0, 1 - distance / radius);

        link.style.setProperty("--energy", intensity);
      });
    };

    const animateUniverse = () => {
      updateUniverse();

      animationFrameId = requestAnimationFrame(animateUniverse);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animateUniverse();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__eyebrow">{t.hero.eyebrow}</span>

            <h1 className="hero__title">
              {t.hero.titleLine1}

              <br />

              {t.hero.titleLine2}
            </h1>

            <p className="hero__description">
              {t.hero.descriptionLine1}

              <br />
              <br />

              {t.hero.descriptionLine2}
            </p>

            <div className="hero__actions">
              <a href="#evolution" className="universe-link">
                <span className="universe-node">
                  <span className="halo"></span>

                  <span className="core"></span>
                </span>

                <span className="energy"></span>

                <span className="label">{t.hero.explore}</span>
              </a>

              <a href="#contact" className="universe-link">
                <span className="universe-node">
                  <span className="halo"></span>

                  <span className="core"></span>
                </span>

                <span className="energy"></span>

                <span className="label">{t.hero.share}</span>
              </a>
            </div>
          </div>

          <div className="hero__image">
            <div className="hero__photo">
              <img src={antonioHero} alt="Antonio Puca" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
