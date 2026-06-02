import { motion } from "framer-motion";
import { Users, Layers, Clock, FileCheck, Globe } from "lucide-react";

const Stats = () => {
  const differentiators = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      desc: "Scientists with deep academic and industry backgrounds in solid-state chemistry, crystallography, and pharmaceutical development",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "End-to-End Scope",
      desc: "From early polymorph screening to GMP-ready crystallization processes",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Turnaround Focus",
      desc: "Structured project timelines with regular scientific updates",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Regulatory Alignment",
      desc: "Work conducted with ICH Q6A and CTD Module 3 in mind from day one",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "India-Based Advantage",
      desc: "World-class science at competitive cost, serving global pharma and biotech",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-20 bg-white border-y border-sky-200/40 font-sans">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#005dad]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[#005dad] uppercase tracking-[0.25em] text-xs font-bold">
            Key Differentiators
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Why Global Pharma and Biotech Partner With Us
          </h2>
          <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group p-6 bg-white/60 border border-sky-100/70 backdrop-blur-md hover:border-[#005dad]/30 hover:bg-white/80 transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon Container with brand blue background */}
                <div className="w-12 h-12 bg-[#005dad] flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#005dad] transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;