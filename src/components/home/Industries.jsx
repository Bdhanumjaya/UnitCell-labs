import { motion } from "framer-motion";
import pharmaImg from "../../assets/pharma-industry.png";
import biotechImg from "../../assets/biotech-industry.png";
import agroImg from "../../assets/agro-industry.png";

const Industries = () => {
  const industries = [
    {
      title: "Pharmaceuticals",
      description:
        "Comprehensive support for ANDA filings, polymorph control, and intellectual property strategy for generic and ethical pharma.",
      image: pharmaImg,
      stats: "50+ NCE Projects",
    },
    {
      title: "Innovative Biotech",
      description:
        "Early-stage solid-form screening and characterization for New Chemical Entities (NCEs) and biological breakthroughs.",
      image: biotechImg,
      stats: "Advanced Screening",
    },
    {
      title: "Agrochemicals",
      description:
        "Optimizing the stability and efficacy of active ingredients for advanced crop protection and precision farming.",
      image: agroImg,
      stats: "Efficacy Optimization",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-24 overflow-hidden bg-white font-sans">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005dad]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 bg-blue-50 border border-blue-200 text-[#005dad] text-sm font-semibold tracking-wider uppercase"
          >
            Sectors We Impact
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
            Industries We{" "}
            <span className="text-[#005dad] italic">Serve</span>
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed">
            Delivering tailored solid-state research solutions across the globe's
            most demanding scientific sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[350px] overflow-hidden border border-sky-200 hover:border-[#005dad]/30 transition-all duration-500"
            >
              
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />



              {/* Content */}
              {/* Dark bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-2">
                
                <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white/70 font-bold text-sm tracking-widest uppercase">
                  {industry.stats}
                </div>

                <h3 className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 text-3xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {industry.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;