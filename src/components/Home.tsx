import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowRight, HiDownload } from "react-icons/hi";
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
  const { t } = useTranslation();

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center route bg-image background pt-20">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          Senior Full-Stack & AI Engineer
        </div>

        <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Shynggys Umbetov
        </h1>

        <div className="text-lg sm:text-xl font-medium text-indigo-400 mb-8 h-12 flex items-center justify-center">
          <ReactTyped
            strings={[
              "Building scalable Full-Stack & AI architectures",
              "React.js, Next.js, TypeScript & NestJS Expert",
              "Agentic Workflows, RAG & LLM Orchestration",
              "React Native Mobile App Specialist",
            ]}
            typeSpeed={40}
            backDelay={1500}
            backSpeed={30}
            loop
          />
        </div>

        {/* High-conversion action buttons for recruiters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>{t("home-page.view-projects", "View Projects")}</span>
            <HiArrowRight size={16} />
          </a>
          <a
            href={CV_en}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-105 ${
              darkMode
                ? "bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800"
                : "bg-white/80 border-gray-300 text-gray-900 hover:bg-gray-50"
            }`}
          >
            <HiDownload size={16} className="text-indigo-500" />
            <span>{t("home-page.download-cv-eng", "Resume EN")}</span>
          </a>
          <a
            href={CV_fr}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-105 ${
              darkMode
                ? "bg-gray-900/80 border-gray-700 text-white hover:bg-gray-800"
                : "bg-white/80 border-gray-300 text-gray-900 hover:bg-gray-50"
            }`}
          >
            <HiDownload size={16} className="text-indigo-500" />
            <span>{t("home-page.download-cv-fr", "CV FR")}</span>
          </a>
        </div>

        <div>
          <a
            href="#contact"
            className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-indigo-400 transition-colors"
          >
            {t("home-page.contact-me", "Let's Talk")} ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
