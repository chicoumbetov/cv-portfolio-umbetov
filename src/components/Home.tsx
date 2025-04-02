import { Dispatch, SetStateAction } from "react";
import { ReactTyped } from "react-typed";

import CV_en from "../assets/CV_Umbetov_eng.pdf";
import CV_fr from "../assets/CV_Umbetov_fr.pdf";

import "./css/Home.style.css";
import "./stars.css";

type HomeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Home = ({ darkMode }: HomeProps) => {
  return (
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <h6 className="intro-title mb-1">Welcome to portfolio</h6>
          <h6 className="intro-title mb-10">Shynggys UMBETOV</h6>

          <div className={darkMode ? "dark" : "white"}>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40"></main>
          </div>

          <p className="intro-subtitle">
            <span className="text-slider-items"></span>
            <strong className="text-slider">
              <ReactTyped
                strings={[
                  "Website developed using React JS",
                  "I am React Native Mobile Developer",
                  "As well as React JS (MERN stack), AWS cloud microservices",
                  "Click on check portfolio ",
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
              <span>View projects</span>
            </a>
          </p>

          <p>
            <a
              className={`px-4 py-2 primary_btn text-black`}
              href={CV_fr}
              target="blank"
            >
              <span>Download CV in french</span>
            </a>
            <div className="pt-3">
              <a
                className={`px-4 py-2 primary_btn text-black`}
                href={CV_en}
                target="blank"
              >
                <span>Download CV in english</span>
              </a>
            </div>
          </p>

          <p className="pt-3">
            <a
              className={`px-4 py-2 primary_btn text-black`}
              href="#contact"
              role="button"
            >
              <span>Contact Me</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
