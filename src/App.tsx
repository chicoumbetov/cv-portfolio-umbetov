import { useState } from "react";
import "./App.css";
import { About } from "./components/About";
import Home from "./components/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <MobileMenu
          darkMode={darkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
      </div>
    </>
  );
}

export default App;
