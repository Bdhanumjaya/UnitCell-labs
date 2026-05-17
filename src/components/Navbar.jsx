import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down and past 100px
          setIsVisible(false);
        } else {
          // if scroll up
          setIsVisible(true);
        }

        // remember current page location to use next time
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const services = [
    { label: "Polymorph Screening", to: "/services#polymorph" },
    { label: "Salt Screening", to: "/services#salt" },
    { label: "Co-crystal Screening", to: "/services#cocrystal" },
    { label: "Solid-state Characterization", to: "/services#characterization" },
    { label: "Crystallization Development", to: "/services#crystallization" },
    { label: "Preformulation Studies", to: "/services#preformulation" },
  ];

  return (
    <header
      className={`bg-[#08121F]/95 backdrop-blur-md border-b border-cyan-500/15 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Unit Cell Labs"
            className="h-14 w-auto rounded-lg shadow-lg shadow-cyan-500/10"
          />
          <h1 className="text-xl font-bold text-white tracking-tight sm:text-2xl">
            UNIT CELL <span className="text-cyan-400">Labs</span>
          </h1>
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] md:flex">
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 border-b border-cyan-300 pb-1"
                  : "text-slate-300 hover:text-cyan-300 transition duration-200"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div
            className="relative py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition duration-200 uppercase tracking-[0.14em] text-xs">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 pt-2 z-50">
                <div className="bg-[#07111D] border border-cyan-500/20 rounded-lg shadow-xl py-2 overflow-hidden">
                  {services.map((service) => (
                    <NavLink
                      key={service.to}
                      to={service.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-xs text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition duration-200 border-l-2 border-transparent hover:border-cyan-500"
                    >
                      {service.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { label: "Industries We Serve", to: "/industries" },
            { label: "Scientific Expertise", to: "/expertise" },
            { label: "FAQs", to: "/faqs" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 border-b border-cyan-300 pb-1"
                  : "text-slate-300 hover:text-cyan-300 transition duration-200"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-cyan-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[#07111D] transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-3 px-5 py-4 text-xs uppercase tracking-[0.14em]">
          {[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="space-y-1">
            <div className="text-cyan-300 font-semibold text-xs">Services</div>
            {services.map((service) => (
              <NavLink
                key={service.to}
                to={service.to}
                onClick={() => setMenuOpen(false)}
                className="block pl-4 text-slate-300 text-xs hover:text-cyan-300"
              >
                {service.label}
              </NavLink>
            ))}
          </div>

          {[
            { label: "Industries We Serve", to: "/industries" },
            { label: "Scientific Expertise", to: "/expertise" },
            { label: "FAQs", to: "/faqs" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-300"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
