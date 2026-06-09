import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Layers, 
  FlaskConical, 
  Combine, 
  Microscope, 
  Workflow, 
  ClipboardCheck,
  ShieldCheck,
  Award
} from "lucide-react";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const aboutLinks = [
    { label: "About Us", to: "/about" },
    { label: "Industries We Serve", to: "/industries" },
    { label: "Scientific Expertise", to: "/expertise" },
  ];

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
    { label: "Polymorph Screening & Selection", to: "/services#polymorph", icon: Layers },
    { label: "Salt & Co-Crystal Screening", to: "/services#salt", icon: FlaskConical },
    { label: "Solid-State Characterization", to: "/services#characterization", icon: Microscope },
    { label: "Crystallization Process Development", to: "/services#crystallization", icon: Workflow },
    { label: "Amorphous Solid Dispersion", to: "/services#asd", icon: Combine },
    { label: "Stability Studies (Solid-State)", to: "/services#stability", icon: ShieldCheck },
    { label: "Preformulation & Physical Property", to: "/services#preformulation", icon: ClipboardCheck },
    { label: "Regulatory & CMC Consulting", to: "/services#regulatory", icon: Award },
  ];

  const handleServiceClick = (to) => {
    setServicesOpen(false);
    setMenuOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (window.location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
      }
    }
  };

  return (
    <header
      className={`bg-white/90 backdrop-blur-md border-b border-sky-100 fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 lg:px-10">
       <div className="md:w-[380px] w-auto flex items-center shrink-0">
  <Link to="/" className="flex items-center gap-4">

    {/* UC Icon */}
    <img
      src={logo}
      alt="Unit Cell Labs"
      className="h-16 lg:h-16 w-auto object-contain"
    />

    {/* Company Name */}
  {/* Company Name */}
<div className="hidden sm:flex flex-col justify-center leading-none">

  <h1
    className="
      text-[#0F1F4A]
      font-extrabold
      text-[22px]
      lg:text-[30px]
      tracking-[0.22em]
      uppercase
      leading-none
    "
  >
    UNIT CELL
  </h1>

 <div className="flex items-center justify-center gap-3 mt-0.5">
    <div className="h-[2px] w-10 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />

    <span
      className="
        text-[#1D6F86]
        font-bold
        text-[11px]
        lg:text-[14px]
        tracking-[0.65em]
        uppercase
      "
    >
        LABS
    </span>

    <div className="h-[2px] w-10 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full" />
  </div>

  <span
    className="
      mt-1.5
      text-[8px]
      lg:text-[9px]
      font-medium
      tracking-[0.22em]
      uppercase
      text-slate-600
    "
  >
    Where Science Meets Solid Form
  </span>

</div>

  </Link>
</div>

        <nav className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.14em] md:flex ml-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#005dad] border-b border-[#005dad] pb-1"
                : "text-slate-800 hover:text-[#005dad] transition duration-200"
            }
          >
            Home
          </NavLink>

          <div
            className="relative py-2"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-800 hover:text-[#005dad] transition duration-200 uppercase tracking-[0.14em] text-xs cursor-pointer">
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 w-64 pt-3 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                <div className="bg-white border border-sky-100 shadow-2xl p-2.5 overflow-hidden flex flex-col gap-1">
                  {aboutLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setAboutOpen(false)}
                      className="flex items-center px-4 py-2.5 border-l-2 border-transparent hover:border-[#005dad] hover:bg-blue-50/50 text-slate-800 hover:text-[#005dad] transition-all duration-200 group cursor-pointer hover:translate-x-1"
                    >
                      <span className="text-[11px] font-semibold tracking-wide uppercase leading-tight">
                        {item.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative py-2"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-800 hover:text-[#005dad] transition duration-200 uppercase tracking-[0.14em] text-xs cursor-pointer">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] pt-3 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                <div className="bg-white border border-sky-100 shadow-2xl p-4 overflow-hidden grid grid-cols-2 gap-x-6 gap-y-1">
                  <div className="flex flex-col gap-1">
                    {services.slice(0, 4).map((service) => {
                      return (
                        <NavLink
                          key={service.to}
                          to={service.to}
                          onClick={() => handleServiceClick(service.to)}
                          className="flex items-center px-4 py-2.5 border-l-2 border-transparent hover:border-[#005dad] hover:bg-blue-50/50 text-slate-800 hover:text-[#005dad] transition-all duration-200 group cursor-pointer hover:translate-x-1"
                        >
                          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase leading-tight">
                            {service.label}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    {services.slice(4, 8).map((service) => {
                      return (
                        <NavLink
                          key={service.to}
                          to={service.to}
                          onClick={() => handleServiceClick(service.to)}
                          className="flex items-center px-4 py-2.5 border-l-2 border-transparent hover:border-[#005dad] hover:bg-blue-50/50 text-slate-800 hover:text-[#005dad] transition-all duration-200 group cursor-pointer hover:translate-x-1"
                        >
                          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase leading-tight">
                            {service.label}
                          </span>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            { label: "FAQs", to: "/faqs" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#005dad] border-b border-[#005dad] pb-1"
                  : "text-slate-800 hover:text-[#005dad] transition duration-200"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:w-32 w-auto flex justify-end shrink-0">
          <button
            className="md:hidden text-slate-800 hover:text-[#005dad]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-white/95 border-b border-sky-100 transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-3 px-5 py-4 text-xs uppercase tracking-[0.14em]">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#005dad]"
                : "text-slate-800 hover:text-[#005dad]"
            }
          >
            Home
          </NavLink>

          <div className="space-y-2 border-l border-[#005dad]/30 pl-2">
            <div className="text-[#005dad] font-bold text-[11px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#005dad] animate-pulse"></span>
              About Us
            </div>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {aboutLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#005dad]"
                      : "text-slate-800 hover:text-[#005dad]"
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-2 border-l border-[#005dad]/30 pl-2">
            <div className="text-[#005dad] font-bold text-[11px] tracking-widest uppercase mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#005dad] animate-pulse"></span>
              Services
            </div>
            <div className="grid grid-cols-1 gap-2 pl-2">
              {services.map((service) => {
                return (
                  <NavLink
                    key={service.to}
                    to={service.to}
                    onClick={() => handleServiceClick(service.to)}
                    className="flex items-center py-1.5 text-xs text-slate-850 hover:text-[#005dad] transition duration-200 group"
                  >
                    <span>{service.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {[
            { label: "FAQs", to: "/faqs" },
            { label: "Contact Us", to: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#005dad]"
                  : "text-slate-800 hover:text-[#005dad]"
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
