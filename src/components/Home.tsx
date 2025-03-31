import { Dispatch, SetStateAction } from "react";
import { ReactTyped } from "react-typed";

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
          <h6 className="intro-title mb-1">Shynggys UMBETOV</h6>

          <div className={darkMode ? "dark" : "white"}>
            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
              {/*
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        */}
            </main>
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
              href="#work"
              role="button"
            >
              <span>Check portfolio</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
