import { motion } from "framer-motion";
import { Zap, ShieldCheck, Layers } from "lucide-react";

const Importance = () => (
  <section className="relative z-10 px-6 py-14 lg:px-20 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-black">
          Why Solid-State Research Matters
        </h2>
        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
        <p className="text-xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
          The selection of the right solid form is one of the most critical
          decisions in drug development. It directly impacts the{" "}
          <strong>bioavailability, stability, manufacturability</strong>, and{" "}
          <strong>intellectual property</strong> of a pharmaceutical product.
          Failure to identify the optimal polymorph or salt early on can lead to
          catastrophic late-stage failures or regulatory hurdles.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {[
          {
            icon: <Zap />,
            title: "Bioavailability",
            desc: "Optimizing solubility and dissolution rates for maximum therapeutic effect.",
          },
          {
            icon: <ShieldCheck />,
            title: "Stability",
            desc: "Ensuring long shelf-life and resistance to environmental factors.",
          },
          {
            icon: <Layers />,
            title: "Processability",
            desc: "Developing forms that are easy to filter, dry, and compress into final dosage.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-5 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all text-center ${
              i === 2 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 mx-auto">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
              {item.title}
            </h3>
            <p className="text-slate-400 text-xs md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Importance;
