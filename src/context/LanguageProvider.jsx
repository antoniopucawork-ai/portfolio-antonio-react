import { useEffect, useMemo, useSyncExternalStore } from "react";
import { translations } from "../data/translations";
import { LanguageContext } from "./languageContext";

const STORAGE_KEY = "portfolio-language";
const LANGUAGE_EVENT = "portfolio-language-change";

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "it";
  } catch {
    return "it";
  }
}

function getServerSnapshot() {
  return "it";
}

function subscribe(callback) {
  window.addEventListener(LANGUAGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function LanguageProvider({ children }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLanguage) => {
    if (newLanguage !== "it" && newLanguage !== "en") {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, newLanguage);
      window.dispatchEvent(new Event(LANGUAGE_EVENT));
    } catch (error) {
      console.warn("Impossibile salvare la lingua:", error);
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
