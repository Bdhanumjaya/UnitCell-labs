import { ShieldCheck, Zap, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Scientific Excellence",
      description:
        "Our team brings decades of combined expertise in crystal engineering and solid-state chemistry.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerated Timelines",
      description:
        "Optimized screening protocols designed to deliver robust results in the shortest possible time.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description:
        "Comprehensive analytical reports that provide deep understanding for regulatory submissions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Partnership",
      description:
        "We work as an extension of your team, ensuring transparent and continuous scientific discussion.",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-24 overflow-hidden bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff]">
      
      {/* Decorative Glow (same as Industries section) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-300/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Why Partner With Us?
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Delivering world-class solid-state research services with a focus on
            quality, reliability, and scientific innovation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-5 md:p-8 rounded-3xl bg-white/60 border border-sky-100 backdrop-blur-md hover:border-cyan-400/40 transition-all group text-center shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-cyan-700 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;