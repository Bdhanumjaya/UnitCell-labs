import { Target, Compass } from "lucide-react";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="relative z-10 px-6 py-24 bg-gradient-to-b from-transparent to-[#0a0f1d]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Background Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors" />
            
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:rotate-12 transition-transform duration-500">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                To deliver exceptional scientific insights through advanced screening and analytical techniques, 
                accelerating our partners' journey from drug discovery to successful commercialization. 
                We are committed to scientific rigor, operational excellence, and collaborative innovation.
              </p>
            </div>

            <div className="flex items-center gap-4 text-cyan-400 font-semibold tracking-wide uppercase text-sm">
              <span className="h-[2px] w-12 bg-cyan-500/40"></span>
              Driving Innovation
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Background Gradient Glow */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors" />

            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:-rotate-12 transition-transform duration-500">
                  <Compass className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                To be the global leader in solid-state research, empowering the pharmaceutical and 
                specialty chemical industries with innovative crystal engineering solutions that 
                redefine what's possible in material science.
              </p>
            </div>

            <div className="flex items-center gap-4 text-purple-400 font-semibold tracking-wide uppercase text-sm">
              <span className="h-[2px] w-12 bg-purple-500/40"></span>
              Shaping the Future
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
