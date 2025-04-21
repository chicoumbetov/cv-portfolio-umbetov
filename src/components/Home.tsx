import { Dispatch, SetStateAction } from "react";
import { ReactTyped } from "react-typed";

import CV_en from "../assets/CV_Umbetov_eng.pdf";
import CV_fr from "../assets/CV_Umbetov_fr.pdf";

import { useTranslation } from "react-i18next";
import "./css/Home.style.css";
import "./stars.css";

type HomeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Home = ({ darkMode }: HomeProps) => {
  const { t } = useTranslation();
  return (
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <h6 className="intro-title mb-1">{t("welcome")}</h6>
          <h6 className="intro-title mb-10">Shynggys UMBETOV</h6>

          <div className={darkMode ? "dark" : "white"}>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"></main>
          </div>

          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <ReactTyped
                strings={[
                  "Current portfolio - website developed using React JS",
                  "I am React Native Mobile Developer",
                  "React JS (MERN stack)",
                  "Click on views projects",
                  "Download CV below",
                ]}
                typeSpeed={30}
                backDelay={1100}
                backSpeed={20}
                loop
              />
            </strong>
          </p>
          <p className="pt-3">
            <a
              className={`px-4 py-2 primary_btn text-black`}
              href="#projects"
              role="button"
            >
              <span>{t("home-page.view-projects")}</span>
            </a>
          </p>

          <div>
            <a
              className={`px-4 py-2 primary_btn text-black`}
              href={CV_fr}
              target="blank"
            >
              <span>{t("home-page.download-cv-fr")}</span>
            </a>
            <div className="pt-3">
              <a
                className={`px-4 py-2 primary_btn text-black`}
                href={CV_en}
                target="blank"
              >
                <span>{t("home-page.download-cv-eng")}</span>
              </a>
            </div>
          </div>

          <p className="pt-3">
            <a
              className={`px-4 py-2 primary_btn text-black`}
              href="#contact"
              role="button"
            >
              <span>{t("home-page.contact-me")}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
