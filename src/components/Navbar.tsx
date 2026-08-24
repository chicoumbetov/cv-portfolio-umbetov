import { motion } from "framer-motion";
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

export const sections = [
  "home",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

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
    { label: "EN", value: Language.EN },
    { label: "FR", value: Language.FR },
    /*
    { label: t("kazakh"), value: Language.KZ },
    { label: t("russian"), value: Language.RU },
    */
  ];

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    const navHeight = nav?.offsetHeight || 0;

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
      document.querySelector(".navbar-collapse")?.classList.remove("show");
      setMenuOpen(false);
    };

    scrollLinks.forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      scrollLinks.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, [setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? "bg-gray-950/80 border-gray-800"
          : "bg-white/80 border-gray-200"
      } backdrop-blur-md border-b shadow-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Social Links for Recruiter Quick-Access */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/chicoumbetov?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`p-2 rounded-full transition-transform hover:scale-110 ${
                darkMode
                  ? "bg-gray-900 text-white border border-gray-700"
                  : "bg-gray-100 text-black border border-gray-300"
              }`}
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/umbetov-sh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`p-2 rounded-full transition-transform hover:scale-110 ${
                darkMode
                  ? "bg-gray-900 text-white border border-gray-700"
                  : "bg-gray-100 text-black border border-gray-300"
              }`}
            >
              <FaLinkedin size={16} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((item, i) => (
              <a
                key={`link-${i}`}
                href={`#${item}`}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {t(`nav.${item}`, item)}
              </a>
            ))}
          </div>

          {/* Controls: Language & Theme Switcher */}
          <div className="flex items-center space-x-4">
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select Language"
              className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                darkMode
                  ? "bg-gray-900 text-white border-gray-700 focus:border-indigo-500"
                  : "bg-gray-50 text-gray-900 border-gray-300 focus:border-indigo-600"
              }`}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
              className={`p-2 rounded-full transition-transform hover:scale-110 ${
                darkMode ? "text-amber-400 bg-gray-900" : "text-slate-800 bg-gray-100"
              }`}
            >
              {darkMode ? <BsFillMoonStarsFill size={16} /> : <TiAdjustBrightness size={18} />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`md:hidden p-2 rounded-lg focus:outline-none ${
                darkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Mobile Menu"
            >
              <div className="w-6 flex flex-col space-y-1.5">
                <span
                  className={`h-0.5 w-full transition-transform ${
                    darkMode ? "bg-white" : "bg-black"
                  } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`h-0.5 w-full transition-opacity ${
                    darkMode ? "bg-white" : "bg-black"
                  } ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-0.5 w-full transition-transform ${
                    darkMode ? "bg-white" : "bg-black"
                  } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden py-4 border-t ${
              darkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <ul className="flex flex-col space-y-3 px-2">
              {sections.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-900 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {t(`nav.${item}`, item)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
