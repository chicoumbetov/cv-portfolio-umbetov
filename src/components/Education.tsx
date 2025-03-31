import { RevealOnScroll } from "./RevealOnScroll";

export const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div
            id="education"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - XYZ University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
