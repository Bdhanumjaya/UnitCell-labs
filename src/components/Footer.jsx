function Footer() {
  return (
    <footer className="bg-[#07101F] text-white border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-cyan-300">UNIT CELL Labs</h2>
            <p className="mt-4 text-slate-400 text-sm leading-6">
              Pharmaceutical solid-state research services for reliable drug development, formulation support, and scientific collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-cyan-300 transition cursor-pointer">Home</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">About Us</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Services</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Industries We Serve</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Scientific Expertise</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">FAQs</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-cyan-300 transition cursor-pointer">Polymorph Screening</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Salt Screening</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Co-crystal Screening</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Solid-state Characterization</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Crystallization Development</li>
              <li className="hover:text-cyan-300 transition cursor-pointer">Preformulation Studies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Contact</h3>
            <p className="text-slate-400 text-sm">contact@unitcelllabs.com</p>
            <p className="text-slate-400 text-sm mt-2">+91 8977770084</p>
            <p className="text-slate-400 text-sm mt-2">Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana-502885, India</p>
          </div>
        </div>
        <div className="mt-10 border-t border-cyan-500/10 pt-6 text-center text-slate-500 text-sm">
          © 2026 UNIT CELL Labs. All Rights Reserved. Pharmaceutical Solid-State Research Services | Confidential Scientific Collaboration | Hyderabad, India
          <div className="mt-2 space-x-6">
            <span className="hover:text-cyan-300 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyan-300 transition cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-cyan-300 transition cursor-pointer">Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
