import { categories } from "../assets/mockData/data";
import CategoryItem from "./CategoryItem";
import "./css/portfolio.css";

type ProjectsProps = {
  darkMode: boolean;
};

const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <div>
      <div className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`box-shadow-full ${darkMode ? "white" : "black}"}`}
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
                              <h5 className="text-4xl font-bold uppercase">
                                Portfolio
                              </h5>
                              <p className="subtitle-a">
                                Portfolio itself is done by React JS,
                                Typescript, SASS, Bootstrap You can click and
                                check deployed project, github code, deployed
                                backend.
                              </p>
                              <p>
                                Click on image to view more screenshots or just
                                click on project link to go directly to see
                                project
                              </p>
                              <div className="line-mf"></div>
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
