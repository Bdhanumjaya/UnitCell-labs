import { Database, BarChart3 } from "lucide-react";

const Methodology = () => (
  <section className="relative z-10 px-6 py-2">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="relative space-y-8">
          {[
            {
              step: "01",
              title: "Characterization",
              desc: "Initial API analysis using XRD, DSC, and TGA.",
            },
            {
              step: "02",
              title: "Design of Experiments",
              desc: "Scientific screening using high-throughput methods.",
            },
            {
              step: "03",
              title: "Optimization",
              desc: "Scaling up chosen forms for robust performance.",
            },
            {
              step: "04",
              title: "Regulatory Filing",
              desc: "Comprehensive documentation for IND/NDA submissions.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <span className="text-4xl font-black text-white/10 group-hover:text-cyan-500/20 transition-colors leading-none">
                {item.step}
              </span>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2 space-y-8">
        <h2 className="text-4xl md:text-5xl font-black">
          Our Scientific Methodology
        </h2>
        <p className="text-xl text-slate-400 leading-relaxed">
          We employ a rigorous, data-driven approach to every project. By
          combining decades of expertise with state-of-the-art analytical tools,
          we ensure that every decision is backed by solid scientific evidence.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <Database className="text-cyan-400 mb-4" />
            <p className="text-sm font-bold">Data-Driven Insights</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <BarChart3 className="text-cyan-400 mb-4" />
            <p className="text-sm font-bold">Statistical Rigor</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Methodology;
