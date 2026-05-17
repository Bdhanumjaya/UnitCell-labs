import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Beaker, Microscope, Settings, ArrowRight } from "lucide-react";

const Services = () => (
  <section className="relative z-10 px-6 py-8 bg-slate-950/80">
    <div className="max-w-7xl mx-auto space-y-20">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black">
            Comprehensive Service Suite
          </h2>
          <p className="text-xl text-slate-400">
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
            className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              {service.details}
            </p>
            <ul className="mt-auto space-y-3">
              {service.points.map((p, j) => (
                <li
                  key={j}
                  className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
