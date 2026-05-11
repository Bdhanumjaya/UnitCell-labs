import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { label: "Polymorph Screening", to: "/services#polymorph" },
    { label: "Salt Screening", to: "/services#salt" },
    { label: "Co-crystal Screening", to: "/services#cocrystal" },
    { label: "Solid-state Characterization", to: "/services#characterization" },
    { label: "Crystallization Development", to: "/services#crystallization" },
    { label: "Preformulation Studies", to: "/services#preformulation" },
  ];

  return (
    <header className="bg-[#08121F]/95 backdrop-blur-md border-b border-cyan-500/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 lg:px-10">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            UNIT CELL <span className="text-cyan-400">Labs</span>
          </h1>
        </div>

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

          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition duration-200 uppercase tracking-[0.14em] text-xs"
            >
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-[#07111D] border border-cyan-500/20 rounded-lg shadow-xl py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <NavLink
                    key={service.to}
                    to={service.to}
                    className="block px-3 py-2 text-xs text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition duration-200"
                  >
                    {service.label}
                  </NavLink>
                ))}
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

        <button className="md:hidden text-cyan-300" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`overflow-hidden bg-[#07111D] transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
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
                isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
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
                isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
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
