import { useEffect, useRef } from "react";

/* ================= PARTICLES CONFIG ================= */

const PARTICLES_CONFIG = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 900,
      },
    },

    color: {
      value: ["#06b6d4", "#22d3ee", "#0ea5e9"],
    },

    shape: {
      type: "circle",
    },

    opacity: {
      value: 0.4,
      random: true,
    },

    size: {
      value: 3,
      random: true,
    },

    line_linked: {
      enable: true,
      distance: 140,
      color: "#22d3ee",
      opacity: 0.2,
      width: 1,
    },

    move: {
      enable: true,
      speed: 1.3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },

  interactivity: {
    detect_on: "canvas",

    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },

      resize: true,
    },

    modes: {
      grab: {
        distance: 170,

        line_linked: {
          opacity: 0.5,
        },
      },
    },
  },

  retina_detect: true,
};

/* ================= HOME COMPONENT ================= */

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

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";

    script.async = true;

    script.onload = initParticles;

    document.head.appendChild(script);

  }, []);

  return (
    <>

      {/* ================= GLOBAL CSS ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow-x:hidden;
          font-family:Arial, Helvetica, sans-serif;
          background:#020617;
        }

        #particles-js{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          z-index:1;
        }

      `}</style>

      {/* ================= MAIN PAGE ================= */}

      <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

        {/* ================= PARTICLES ================= */}

        <div id="particles-js"></div>

        {/* ================= GLOW EFFECTS ================= */}

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* ================= HERO SECTION ================= */}

        <section className="relative z-10 min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-20 py-20">

  <div className="text-center max-w-6xl mx-auto">

    {/* Heading */}

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">

      <span className="text-white">
        Future Of
      </span>

      {" "}

      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">

        Smart Healthcare

      </span>

    </h1>

    {/* Paragraph */}

    <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-8 md:leading-10 max-w-4xl mx-auto mb-12 px-2">

      Unit Cell Labs delivers premium medicines,
      pharmaceutical innovation, healthcare products,
      and trusted medical solutions with smart support,
      fast delivery, and reliable healthcare services.

    </p>

    {/* Buttons */}

    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

      <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition duration-300 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-[0_0_35px_rgba(34,211,238,0.35)]">

        Explore Services

      </button>

      <button className="w-full sm:w-auto border border-cyan-400/30 bg-white/5 backdrop-blur-xl hover:bg-cyan-500/10 text-cyan-200 px-10 py-4 rounded-2xl font-semibold text-lg transition duration-300">

        Contact Us

      </button>

    </div>

  </div>

</section>
      </div>

    </>
  );
}

export default Home;