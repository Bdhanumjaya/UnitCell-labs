import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 pt-32 pb-20 text-center overflow-hidden bg-white font-sans">

    <div className="max-w-4xl mx-auto space-y-12 relative z-10">

      {/* Heading */}
      <div className="space-y-8">

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
          Where Molecules Find Their{" "}
          <span className="text-[#005dad]">
            Best Form
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
          Unit Cell Labs brings precision solid-state science to small-molecule drug development—accelerating programs, reducing risk, and unlocking molecular potential.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-slate-900 font-extrabold uppercase tracking-widest text-[11px] sm:text-xs">
          <span>Polymorphism</span>
          <span className="hidden sm:block text-[#005dad]">|</span>
          <span>Crystallization</span>
          <span className="hidden sm:block text-[#005dad]">|</span>
          <span>Solid-State CRO</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">

        {/* Main CTA */}
        <Link
          to="/contact"
          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#005dad] hover:bg-[#004c8c] text-white font-black text-lg transition-all hover:scale-[1.05] active:scale-95 shadow-lg shadow-blue-500/10 overflow-hidden w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative z-10 text-white">
            Schedule a Consultation
          </span>
          <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1.5 text-white" />
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/services"
          className="flex items-center justify-center px-8 py-5 bg-white/60 border border-sky-200 text-slate-800 font-bold text-lg hover:bg-white/80 hover:border-[#005dad]/30 transition-all hover:scale-[1.05] backdrop-blur-md text-center shadow-lg w-full sm:w-auto"
        >
          Explore Our Services
        </Link>

      </div>
    </div>
  </section>
);

export default Hero;