import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#082F49] text-white px-5 py-20">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Content */}
        <div className="-mt-0">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Get In <span className="text-cyan-400">Touch</span>
          </h1>

          <p className="text-slate-300 mt-6 text-lg leading-8 max-w-xl">
            We would love to hear from you. Connect with Unit Labs
            for research collaborations, healthcare innovations,
            and pharmaceutical solid-state solutions.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-5">

            {/* Email */}
            <div className="flex items-center gap-5 bg-[#0B1324]/80 border border-cyan-400/10 rounded-2xl p-5 hover:border-cyan-400/40 transition duration-300">

              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <Mail className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>

                <p className="text-slate-400 text-sm">
                  contact@unitcelllabs.com
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 bg-[#0B1324]/80 border border-cyan-400/10 rounded-2xl p-5 hover:border-cyan-400/40 transition duration-300">

              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <Phone className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>

                <p className="text-slate-400 text-sm">
                  +91 8977770084
                </p>
              </div>

            </div>

            {/* Address */}
            <div className="flex items-center gap-5 bg-[#0B1324]/80 border border-cyan-400/10 rounded-2xl p-5 hover:border-cyan-400/40 transition duration-300">

              <div className="bg-cyan-400/20 p-4 rounded-xl">
                <MapPin className="text-cyan-400" size={28} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Location</h3>

                <p className="text-slate-400 text-sm">
                  Hyderabad, Telangana, India
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Form */}
        <div className="bg-[#0B1324]/90 border border-cyan-400/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Enter Your Message"
                className="w-full bg-[#020617] border border-cyan-500/20 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-[#06121F] py-4 rounded-2xl font-bold transition duration-300 shadow-lg">

              Send Message

              <Send size={20} />

            </button>

          </form>

          {/* Map */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-cyan-400/10">

            <iframe
              title="Unit Labs Location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              width="100%"
              height="220"
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