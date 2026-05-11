import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="bg-[#020617] text-white px-6 py-20 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_0.75fr] items-start">
        <div className="space-y-8 rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">Contact Us</p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Let’s Discuss Your Project</h1>
            <p className="mt-6 text-slate-300 leading-8">
              Whether you are working on pharmaceutical, chemical, material science, or research-based projects, our team is ready to support your solid-state development requirements.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
                <p className="mt-2 text-slate-300">contact@unitcelllabs.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Phone</p>
                <p className="mt-2 text-slate-300">+91 8977770084</p>
              </div>
            </div>
            <div className="flex items-center gap-5 rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Location</p>
                <p className="mt-2 text-slate-300">Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana-502885, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-8">Send a Request</h2>
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Service Requirement</label>
              <select className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300">
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
              <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea
                rows="5"
                placeholder="Describe your project or inquiry"
                className="w-full rounded-2xl border border-cyan-400/20 bg-[#020617] px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Send Request
              <Send size={20} />
            </button>
          </form>
          <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/10">
            <iframe
              title="Unit Cell Labs Location"
              src="https://www.google.com/maps?q=Indian+Institute+of+Technology+Hyderabad&output=embed"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
