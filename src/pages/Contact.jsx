import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import pageBg from "../assets/page-bg.png";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff] text-slate-900">
      
      {/* Full Width Banner Section */}
      <div className="relative h-[200px] md:h-[350px] overflow-hidden group shadow-2xl">
        <img
          src={pageBg}
          alt="Contact Header"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cfefff]/20 to-[#cfefff]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
            <h2 className="text-slate-900/20 text-6xl md:text-8xl font-black uppercase tracking-widest select-none">
              Contact
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">

          <header className="space-y-6 text-center">
            <p className="text-cyan-700 uppercase tracking-[0.35em] text-sm font-semibold">
              Contact Us
            </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl text-slate-900">
              Let’s Discuss Your Project
            </h1>
            <p className="mx-auto max-w-3xl text-slate-700 leading-8 text-lg">
              Whether you are working on pharmaceutical, chemical, material
              science, or research-based projects, our team is ready to support
              your solid-state development requirements.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
            
            {/* Left Card */}
            <div className="space-y-6 rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-md p-6 shadow-lg">

              <div className="grid gap-5">

                <div className="flex items-center gap-5 rounded-3xl border border-sky-100 bg-white/70 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-700">
                      Email
                    </p>
                    <p className="mt-2 text-slate-700">
                      contact@unitcelllabs.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-3xl border border-sky-100 bg-white/70 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-700">
                      Phone
                    </p>
                    <p className="mt-2 text-slate-700">+91 8977770084</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-3xl border border-sky-100 bg-white/70 p-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-100 text-cyan-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-700">
                      Location
                    </p>
                    <p className="mt-2 text-slate-700">
                      Indian Institute of Technology Hyderabad, Kandi, Sangareddy,
                      Telangana-502885, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Social */}
              <div className="pt-6 border-t border-sky-100">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 mb-6">
                  Connect With Us
                </p>

                <div className="flex gap-4">
                  {[FaLinkedin, FaTwitter, FaFacebookF, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition-all hover:bg-cyan-500 hover:text-white"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-md p-6 shadow-lg">
              <h2 className="text-3xl font-semibold text-cyan-800 mb-5">
                Send a Request
              </h2>

              <form className="space-y-6">

                {["Name", "Company Name"].map((label) => (
                  <div key={label}>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      {label}
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-900 outline-none focus:border-cyan-400"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  </div>
                ))}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-900 outline-none focus:border-cyan-400"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-900 outline-none focus:border-cyan-400"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Service Requirement
                  </label>
                  <select className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-900 outline-none focus:border-cyan-400">
                    <option value="">Select a service requirement</option>
                    <option>Polymorph Screening</option>
                    <option>Salt Screening</option>
                    <option>Co-crystal Screening</option>
                    <option>Characterization & Analysis</option>
                    <option>Crystallization Development</option>
                    <option>Preformulation Studies</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-900 outline-none focus:border-cyan-400"
                    placeholder="Describe your project or inquiry"
                  />
                </div>

                <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-600 transition">
                  Send Request
                  <Send size={20} />
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-sky-100 shadow-lg">
          <iframe
            title="Unit Cell Labs Location"
            src="https://www.google.com/maps?q=Indian+Institute+of+Technology+Hyderabad&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;