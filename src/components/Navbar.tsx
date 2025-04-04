import { Dispatch, SetStateAction, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";
import Language from "../i18n/languages";
import "./css/navbar.css";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;

  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;

  language: Language;
  handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  darkMode,
  setDarkMode,
  language,
  handleLanguageChange,
}: NavbarProps) => {
  const { t } = useTranslation();

  const languageOptions = [
    { label: t("english"), value: Language.EN },
    { label: t("french"), value: Language.FR },
    /*
    { label: t("kazakh"), value: Language.KZ },
    { label: t("russian"), value: Language.RU },
    */
  ];

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    const navHeight = nav?.offsetHeight || 0;

    // Navbar toggle button click event
    const toggleButton = document.querySelector(".navbar-toggler");
    const mainNav = document.getElementById("mainNav");

    const handleToggleClick = () => {
      if (mainNav && !mainNav.classList.contains("navbar-reduce")) {
        mainNav.classList.add("navbar-reduce");
      }
    };

    toggleButton?.addEventListener("click", handleToggleClick);

    // Scroll event listener for navbar state change
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-expand-md");
      if (!navbar) return;

      if (window.scrollY > 50) {
        navbar.classList.add("navbar-reduce");
        navbar.classList.remove("navbar-trans");
      } else {
        navbar.classList.add("navbar-trans");
        navbar.classList.remove("navbar-reduce");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a.js-scroll[href^="#"]');
    const handleSmoothScroll = (event: Event) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navHeight + 5,
          behavior: "smooth",
        });
      }

      // Close navbar after clicking a link (for mobile views)
      document.querySelector(".navbar-collapse")?.classList.remove("show");
    };

    scrollLinks.forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      toggleButton?.removeEventListener("click", handleToggleClick);
      scrollLinks.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-${
        darkMode ? "#0a0a0acc" : "white"
      } backdrop-blur-lg border-b border-white/10 shadow-lg`}
    >
      <div className="max-w-5xl mx-auto px-0">
        <div className="flex justify-between mx-4 items-center h-12">
          {/*
          <a
            href="#home"
            className={`font-mono text-xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            umbetov<span className="text-blue-500">.tech </span>
          </a>
          */}

          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://github.com/chicoumbetov?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ico-circle border-1 ${
                    darkMode
                      ? "text-white bg-black border-white"
                      : "text-black bg-white border-black"
                  }`}
                >
                  <FaGithub
                    className={`${
                      darkMode ? "text-white bg-black" : "text-black bg-white"
                    }`}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/shynggys-u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ico-circle border-1 ${
                    darkMode
                      ? "text-white bg-black border-white"
                      : "text-black bg-white border-black"
                  }`}
                >
                  <FaLinkedin
                    className={` ${
                      darkMode ? "text-white bg-black" : "text-black bg-white"
                    }`}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/*
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "50px", borderRadius: "10px" }}
            />
          </a>
          */}
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="flex">
            {darkMode ? (
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className={`cursor-pointer text-2xl`}
                fill={"white"}
              />
            ) : (
              <TiAdjustBrightness
                onClick={() => setDarkMode(!darkMode)}
                className={`cursor-pointer text-3xl`}
                fill="black"
              />
            )}

            {/* Mobile Menu Icon*/}
            <button
              className={`mx-2 w-7 h-5 relative cursor-pointer z-40 md:hidden ${
                darkMode ? "white" : "black"
              } navbar-toggler ${menuOpen ? "" : "collapsed"}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className={darkMode ? "bg-white" : "bg-black"}></span>
              <span className={darkMode ? "bg-white" : "bg-black"}></span>
              <span className={darkMode ? "bg-white" : "bg-black"}></span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop */}
            <a
              href="#home"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors active`}
            >
              {t("home")}
            </a>
            <a
              href="#skills"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll active`}
            >
              {t("skills")}
            </a>
            <a
              href="#experience"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              {t("experience")}
            </a>
            <a
              href="#projects"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              {t("projects")}
            </a>
            <a
              href="#education"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              {t("education")}
            </a>
            {/*
            <a
              href="#certificats"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              {t("certificats")}
            </a>
            */}
            <a
              href="#contact"
              className={`px-0 py-2 uppercase ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
