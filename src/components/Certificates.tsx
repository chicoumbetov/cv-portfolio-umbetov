import "./css/Home.style.css";

import Certif1 from "../assets/certificatesPdf/1.Front-end Web Development-coursera_certificateReactJS.pdf";
import Certif10 from "../assets/certificatesPdf/10.Introduction to Front-end Development with ReactJS-coursera_certificate.pdf";
import Certif2 from "../assets/certificatesPdf/2.Découvrez les librairies Python pour la Data Science.pdf";
import Certif3 from "../assets/certificatesPdf/3.Linux_Certificate.pdf";
import Certif4 from "../assets/certificatesPdf/4.Think_like_a_computer_certificate.pdf";
import Certif5 from "../assets/certificatesPdf/5.Quick resumeCreator_with_JS-coursera_certificate.pdf";
import Certif6 from "../assets/certificatesPdf/6.Découvrez la programmation orientée objet avec Python-openclassrom.pdf";
import Certif7 from "../assets/certificatesPdf/7.CertificateCSSAnimatedComponentsReactJS.pdf";
import Certif8 from "../assets/certificatesPdf/8.I_Certificate_Coursera_ReactJS.pdf";
import Certif9 from "../assets/certificatesPdf/9.II_certificate_ReactJS_Coursera.pdf";

const Certificates = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="edu">
      <section id="certificats" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                className={`box-shadow-full border-1 ${
                  darkMode ? "bg-white" : "bg-black border-white"
                }`}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-box-2">
                      <h2
                        className={` title-left text-4xl font-bold uppercase ${
                          darkMode ? "text-black" : "text-white}"
                        }`}
                      >
                        CERTIFICATES TO DOWNLOAD
                      </h2>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif1}
                        target="blank"
                      >
                        <span>
                          Front-End Web Development ReactJS - Coursera
                        </span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif2}
                        target="blank"
                      >
                        <span>
                          Découvrez les librairies Python pour la Data Science
                        </span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif3}
                        target="blank"
                      >
                        <span>Linux Certificate</span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif4}
                        target="blank"
                      >
                        <span>Think like a computer certificate</span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif5}
                        target="blank"
                      >
                        <span>
                          Quick resumeCreator with JS coursera_certificate
                        </span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif6}
                        target="blank"
                      >
                        <span>
                          Découvrez la programmation orientée objet avec Python
                        </span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif7}
                        target="blank"
                      >
                        <span>CSS Animated Components ReactJS</span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif8}
                        target="blank"
                      >
                        <span>I_Certificate Coursera_ReactJS</span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif9}
                        target="blank"
                      >
                        <span>II_Certificate Coursera_ReactJS</span>
                      </a>
                    </div>

                    <div className="row mt-1">
                      <a
                        className="px-4 py-2 primary_btn text-black"
                        href={Certif10}
                        target="blank"
                      >
                        <span>
                          Introduction to Front-end Development with ReactJS
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
