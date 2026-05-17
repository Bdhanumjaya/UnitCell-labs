import { 
  Pill, 
  Dna, 
  FlaskConical, 
  Sprout, 
  Leaf, 
  Microscope, 
  GraduationCap, 
  Factory, 
  Rocket,
  CheckCircle2
} from "lucide-react";
import pageBg from "../assets/page-bg.png";

function Industries() {
  const industries = [
    {
      title: "Pharmaceutical Companies",
      description: "Supporting innovator and generic drug development programs with comprehensive solid-state solutions.",
      icon: <Pill className="w-8 h-8" />,
    },
    {
      title: "Biotech Organizations",
      description: "Providing specialized solid-state research for biologics and small molecule development.",
      icon: <Dna className="w-8 h-8" />,
    },
    {
      title: "Specialty Chemical Industries",
      description: "Delivering advanced characterization and crystallization support for specialty chemicals.",
      icon: <FlaskConical className="w-8 h-8" />,
    },
    {
      title: "Agrochemical Companies",
      description: "Supporting formulation development and stability studies for agrochemical products.",
      icon: <Sprout className="w-8 h-8" />,
    },
    {
      title: "Nutraceutical Companies",
      description: "Providing solid-state research for dietary supplements and nutraceutical formulations.",
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: "Material Science Organizations",
      description: "Supporting advanced materials development with solid-state characterization expertise.",
      icon: <Microscope className="w-8 h-8" />,
    },
    {
      title: "Research Institutions and Universities",
      description: "Collaborating on fundamental research and academic-industrial partnerships.",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "CDMOs and CROs",
      description: "Providing specialized solid-state services for contract development and manufacturing.",
      icon: <Factory className="w-8 h-8" />,
    },
    {
      title: "Startups in Research and Development",
      description: "Supporting innovative startups with cost-effective solid-state research solutions.",
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const advantages = [
    "Scientific excellence in pharmaceutical solid-state chemistry",
    "Customized solutions for each API and development stage",
    "Confidentiality and integrity throughout the project",
    "Regulatory-oriented experimental design",
    "Efficient timelines that reduce cost and risk",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Full Width Banner Section */}
      <div className="relative h-[200px] md:h-[350px] overflow-hidden group shadow-2xl">
        <img
          src={pageBg}
          alt="Industries Header"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
            <h2 className="text-white/20 text-6xl md:text-8xl font-black uppercase tracking-widest select-none">
              Industries
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-6 text-center">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">
            Industries We Serve
          </p>
          <h1 className="text-4xl font-extrabold sm:text-4xl">
            Supporting Innovation Across Industries
          </h1>
          <p className="mx-auto max-w-3xl text-slate-400 leading-8 text-lg">
            UNIT CELL Labs collaborates with diverse industries to advance pharmaceutical, chemical, and material science development through expert solid-state research services.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-8 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0A1628]/95 hover:shadow-cyan-500/10 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {industry.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <section className="rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full" />
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">Why Choose UNIT CELL Labs?</h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-lg">
              Our team applies deep expertise in pharmaceutical solid-state chemistry to solve complex development challenges across industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="group flex items-start gap-4 rounded-2xl border border-cyan-400/5 bg-[#0C172B]/50 p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-[#0F1B2E]/95"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-slate-300 group-hover:text-white transition-colors leading-relaxed font-medium">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);
}

export default Industries;