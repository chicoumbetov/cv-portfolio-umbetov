import { useState } from "react";
import "./App.css";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import Home from "./components/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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
        />
        <MobileMenu
          darkMode={darkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
        <Skills />
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default App;
