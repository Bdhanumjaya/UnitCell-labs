function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white border-t border-cyan-500/20 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              UNIT LABS
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-6">
              Building modern and scalable web applications using
              React, Java, Spring Boot, and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">
              Contact
            </h3>

            <p className="text-gray-400 text-sm">
              📧 support@unitlabs.com
            </p>

            <p className="text-gray-400 text-sm mt-2">
              📞 +91 9876543210
            </p>

            <p className="text-gray-400 text-sm mt-2">
              📍 Andhra Pradesh, India
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-500/20 mt-8 pt-5 text-center text-gray-500 text-sm">
          © 2026 UNIT LABS. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;