import { RevealOnScroll } from "./RevealOnScroll";

type LanguagesProps = {
  darkMode: boolean;
};

export const Languages = ({ darkMode }: LanguagesProps) => {
  console.log("darkMode :", darkMode);

  return (
    <section
      id="languages"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div id="languages" className="gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Languages </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> French </strong> - C1
                </li>
                <li>
                  <strong> English </strong> - C1
                </li>
                <li>
                  <strong> Kazakh </strong> - C1
                </li>
                <li>
                  <strong> Russian </strong> - C1
                </li>
                <li>
                  <strong> Spanish </strong> - A2
                </li>
                <li>
                  <strong> German </strong> - A1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
