function Industries() {
  const industries = [
    {
      title: "Pharmaceutical Companies",
      description: "Supporting innovator and generic drug development programs with comprehensive solid-state solutions.",
      icon: "💊",
    },
    {
      title: "Biotech Organizations",
      description: "Providing specialized solid-state research for biologics and small molecule development.",
      icon: "🧬",
    },
    {
      title: "Specialty Chemical Industries",
      description: "Delivering advanced characterization and crystallization support for specialty chemicals.",
      icon: "⚗️",
    },
    {
      title: "Agrochemical Companies",
      description: "Supporting formulation development and stability studies for agrochemical products.",
      icon: "🌱",
    },
    {
      title: "Nutraceutical Companies",
      description: "Providing solid-state research for dietary supplements and nutraceutical formulations.",
      icon: "🍃",
    },
    {
      title: "Material Science Organizations",
      description: "Supporting advanced materials development with solid-state characterization expertise.",
      icon: "🔬",
    },
    {
      title: "Research Institutions and Universities",
      description: "Collaborating on fundamental research and academic-industrial partnerships.",
      icon: "🎓",
    },
    {
      title: "CDMOs and CROs",
      description: "Providing specialized solid-state services for contract development and manufacturing.",
      icon: "🏭",
    },
    {
      title: "Startups in Research and Development",
      description: "Supporting innovative startups with cost-effective solid-state research solutions.",
      icon: "🚀",
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
    <div className="min-h-screen bg-[#020617] text-white px-6 py-20 lg:px-16">
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
              className="group rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-8 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0A1628]/95 hover:shadow-cyan-500/10 hover:scale-105"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
                {industry.title}
              </h3>
              <p className="text-slate-300 leading-7 group-hover:text-slate-200 transition-colors">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <section className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-4">Why Choose UNIT CELL Labs?</h2>
            <p className="text-slate-300 leading-8 max-w-3xl mx-auto">
              Our team applies deep expertise in pharmaceutical solid-state chemistry to solve complex development challenges across industries.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="group rounded-3xl border border-cyan-400/10 bg-[#0C172B]/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0F1B2E]/95 hover:shadow-lg"
              >
                <p className="text-slate-300 group-hover:text-cyan-200 transition-colors leading-7">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Industries;