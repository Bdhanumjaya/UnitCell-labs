function Services() {
  const services = [
    {
      id: "polymorph",
      title: "Polymorph Screening",
      description: "Comprehensive polymorph screening studies to identify and evaluate crystalline forms of pharmaceutical APIs.",
      bullets: [
        "Crystallization screening using diverse solvents and conditions",
        "Cooling, evaporation, anti-solvent, slurry, and thermal methods",
        "Identification of stable and metastable forms",
        "Hygroscopicity and thermal stability evaluation",
        "Solid-form selection support",
        "Patent-oriented screening strategies",
      ],
      footer: "Deliverables: Experimental screening report, PXRD, DSC, TGA, and spectroscopic data.",
    },
    {
      id: "salt",
      title: "Salt Screening and Selection",
      description: "Development of pharmaceutically acceptable salts to improve solubility, stability, bioavailability, and manufacturability.",
      bullets: [
        "Salt former selection strategy",
        "Acid-base compatibility studies",
        "Crystallization optimization",
        "Salt characterization and comparison",
        "Stability and processability evaluation",
      ],
      footer: "Benefits: Improved dissolution behavior, enhanced stability profile, better formulation compatibility.",
    },
    {
      id: "cocrystal",
      title: "Co-crystal Screening",
      description: "Systematic co-crystal screening to identify novel solid forms with improved physicochemical properties.",
      bullets: [
        "Co-former selection using scientific rationale",
        "Solvent-assisted and mechanochemical screening",
        "Crystal engineering support",
        "Co-crystal characterization studies",
        "Comparative performance evaluation",
      ],
      footer: "Applications: Solubility enhancement, stability improvement, IP and differentiation opportunities.",
    },
    {
      id: "crystallization",
      title: "Crystallization Process Development",
      description: "Optimization of crystallization processes for robust and scalable manufacturing.",
      bullets: [
        "Solvent system optimization",
        "Process parameter evaluation",
        "Control of particle size and morphology",
        "Scale-up feasibility studies",
        "Isolation and drying optimization",
      ],
      footer: "Outcomes: Reproducible crystallization process, improved yield and purity, manufacturing-ready process understanding.",
    },
    {
      id: "characterization",
      title: "Solid-State Characterization",
      description: "Comprehensive analytical characterization of pharmaceutical solid forms.",
      bullets: [
        "Powder X-ray Diffraction (PXRD)",
        "Single Crystal X-ray Diffraction (SC-XRD)",
        "Differential Scanning Calorimetry (DSC)",
        "Thermogravimetric Analysis (TGA)",
        "FTIR, Raman, DVS, Microscopy, Particle Size Analysis",
      ],
      footer: "What We Provide: Structural and thermal understanding, phase identification, stability assessment.",
    },
    {
      id: "preformulation",
      title: "Preformulation Studies",
      description: "Scientific evaluation of API properties to support formulation and product development.",
      bullets: [
        "Solubility studies",
        "Hygroscopicity assessment",
        "Compatibility studies",
        "Stability evaluation",
        "Flow and compressibility assessment",
      ],
      footer: "Benefits: Early development risk reduction, better formulation decisions, improved product understanding.",
    },
    {
      title: "Solid-State R&D Support",
      description: "Comprehensive support for organizations requiring advanced solid-state understanding and development strategies.",
      bullets: [
        "Solid-form identification and comparison",
        "Stability-oriented studies",
        "Process and manufacturability evaluation",
        "Crystal engineering strategies",
        "Data interpretation and scientific reporting",
      ],
      footer: "Support Includes: Research documentation, project-level guidance, development-focused strategy.",
    },
  ];

  const industries = [
    "Pharmaceutical companies",
    "Biotech organizations",
    "Specialty chemical industries",
    "Agrochemical companies",
    "Nutraceutical companies",
    "Material science organizations",
    "Research institutions and universities",
    "CDMOs and CROs",
    "Startups in research and development",
  ];

  const advantages = [
    "Scientific excellence in solid-state chemistry",
    "Customized solutions for each API and development stage",
    "Confidentiality and integrity throughout the project",
    "Regulatory-oriented experimental design",
    "Efficient timelines that reduce cost and risk",
  ];

  return (
    <div className="bg-[#020617] text-white px-6 py-20 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-6 text-center">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">Our Services</p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Pharmaceutical solid-state services for drug development, formulation and manufacturing support.</h1>
          <p className="mx-auto max-w-3xl text-slate-400 leading-8">
            UNIT CELL Labs provides focused solid-state research services that support regulatory, formulation and intellectual property objectives for development programs across pharma, biotech and material science.
          </p>
        </header>

        <div className="grid gap-8">
          {services.map((service) => (
            <section id={service.id} key={service.title} className="rounded-[2rem] border border-cyan-400/10 bg-[#0B1324]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:shadow-cyan-500/10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold text-cyan-300">{service.title}</h2>
                  <p className="text-slate-300 leading-7">{service.description}</p>
                </div>
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-slate-200">Key Outcomes</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.bullets.map((item) => (
                  <div key={item} className="rounded-3xl border border-cyan-400/10 bg-[#07101F]/90 p-5">
                    <p className="text-slate-300 text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-slate-400 text-sm italic">{service.footer}</p>
            </section>
          ))}
        </div>

        <section className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-cyan-300 mb-5">Industries We Serve</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {industries.map((item) => (
                  <div key={item} className="rounded-3xl border border-cyan-400/10 bg-[#0C172B]/90 p-4 text-slate-300">{item}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-cyan-300 mb-5">Why Choose Us</h2>
              <ul className="space-y-4 text-slate-300">
                {advantages.map((item) => (
                  <li key={item} className="rounded-3xl border border-cyan-400/10 bg-[#0C172B]/90 p-5">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
