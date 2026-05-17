import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 bg-[#07101F] text-white border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:px-16">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <h2 className="text-2xl font-bold text-cyan-300">UNIT CELL Labs</h2>
            </Link>
            <p className="mt-3 text-slate-400 text-sm leading-6">
              Pharmaceutical solid-state research services for reliable drug
              development, formulation support, and scientific collaboration.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Services</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-300 transition cursor-pointer">Industries We Serve</Link>
              </li>
              <li>
                <Link to="/expertise" className="hover:text-cyan-300 transition cursor-pointer">Scientific Expertise</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-cyan-300 transition cursor-pointer">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition cursor-pointer">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Polymorph Screening</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Salt Screening</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Co-crystal Screening</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Solid-state Characterization</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Crystallization Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-300 transition cursor-pointer">Preformulation Studies</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-cyan-300 mb-3">
              Contact
            </h3>
            <div className="flex flex-col items-center md:items-start">
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail size={16} className="text-cyan-400" />
                  <a href="mailto:contact@unitcelllabs.com" className="hover:text-cyan-300 transition">contact@unitcelllabs.com</a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone size={16} className="text-cyan-400" />
                  <a href="tel:+918977770084" className="hover:text-cyan-300 transition">+91 8977770084</a>
                </div>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin size={16} className="text-cyan-400 mt-1 shrink-0" />
                  <span>
                    Indian Institute of Technology Hyderabad, Kandi, Sangareddy,
                    Telangana-502885, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-cyan-500/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <span>© 2026 UNIT CELL Labs. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-cyan-300 transition cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-300 transition cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-cyan-300 transition cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
