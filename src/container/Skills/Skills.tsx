import { motion } from "framer-motion";
// import { Tooltip } from "react-tooltip";

import { useTranslation } from "react-i18next";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.css";

const mockSkills = [
  // Front-end
  { name: "React", bgColor: "#E0F7FA", color: "#039BE5", icon: images.react },
  {
    name: "JavaScript",
    bgColor: "#FFF9C4",
    color: "#FBC02D",
    icon: images.javascript,
  },
  { name: "HTML", bgColor: "#FFF8E1", color: "#F57C00", icon: images.html },
  { name: "CSS", bgColor: "#FCE4EC", color: "#D81B60", icon: images.css },
  { name: "Sass", bgColor: "#FCE4EC", color: "#EC407A", icon: images.sass },
  {
    name: "TypeScript",
    bgColor: "#E3F2FD",
    color: "#1976D2",
    icon: images.typescript,
  },
  { name: "Figma", bgColor: "#F3E5F5", color: "#8E24AA", icon: images.figma },
  { name: "MUI", bgColor: "#E3F2FD", color: "#1565C0", icon: images.mu5 },
  {
    name: "Flutter",
    bgColor: "#E3F2FD",
    color: "#0288D1",
    icon: images.flutter,
  },
  { name: "Mobile", bgColor: "#E0F2F1", color: "#00695C", icon: images.mobile },

  // Backend
  { name: "Node.js", bgColor: "#E8F5E9", color: "#2E7D32", icon: images.node },
  {
    name: "GraphQL",
    bgColor: "#FCE4EC",
    color: "#E10098",
    icon: images.graphql,
  },
  { name: "API", bgColor: "#E0F7FA", color: "#00796B", icon: images.api },
  { name: "C++", bgColor: "#E1F5FE", color: "#0277BD", icon: images.cpp },
  { name: "Python", bgColor: "#E1F5FE", color: "#1E88E5", icon: images.python },
  { name: "Git", bgColor: "#EFEBE9", color: "#6D4C41", icon: images.git },
  { name: "Email", bgColor: "#FFF3E0", color: "#EF6C00", icon: images.email },
  { name: "Redux", bgColor: "#F3E5F5", color: "#7B1FA2", icon: images.redux },
];

type Work = { name: string; company: string; desc: string };

type ExperienceType = {
  works: Work[];
  year: number;
};

const Skills = () => {
  const { t } = useTranslation();
  /*
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState<
    [{ name: string; bgColor: string; color: string; icon: string }]
  >([{ name: "string", bgColor: "string", color: "string", icon: "" }]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  */

  const mockExperiences = [
    {
      year: 2023,
      works: t("experiences.2023", { returnObjects: true }) as Array<Work>,
    },
    {
      year: 2022,
      works: t("experiences.2022", { returnObjects: true }) as Array<Work>,
    },
    {
      year: 2021,
      works: t("experiences.2021", { returnObjects: true }) as Array<Work>,
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {mockSkills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    // src={urlFor(skill.icon).url()}
                    alt={skill.name}
                  />
                )}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {mockExperiences.map((experience: ExperienceType) => {
            return (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                {/*
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        // effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
                */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "");
