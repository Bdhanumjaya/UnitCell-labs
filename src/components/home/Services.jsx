import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Beaker,
  Microscope,
  Settings,
  ArrowRight,
} from "lucide-react";

const Services = () => (
  <section className="relative z-10 px-6 py-12 overflow-hidden bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff]">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-300/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto space-y-20 relative z-10">
      
      <div className="flex flex-col items-center text-center gap-8">
        <div className="space-y-6 max-w-4xl">
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Comprehensive Service Suite
          </h2>

          <p className="text-xl text-slate-700">
            Precision-engineered research solutions for every stage of your
            development pipeline.
          </p>

        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Search />,
            title: "Polymorph Screening",
            details:
              "Exhaustive searching for crystalline forms to ensure thermodynamic stability and regulatory compliance.",
            points: [
              "Solvent selection",
              "Slurry experiments",
              "Thermal stress testing",
            ],
          },
          {
            icon: <Beaker />,
            title: "Salt Selection",
            details:
              "Strategic pairing of API with counter-ions to dramatically improve solubility and hygroscopicity.",
            points: [
              "pKa assessment",
              "Screening of 50+ salts",
              "Hygroscopicity profiles",
            ],
          },
          {
            icon: <Microscope />,
            title: "Co-crystal Research",
            details:
              "Innovative solid-form engineering using molecular co-formers for non-ionizable compounds.",
            points: [
              "Crystal engineering",
              "Ternary phase diagrams",
              "Co-former screening",
            ],
          },
          {
            icon: <Settings />,
            title: "Crystallization",
            details:
              "Scalable process development to control particle size, shape, and purity from lab to pilot plant.",
            points: [
              "Seeding strategies",
              "Solvent-anti-solvent",
              "Cooling crystallization",
            ],
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-[2.5rem] bg-white/60 border border-sky-200 hover:border-cyan-400/40 transition-all flex flex-col h-full shadow-xl backdrop-blur-md"
          >
            
            <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-cyan-700 mb-8 group-hover:scale-110 transition-transform shadow-md">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              {service.title}
            </h3>

            <p className="text-slate-700 mb-8 text-sm leading-relaxed">
              {service.details}
            </p>

            <ul className="mt-auto space-y-3">
              {service.points.map((p, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-widest"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                  {p}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;