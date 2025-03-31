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
                  Software Engineer at ABC Corp (2020 - Present)
                </h4>
                <p>
                  Developed and maintained microservices for cloud-based
                  applications.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                <p>
                  Assisted in building front-end components and integration REST
                  APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
