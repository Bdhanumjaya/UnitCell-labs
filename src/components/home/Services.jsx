import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, FlaskConical, Microscope, Workflow, ArrowRight } from "lucide-react";

const Services = () => (
  <section className="relative z-10 px-6 py-20 overflow-hidden bg-white font-sans">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#005dad]/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto space-y-16 relative z-10">
      
      <div className="flex flex-col items-center text-center gap-4">
        <div className="space-y-4 max-w-4xl">
          <p className="text-[#005dad] uppercase tracking-[0.25em] text-xs font-bold">
            Flagship Capabilities
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Precision-engineered research solutions for every stage of your development pipeline.
          </p>
          <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Layers className="w-6 h-6" />,
            title: "Polymorph Screening & Selection",
            details:
              "Identify and characterize all accessible polymorphic forms of your API to select the optimal solid form for development.",
            points: [
              "High-throughput screening",
              "Thermodynamic profiling",
              "Stability assessment",
            ],
          },
          {
            icon: <FlaskConical className="w-6 h-6" />,
            title: "Salt & Co-Crystal Screening",
            details:
              "Expand your solid-form landscape to improve aqueous solubility, bioavailability, stability, or processability.",
            points: [
              "Counterion selection",
              "Co-former identification",
              "Physicochemical profiling",
            ],
          },
          {
            icon: <Microscope className="w-6 h-6" />,
            title: "Solid-State Characterization",
            details:
              "Rigorous analytical characterization of your API or drug product intermediate for development and regulatory filings.",
            points: [
              "XRPD, DSC, and TGA",
              "DVS & Spectroscopies",
              "Particle size & morphology",
            ],
          },
          {
            icon: <Workflow className="w-6 h-6" />,
            title: "Crystallization Development",
            details:
              "Design, optimize, and scale robust crystallization processes that deliver consistent API with controlled particle attributes.",
            points: [
              "Supersaturation profiling",
              "Nucleation kinetics",
              "Scale-up documentation",
            ],
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-white/60 border border-sky-200/55 hover:border-[#005dad]/30 hover:bg-white/80 transition-all flex flex-col h-full shadow-lg backdrop-blur-md"
          >
            
            <div className="w-12 h-12 bg-[#005dad] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md">
              {service.icon}
            </div>

            <h3 className="text-xl font-black mb-3 text-slate-900 leading-tight">
              {service.title}
            </h3>

            <p className="text-slate-700 mb-6 text-xs sm:text-sm leading-relaxed font-semibold">
              {service.details}
            </p>

            <ul className="mt-auto space-y-2.5 pt-4 border-t border-sky-100/50">
              {service.points.map((p, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 text-[11px] sm:text-xs font-bold text-slate-800 uppercase tracking-wider"
                >
                  <div className="w-1.5 h-1.5 bg-[#005dad] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>

      <div className="text-center pt-4">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[#005dad] hover:text-[#004c8c] font-extrabold text-sm sm:text-base uppercase tracking-wider group transition-colors"
        >
          View All 8 Specialized Services
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  </section>
);

export default Services;