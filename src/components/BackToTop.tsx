import React, { useEffect } from "react";
import "./css/back-to-top.css";

type BackToTopProps = {
  darkMode: boolean;
};

const BackToTop = ({ darkMode }: BackToTopProps) => {
  const scrollHandler = () => {
    const button = document.querySelector(".back-to-top") as HTMLElement;
    if (!button) return;

    if (window.pageYOffset > 100) {
      button.style.display = "block";
      button.classList.remove("fadeOut");
      button.classList.add("fadeIn");
    } else {
      button.classList.remove("fadeIn");
      button.classList.add("fadeOut");
    }
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top animated rounded-full shadow-lg fixed bottom-5 right-5
        text-center justify-center align-center text-center content-center
        ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
      onClick={(e) => scrollToTop(e)}
    >
      <i
        className={`fa fa-chevron-up text-lg text-center justify-center align-center ${
          darkMode ? "text-black" : "text-white"
        }`}
      ></i>
    </a>
  );
};

export default BackToTop;
