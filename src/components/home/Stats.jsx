import { motion } from "framer-motion";
import StatCounter from "./StatCounter";

const Stats = () => (
  <section className="relative z-10 px-6 py-4 bg-slate-950/50 backdrop-blur-md border-y border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        {
          value: "7+",
          label: "Years of specialized research",
          sub: "Global expertise",
        },
        {
          value: "50+",
          label: "Pharma partners supported",
          sub: "Innovation first",
        },
        {
          value: "150+",
          label: "Successful projects",
          sub: "Proven track record",
        },
        {
          value: "100%",
          label: "Confidentiality guaranteed",
          sub: "Trusted collaboration",
        },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center space-y-2"
        >
          <h2 className="text-6xl font-black text-cyan-400">
            <StatCounter targetValue={stat.value} />
          </h2>
          <p className="text-xl font-bold text-white">{stat.label}</p>
          <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">
            {stat.sub}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
