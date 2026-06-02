import { motion } from "framer-motion";
import { Zap, ShieldCheck, Layers } from "lucide-react";

const Importance = () => (
  <section className="relative z-10 px-6 py-14 lg:px-20 overflow-hidden bg-white font-sans">
    <div className="max-w-5xl mx-auto text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          The Science Inside Every Form Matters.
        </h2>

        <div className="h-1 w-20 bg-[#005dad] mx-auto" />

        <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed max-w-5xl mx-auto text-center font-medium">
          <p>
            Solid-state properties—polymorphism, salt form, crystallinity, particle morphology—determine whether a drug candidate succeeds or fails long before it reaches the clinic. At Unit Cell Labs, we apply rigorous experimental science and deep domain expertise to characterize, optimize, and de-risk the solid form of your API from early discovery through clinical readiness.
          </p>
          <p>
            We are a specialized contract research organization (CRO) focused exclusively on solid-state pharmaceutical sciences. Whether you are selecting the right polymorph, designing a scalable crystallization process, or navigating a regulatory submission, we are your dedicated scientific partner.
          </p>
        </div>
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
            className={`p-5 md:p-8 bg-white/60 border border-sky-100 hover:border-[#005dad]/30 hover:bg-white/80 transition-all text-center shadow-lg ${
              i === 2 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center text-[#005dad] mb-6 mx-auto">
              {item.icon}
            </div>

            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-slate-900">
              {item.title}
            </h3>

            <p className="text-slate-700 text-xs md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Importance;