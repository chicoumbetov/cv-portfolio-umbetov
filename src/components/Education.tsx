import { AppWrap, MotionWrap } from "../wrapper";
import { Languages } from "./Languages";
import { RevealOnScroll } from "./RevealOnScroll";

type EducationProps = {
  darkMode: boolean;
};

const Education = ({ darkMode }: EducationProps) => {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div id="education" className="gap-4 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Master Bac +5 in Science and Technologies </strong> -
                  University of Poitiers (2019)
                </li>
                <h6>Research at Orano using Python, R, Excell</h6>
              </ul>
            </div>
            <Languages darkMode={darkMode} />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default AppWrap(MotionWrap(Education, ""), "education", "");
