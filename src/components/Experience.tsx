import { RevealOnScroll } from "./RevealOnScroll";

type ExperienceProps = {
  darkMode: boolean;
};

export const Experience = ({ darkMode }: ExperienceProps) => {
  console.log(darkMode);
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div
            id="experience"
            className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
          >
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Trace Software International (Group Trace) (2023 - Present)
                </h4>
                <h5 className="font-bold">Developer</h5>
                <div className="space-y-1 text-gray-200">
                  <p>
                    Application for designing electrical and photovoltaic
                    installations, the energy sizing of our buildings and the
                    optimisation of an installation’s carbon footprint
                  </p>
                  <p>
                    Created from scratch electrical schema builder applications.
                  </p>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                  <p>Realised integration of Graph QL APIs</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">
                  BIM&CO (Group Trace) (2022-2023)
                </h4>
                <h5>Developer</h5>
                <p>Integration REST APIs</p>
                <p>
                  Data Management in Construction domain as Autodesk/Excel
                  Plugin
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  Global Climate Initiatives (2022)
                </h4>
                <h5>Developer</h5>
                <p>Integration REST APIs</p>
                <p>Carbon emission calculation and reduction</p>
              </div>

              <div>
                <h4 className="font-semibold">Web Première (2021 - 2022)</h4>
                <h5>Developer</h5>
                <p>Development from scratch of 3 applications</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
