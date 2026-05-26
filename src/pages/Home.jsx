import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Importance from "../components/home/Importance";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Industries from "../components/home/Industries";
import Methodology from "../components/home/Methodology";
import VisionMission from "../components/home/VisionMission";
import Facilities from "../components/home/Facilities";
import FinalCTA from "../components/home/FinalCTA";

const PARTICLES_CONFIG = {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: ["#70e8ff", "#38bdf8", "#0ea5e9"] },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
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
    modes: { grab: { distance: 180, line_linked: { opacity: 0.4 } } },
  },
  retina_detect: true,
};

function Home() {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        try {
          window.particlesJS("particles-js", PARTICLES_CONFIG);
        } catch (e) {
          console.error("Particles.js init error:", e);
        }
      }
    };

    if (window.particlesJS) {
      initParticles();
    } else {
      const script = document.createElement("script");
      script.id = "particles-script";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = initParticles;
      if (!document.getElementById("particles-script")) {
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff] text-slate-900 font-sans selection:bg-cyan-400/30">
      
      {/* Particle Background Layer (kept as-is) */}
      <div
        id="particles-js"
        className="fixed inset-0 z-0 pointer-events-none opacity-80"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <VisionMission />
        <Facilities />
        <Industries />
        <Importance />
        <Services />
        <WhyChooseUs />
        <Methodology />
        <FinalCTA />
      </div>

    </div>
  );
}

export default Home;