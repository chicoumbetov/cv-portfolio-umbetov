import { useState } from "react";

import BackToTop from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Home from "./components/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Certificates from "./components/Certificates";
import i18nRoot, { i18nextLng } from "./i18n/config";
import { Language } from "./types";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [language, setLanguage] = useState<Language>(Language.EN);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.currentTarget.value as Language);
    i18nRoot.changeLanguage(event.currentTarget.value as Language);
    localStorage.setItem(i18nextLng, event.currentTarget.value);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
        <MobileMenu
          darkMode={darkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <BackToTop darkMode={darkMode} />
        <Certificates darkMode={darkMode} />
        <Contact />
      </div>
    </>
  );
}

export default App;
