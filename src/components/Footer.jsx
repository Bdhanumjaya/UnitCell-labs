import { Mail, MapPin, ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import footerBg from "../assets/footer.png";

function Footer() {
  const handleQuickLinkClick = (to) => {
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

  const footerServices = [
    { label: "Polymorph Screening", to: "/services#polymorph" },
    { label: "Salt & Co-Crystal Screening", to: "/services#salt" },
    { label: "Solid-State Characterization", to: "/services#characterization" },
    { label: "Crystallization Development", to: "/services#crystallization" },
    { label: "Amorphous Solid Dispersion", to: "/services#asd" },
    { label: "Stability Studies", to: "/services#stability" },
    { label: "Preformulation", to: "/services#preformulation" },
    { label: "CMC Consulting", to: "/services#regulatory" },
  ];

  return (
    <footer className="relative z-10 text-white border-t border-white/10 overflow-hidden">
      {/* Background image */}
      <img
        src={footerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#005dad]/85 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-6 lg:px-16 relative z-10">
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          
          {/* Column 1 — Brand info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Unit Cell Labs"
                className="h-14 w-auto bg-white p-1 shadow-lg shadow-black/10"
              />
              
            </Link>
            <p className="text-white text-sm leading-relaxed font-semibold">
              Unit Cell Labs · Precision Solid-State Science for Drug Development
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/unitcelllabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-white/10 text-white hover:bg-white hover:text-[#005dad] transition-all duration-300 shadow-md shadow-white/5"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com/unitcelllabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-white/10 text-white hover:bg-white hover:text-[#005dad] transition-all duration-300 shadow-md shadow-white/5"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-white/10 text-white hover:bg-white hover:text-[#005dad] transition-all duration-300 shadow-md shadow-white/5"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-white/10 text-white hover:bg-white hover:text-[#005dad] transition-all duration-300 shadow-md shadow-white/5"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-base font-black uppercase tracking-wider text-white mb-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/95 text-sm font-semibold">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-white transition duration-200 group">
                  <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 hover:text-white transition duration-200 group">
                  <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-white transition duration-200 group">
                  <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#how-we-work"
                  onClick={() => handleQuickLinkClick("/#how-we-work")}
                  className="flex items-center gap-2 hover:text-white transition duration-200 group"
                >
                  <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-white transition duration-200 group">
                  <ArrowRight size={12} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services mapping */}
          <div>
            <h3 className="text-base font-black uppercase tracking-wider text-white mb-2.5">
              Services
            </h3>
            <ul className="space-y-2 text-white/95 text-xs sm:text-sm font-semibold">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    onClick={() => handleQuickLinkClick(service.to)}
                    className="flex items-center gap-2 hover:text-white transition duration-200 group"
                  >
                    <ArrowRight size={12} className="text-white/60 shrink-0 group-hover:translate-x-1 group-hover:text-white transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base font-black uppercase tracking-wider text-white mb-2.5">
              Contact Us
            </h3>
            <div className="space-y-3 text-white/95 text-sm font-semibold">
              
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white shrink-0" />
                <a href="mailto:info@unitcelllabs.com" className="hover:text-white/80 transition-colors">
                  info@unitcelllabs.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-white mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Unit Cell Labs Pvt. Ltd. <br />
                  IIT Hyderabad, Kandi, Sangareddy, <br />
                  Telangana - 502285, India
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom section */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/70 text-xs sm:text-sm font-semibold">
          <span>© 2025 Unit Cell Labs Pvt. Ltd. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-white transition duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="hover:text-white transition duration-200">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
