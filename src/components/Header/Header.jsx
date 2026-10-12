import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage";

const navItems = [
  {
    key: "about",
    href: "#about",
  },
  {
    key: "evolution",
    href: "#evolution",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "journey",
    href: "#journey",
  },
  {
    key: "contact",
    href: "#contact",
  },
];

function Header() {
  const [activeHref, setActiveHref] = useState("#about");
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  const navWrapperRef = useRef(null);
  const polarisRef = useRef(null);
  const linksRef = useRef({});

  /* ========================================
     POLARIS
  ======================================== */

  const movePolaris = useCallback((link) => {
    const polaris = polarisRef.current;
    const navWrapper = navWrapperRef.current;

    if (!link || !polaris || !navWrapper) {
      return;
    }

    const wrapperRect = navWrapper.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const centerX = linkRect.left - wrapperRect.left + linkRect.width / 2;

    polaris.style.left = `${centerX}px`;
    polaris.style.opacity = "1";
  }, []);

  const movePolarisToActive = useCallback(() => {
    if (!isHomePage) {
      if (polarisRef.current) {
        polarisRef.current.style.opacity = "0";
      }
      return;
    }

    const activeLink = linksRef.current[activeHref];

    if (!activeLink) {
      return;
    }

    movePolaris(activeLink);
  }, [activeHref, isHomePage, movePolaris]);

  useLayoutEffect(() => {
    movePolarisToActive();
  }, [movePolarisToActive, language]);

  /* ========================================
     ACTIVE SECTION OBSERVER
  ======================================== */

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const observedSections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (observedSections.length === 0) {
      return;
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setActiveHref(`#${entry.target.id}`);
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    observedSections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [isHomePage]);

  /* ========================================
     RESIZE
  ======================================== */

  useEffect(() => {
    const handleResize = () => {
      movePolarisToActive();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [movePolarisToActive]);

  /* ========================================
     NAVIGATION
  ======================================== */

  const handleMouseEnter = (href) => {
    if (!isHomePage) {
      return;
    }

    const link = linksRef.current[href];

    if (!link) {
      return;
    }

    movePolaris(link);
  };

  const handleMouseLeave = () => {
    movePolarisToActive();
  };

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  /* ========================================
     LANGUAGE
  ======================================== */

  const changeLanguage = (newLanguage) => {
    if (newLanguage === language) {
      return;
    }

    setLanguage(newLanguage);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        movePolarisToActive();
      });
    });
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <header className="header">
      <div className="container">
        <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
          {/* LOGO */}

          <Link
            to="/"
            className="logo"
            aria-label="Antonio Puca — Home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo__accent">&lt;</span>
            Antonio Puca
            <span className="logo__accent">/&gt;</span>
          </Link>

          {/* MOBILE MENU BUTTON */}

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="universe-nav"
            onClick={toggleMenu}
          >
            <span className="menu-symbol menu-symbol--one"></span>
            <span className="menu-symbol menu-symbol--two"></span>
            <span className="menu-symbol menu-symbol--three"></span>
          </button>

          {/* NAVIGATION */}

          <div
            className="nav-wrapper"
            ref={navWrapperRef}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="polaris"
              ref={polarisRef}
              aria-hidden="true"
            ></span>

            <ul className="nav" id="universe-nav">
              {navItems.map((item) => {
                const destination = isHomePage ? item.href : `/${item.href}`;

                return (
                  <li key={item.href}>
                    <a
                      href={destination}
                      ref={(element) => {
                        if (element) {
                          linksRef.current[item.href] = element;
                        }
                      }}
                      className={`nav-link ${
                        isHomePage && activeHref === item.href ? "active" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.href)}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {t.header[item.key]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* LANGUAGE SWITCHER */}

          <div
            className={`language-switcher ${
              language === "it"
                ? "language-switcher--it"
                : "language-switcher--en"
            }`}
            role="group"
            aria-label="Language selector"
          >
            <span
              className="language-switcher__indicator"
              aria-hidden="true"
            ></span>

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              aria-label="English"
              aria-pressed={language === "en"}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>

            <button
              type="button"
              className={language === "it" ? "active" : ""}
              aria-label="Italiano"
              aria-pressed={language === "it"}
              onClick={() => changeLanguage("it")}
            >
              IT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
