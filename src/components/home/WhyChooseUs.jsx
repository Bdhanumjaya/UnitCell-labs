import { AlertTriangle, Droplets, Sliders, Microscope, FileWarning, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-7 h-7 text-amber-500" />,
      text: "We advanced a compound only to discover an unexpected stable polymorph late in development.",
    },
    {
      icon: <Droplets className="w-7 h-7 text-blue-500" />,
      text: "Our API is poorly soluble and bioavailability in animal studies was disappointing.",
    },
    {
      icon: <Sliders className="w-7 h-7 text-indigo-500" />,
      text: "Batch-to-batch variability in our crystallization process is causing major headaches.",
    },
    {
      icon: <Microscope className="w-7 h-7 text-[#005dad]" />,
      text: "We don't have the analytical bandwidth to characterize our solid forms in-house.",
    },
    {
      icon: <FileWarning className="w-7 h-7 text-rose-500" />,
      text: "Our CMC reviewer flagged our polymorph control strategy as inadequate.",
    },
    {
      icon: <HelpCircle className="w-7 h-7 text-teal-500" />,
      text: "We chose our salt form early without proper screening and now we are questioning the decision.",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-24 overflow-hidden bg-white font-sans">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#005dad]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[#005dad] uppercase tracking-[0.25em] text-xs font-bold">
            Challenges We Resolve
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Have You Run Into Any of These?
          </h2>
          <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Solid-state hurdles can happen at any phase of small-molecule development. We specialize in getting your API back on track.
          </p>
          <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 bg-white/60 border border-sky-100 backdrop-blur-md hover:border-[#005dad]/30 hover:bg-white/80 transition-all duration-300 shadow-md flex gap-4 items-start"
            >
              {/* Icon Container */}
              <div className="p-3 bg-slate-50 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                {prob.icon}
              </div>

              {/* Problem Description */}
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                "{prob.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#005dad]/20 bg-blue-50/50 p-8 md:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-lg backdrop-blur-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
            If any of these sound familiar, Unit Cell Labs was built for exactly this.
          </h3>
          <p className="text-slate-700 font-medium max-w-xl mx-auto">
            Let our solid-state experts help you de-risk your API, select the proper form, or optimize your crystallization process.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#005dad] hover:bg-[#004c8c] text-white font-black text-base transition-all hover:scale-[1.05] active:scale-95 shadow-md"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;