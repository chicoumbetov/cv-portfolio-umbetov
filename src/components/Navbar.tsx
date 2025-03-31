import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo2 from "../assets/img/3x4.jpg";
import logo1 from "../assets/img/LisbonWebSummit.jpg";
import "./css/navbar.css";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;

  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = ({
  menuOpen,
  setMenuOpen,
  darkMode,
  setDarkMode,
}: NavbarProps) => {
  const [logo, setLogo] = useState(logo1);

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
        setLogo(logo2);
      } else {
        navbar.classList.add("navbar-trans");
        navbar.classList.remove("navbar-reduce");
        setLogo(logo1);
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
          <a
            href="#home"
            className={`font-mono text-xl font-bold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            umbetov<span className="text-blue-500">.tech </span>
          </a>

          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={logo}
              alt="logo"
              style={{ maxWidth: "50px", borderRadius: "10px" }}
            />
          </a>

          <div className="flex">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className={` cursor-pointer text-2xl`}
              fill={darkMode ? "white" : "black"}
            />
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
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop */}
            <a
              href="#home"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors active`}
            >
              Home
            </a>
            <a
              href="#skills"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll active`}
            >
              Skills
            </a>
            <a
              href="#experience"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              Projects
            </a>
            <a
              href="#education"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              Education
            </a>
            {/*
            <a
              href="#certificats"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              Certificats
            </a>
            */}
            <a
              href="#contact"
              className={`px-0 py-2 ${
                darkMode ? "text-white" : "text-black"
              } transition-colors nav-link js-scroll`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
