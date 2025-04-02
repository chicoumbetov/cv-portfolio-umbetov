import { categories } from "../assets/mockData/data";
import CategoryItem from "./CategoryItem";
import "./css/portfolio.css";

type ProjectsProps = {
  darkMode: boolean;
};

const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <div id="projects">
      <div className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`box-shadow-full ${
                  darkMode ? "bg-white" : "bg-black}"
                }`}
              >
                <div className="row">
                  <div className="col-md-6 col-md-12">
                    <section
                      id="projects"
                      className="portfolio-mf sect-pt4 route"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-md-12">
                            <div className="title-box text-center">
                              <h4
                                className={`text-4xl font-bold uppercase ${
                                  darkMode ? "text-black" : "text-white}"
                                }`}
                              >
                                Projects
                              </h4>
                              <p
                                className={`${
                                  darkMode ? "text-black" : "text-white}"
                                }`}
                              >
                                This portfolio is built with React.js,
                                TypeScript, SASS, and Bootstrap. You can explore
                                the deployed project, check the GitHub
                                repository, or view the backend.
                              </p>
                              <p
                                className={`line-mf ${
                                  darkMode ? "text-black" : "text-white}"
                                }`}
                              >
                                Click on an image to see more screenshots, or
                                use the project link to visit it directly.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!--PORTFOLIO IMAGE-->*/}

                      <div className="container">
                        <div className="row">{/*<!--/.PORTFOLIO -->*/}</div>
                        <div className="row all_projects_container">
                          {categories.map((item) => (
                            <CategoryItem item={item} key={item.id} />
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
