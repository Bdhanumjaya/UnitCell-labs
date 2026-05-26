import { Database, BarChart3 } from "lucide-react";

const Methodology = () => (
  <section className="relative z-10 px-6 py-20 overflow-hidden bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff]">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-300/20 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
      
      <div className="order-2 lg:order-1 relative">
        <div className="absolute inset-0 bg-sky-300/10 blur-[100px] rounded-full" />

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
              
              <span className="text-5xl font-black text-cyan-700/30 group-hover:text-cyan-700/50 transition-colors leading-none">
                {item.step}
              </span>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h4>

                <p className="text-slate-700 text-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-8">
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">
          Our Scientific Methodology
        </h2>

        <p className="text-xl text-slate-700 leading-relaxed">
          We employ a rigorous, data-driven approach to every project. By
          combining decades of expertise with state-of-the-art analytical tools,
          we ensure that every decision is backed by solid scientific evidence.
        </p>

        <div className="grid grid-cols-2 gap-4">
          
          <div className="p-6 rounded-2xl bg-white/60 border border-sky-200 shadow-lg backdrop-blur-md">
            <Database className="text-cyan-700 mb-4" />
            <p className="text-sm font-bold text-slate-900">
              Data-Driven Insights
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/60 border border-sky-200 shadow-lg backdrop-blur-md">
            <BarChart3 className="text-cyan-700 mb-4" />
            <p className="text-sm font-bold text-slate-900">
              Statistical Rigor
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Methodology;