import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 pt-32 pb-20 text-center">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-8">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
          Unlock the Right{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
            Solid Form
          </span>
          <br /> for Better Drug Development
        </h1>

        <p className="text-sm md:text-lg text-slate-400 leading-relaxed max-w-4xl mx-auto font-medium">
          We provide advanced pharmaceutical solid-state research services to
          support generic and innovative drug development. From polymorph
          screening to salt, co-crystal, and crystallization process
          development, our scientific expertise helps organizations identify,
          characterize, and develop robust solid forms for successful product
          development.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-cyan-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
          <span>Reliable Science</span>
          <span className="hidden sm:block text-slate-700">|</span>
          <span>Regulatory-Focused Approach</span>
          <span className="hidden sm:block text-slate-700">|</span>
          <span>Confidential Collaboration</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 sm:gap-6">
        <Link
          to="/contact"
          className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-cyan-500 text-slate-950 font-black text-lg rounded-2xl transition-all hover:scale-[1.05] active:scale-95 shadow-[0_20px_50px_-10px_rgba(6,182,212,0.5)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <span className="relative z-10">Request a Proposal</span>
          <ArrowRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1.5" />
        </Link>
        <Link
          to="/contact"
          className="flex items-center justify-center px-8 py-5 bg-white/[0.03] border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/[0.07] hover:border-cyan-500/50 transition-all hover:scale-[1.05] backdrop-blur-md text-center"
        >
          Schedule a Scientific Discussion
        </Link>
        <Link
          to="/contact"
          className="flex items-center justify-center px-8 py-5 bg-white/[0.03] border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/[0.07] hover:border-white/40 transition-all hover:scale-[1.05] backdrop-blur-sm"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
