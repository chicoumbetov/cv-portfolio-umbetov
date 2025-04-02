import { RevealOnScroll } from "./RevealOnScroll";

type EducationProps = {
  darkMode: boolean;
};

export const Education = ({ darkMode }: EducationProps) => {
  console.log(darkMode);
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div id="education" className=" gap-4 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Master Bac +5 in Science and Technologies </strong> -
                  University of Poitiers (2019)
                </li>
                <li>Python, R, Research at Orano</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
