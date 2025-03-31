import { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  darkMode: boolean;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({
  darkMode,
  menuOpen,
  setMenuOpen,
}: NavbarProps) => {
  return (
    <div
      className={`fixed top-12 right-0 w-full ${
        darkMode ? "bg-black" : "bg-white"
      } z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-1/2 opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 ${
          darkMode ? "text-black" : "text-white"
        } text-3xl focus:outline-none cursor-pointer`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Skills
      </a>
      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Experience
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
      <a
        href="#education"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Education
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        } my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact
      </a>
    </div>
  );
};
