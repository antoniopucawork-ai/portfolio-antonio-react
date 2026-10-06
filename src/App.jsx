import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Evolution from "./components/Evolution/Evolution";
import Gateway from "./components/Gateway/Gateway";
import Projects from "./components/Projects/Projects";
import Horizon from "./components/Horizon/Horizon";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import MissionLogPage from "./pages/MissionLogPage";

function ScrollController() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToElement);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Evolution />
        <Gateway />
        <Projects />
        <Horizon />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollController />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/mission-log" element={<MissionLogPage />} />
      </Routes>
    </>
  );
}

export default App;
