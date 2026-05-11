import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 1000 } },
    color: { value: ["#70e8ff", "#38bdf8", "#0ea5e9"] },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#38bdf8",
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: { grab: { distance: 180, line_linked: { opacity: 0.5 } } },
  },
  retina_detect: true,
};

function Home() {
  const particlesLoaded = useRef(false);

  useEffect(() => {
    if (particlesLoaded.current) return;

    function initParticles() {
      if (window.particlesJS) {
        window.particlesJS("particles-js", PARTICLES_CONFIG);
        particlesLoaded.current = true;
      }
    }

    if (window.particlesJS) {
      initParticles();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = initParticles;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <p className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 tracking-wide">
              Pharmaceutical Solid-State Services
            </p>
            <h1 className="text-4xl sm:text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              Unlock the Right Solid Form for Better Drug Development
            </h1>
            <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-8">
              We provide advanced pharmaceutical solid-state research services to support generic and innovative drug development. From polymorph screening to salt, co-crystal, and crystallization process development, our scientific expertise helps organizations identify, characterize, and develop robust solid forms for successful product development.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Reliable Science", "Regulatory-Focused Approach", "Confidential Collaboration"].map((item) => (
                <div key={item} className="rounded-3xl border border-cyan-400/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:scale-105 hover:shadow-lg">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Request a Proposal
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:scale-105">
                Schedule a Scientific Discussion
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/70 px-8 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:text-white hover:bg-slate-800/80 hover:scale-105">
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10 hover:scale-105">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-950/50 p-6 transition-all duration-300 hover:bg-slate-950/70">
                <h2 className="text-2xl font-semibold text-white mb-3">Expert Solid-State Services</h2>
                <p className="leading-7 text-slate-300">
                  From initial screening to development-ready crystallization, we help clients make informed decisions with scalable, regulatory-aligned science.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Polymorph Screening", details: "Identify stable and metastable crystalline forms." },
                  { title: "Salt Selection", details: "Improve solubility, stability and manufacturability." },
                  { title: "Co-crystal Development", details: "Deliver differentiated solid forms for formulation." },
                  { title: "Characterization", details: "Analyze thermal, structural and surface properties." },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-cyan-400/10 bg-[#0A1628]/90 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0B1A32]/95 hover:scale-105 hover:shadow-lg">
                    <h3 className="font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-6">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-400/10 bg-[#07101F]/90 p-8 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
            <p className="text-5xl font-extrabold text-cyan-300">7+</p>
            <p className="mt-3 text-slate-300">Years of industry-led solid-state research.</p>
          </div>
          <div className="rounded-3xl border border-cyan-400/10 bg-[#07101F]/90 p-8 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
            <p className="text-5xl font-extrabold text-cyan-300">50+</p>
            <p className="mt-3 text-slate-300">Pharma and biotech partners supported worldwide.</p>
          </div>
          <div className="rounded-3xl border border-cyan-400/10 bg-[#07101F]/90 p-8 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
            <p className="text-5xl font-extrabold text-cyan-300">100%</p>
            <p className="mt-3 text-slate-300">Confidential collaboration for every project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
