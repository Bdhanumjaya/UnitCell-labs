import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 pt-32 pb-20 text-center overflow-hidden bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff]">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-300/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 blur-[120px] rounded-full" />

    <div className="max-w-4xl mx-auto space-y-12 relative z-10">

      {/* Heading */}
      <div className="space-y-8">

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
          Unlock the Right{" "}
          
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075985] via-[#0f766e] to-[#1d4ed8]">
               Solid Form
          </span>

          <br /> for Better Drug Development
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto font-medium">
          We provide advanced pharmaceutical solid-state research services to
          support generic and innovative drug development. From polymorph
          screening to salt, co-crystal, and crystallization process
          development, our scientific expertise helps organizations identify,
          characterize, and develop robust solid forms for successful product
          development.
        </p>

        {/* Tags */}
       <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-slate-900 font-extrabold uppercase tracking-widest text-[11px] sm:text-sm">
          <span>Reliable Science</span>

          <span className="hidden sm:block text-sky-500">|</span>

          <span>Regulatory-Focused Approach</span>

          <span className="hidden sm:block text-sky-500">|</span>

          <span>Confidential Collaboration</span>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 sm:gap-6">

        {/* Main CTA */}
        <Link
          to="/contact"
          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-black text-lg rounded-2xl transition-all hover:scale-[1.05] active:scale-95 shadow-[0_20px_60px_-10px_rgba(2,132,199,0.55)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

          <span className="relative z-10 text-black">
  Request a Proposal
</span>

          <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1.5 text-black" />
        </Link>

        {/* Secondary CTA */}
        <Link
          to="/contact"
          className="flex items-center justify-center px-8 py-5 bg-white/60 border border-sky-200 text-slate-800 font-bold text-lg rounded-2xl hover:bg-white/80 hover:border-sky-400 transition-all hover:scale-[1.05] backdrop-blur-md text-center shadow-lg"
        >
          Schedule a Scientific Discussion
        </Link>

        {/* Third CTA */}
        <Link
          to="/contact"
          className="flex items-center justify-center px-8 py-5 bg-white/50 border border-sky-200 text-slate-800 font-bold text-lg rounded-2xl hover:bg-white/80 hover:border-sky-400 transition-all hover:scale-[1.05] backdrop-blur-md shadow-lg"
        >
          Contact Our Team
        </Link>

      </div>
    </div>
  </section>
);

export default Hero;