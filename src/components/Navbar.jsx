import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="bg-[#0B1120]/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}

          <div>

            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide leading-7">

              UnitCell <br className="sm:hidden" />

              <span className="text-cyan-400">
                Labs
              </span>

            </h1>

          </div>

          {/* ================= DESKTOP MENU ================= */}

          <nav className="hidden md:flex gap-8 text-lg font-medium">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400 transition duration-300"
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            className="md:hidden text-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {
              menuOpen
                ? <X size={32} />
                : <Menu size={32} />
            }

          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >

        <nav className="flex flex-col bg-[#08111F] border-t border-cyan-500/10 px-6 py-5 gap-5 text-lg">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;