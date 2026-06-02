import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layers, FlaskConical, Microscope, Workflow, Combine, ShieldCheck, ClipboardCheck, Award } from "lucide-react";
import pageBg from "../assets/page-bg.png";
import PageBanner from "../components/PageBanner";

function Services() {
  useEffect(() => {
    document.title = "Solid-State Pharma Services — Polymorph Screening, Crystallization, Characterization | Unit Cell Labs";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Explore Unit Cell Labs' full range of solid-state pharmaceutical services: polymorph screening, salt selection, ASD development, stability studies, and regulatory consulting.";
  }, []);

  const services = [
    {
      id: "polymorph",
      title: "Polymorph Screening & Selection",
      description:
        "Identify and characterize all accessible polymorphic forms of your API to select the optimal solid form for development — one with the right combination of stability, solubility, and processability.",
      icon: <Layers className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "High-throughput crystallization screening using diverse solvent systems and conditions",
        "Thermodynamic and kinetic polymorph profiling",
        "Comparative stability assessment (thermal, humidity, mechanical stress)",
        "Solubility and dissolution ranking across forms",
        "Selection rationale documentation aligned with ICH Q6A",
      ],
      footer:
        "Why it matters: Choosing the wrong polymorph early is one of the most costly mistakes in drug development — leading to unexpected form changes, failed stability studies, or regulatory hold-ups. We eliminate that risk systematically.",
    },
    {
      id: "salt",
      title: "Salt & Co-Crystal Screening",
      description:
        "Expand your solid-form landscape to improve aqueous solubility, bioavailability, stability, or processability through rational salt and co-crystal design.",
      icon: <FlaskConical className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "pKa-based counterion selection and rational co-former identification",
        "Systematic salt and co-crystal screening (solution, slurry, mechanochemical)",
        "Characterization of hits by XRPD, DSC, TGA, and IR/Raman",
        "Physicochemical profiling: solubility, hygroscopicity, chemical stability",
        "Down-selection support and development candidate recommendation",
      ],
      footer:
        "Benefits: Designed counterion down-selection supports chemical stability and ensures robust patent and regulatory filings.",
    },
    {
      id: "characterization",
      title: "Solid-State Characterization",
      description:
        "Rigorous analytical characterization of your API or drug product intermediate — providing the data you need for development decisions and regulatory submissions.",
      icon: <Microscope className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "X-Ray Powder Diffraction (XRPD) — form identification and quantification",
        "Differential Scanning Calorimetry (DSC) — melting, polymorphic transitions, glass transition",
        "Thermogravimetric Analysis (TGA) — solvate/hydrate profiling, decomposition",
        "Dynamic Vapor Sorption (DVS) — hygroscopicity and moisture uptake behavior",
        "FTIR / Raman Spectroscopy — structural fingerprinting and phase identification",
        "Hot-Stage Microscopy — real-time observation of phase transitions",
        "Particle size analysis (laser diffraction) and morphology assessment (optical microscopy)",
      ],
      footer:
        "Capabilities: State-of-the-art analytical tools backing every single scientific finding with absolute precision.",
    },
    {
      id: "crystallization",
      title: "Crystallization Process Development",
      description:
        "Design, optimize, and scale robust crystallization processes that deliver consistent API with controlled particle attributes — ready for technology transfer and manufacturing.",
      icon: <Workflow className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "Solubility and supersaturation profiling across temperature and solvent systems",
        "Nucleation and growth kinetics study",
        "Anti-solvent, cooling, and reactive crystallization design",
        "Particle size and morphology control",
        "Batch-to-batch reproducibility studies",
        "Scale-up guidance and technology transfer documentation",
      ],
      footer:
        "Outcome: A crystallization process that reliably delivers the right solid form, the right purity, and the right physical properties — every time.",
    },
    {
      id: "asd",
      title: "Amorphous Solid Dispersion (ASD) Development",
      description:
        "For poorly soluble APIs, amorphous solid dispersions can dramatically improve bioavailability. We design and characterize ASD formulations with a solid-state-first approach.",
      icon: <Combine className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "Polymer screening and drug-polymer miscibility assessment",
        "Spray drying and hot melt extrusion feasibility studies",
        "Physical stability and recrystallization risk assessment",
        "Dissolution and release characterization",
        "Bridging to enabling formulation and early clinical supply",
      ],
      footer:
        "Benefits: Bypasses bioavailability limits for highly hydrophobic, low solubility molecules.",
    },
    {
      id: "stability",
      title: "Stability Studies (Solid-State)",
      description:
        "Systematic solid-state stability evaluation to support ICH guideline-aligned development programs and regulatory submissions.",
      icon: <ShieldCheck className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "Stress testing under heat, humidity, light, and mechanical conditions",
        "Short- and long-term stability studies under ICH conditions",
        "Form change detection and quantification",
        "Compatibility studies with excipients",
        "Stability summary reports suitable for IND / IMPD submissions",
      ],
      footer:
        "Scope: Rigorous solid-state testing ensuring solid form durability throughout the API storage and shelf life.",
    },
    {
      id: "preformulation",
      title: "Preformulation & Physical Property Profiling",
      description:
        "Early physicochemical characterization to guide formulation strategy and identify developability risks before committing resources to a development candidate.",
      icon: <ClipboardCheck className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "pKa and log P/D determination",
        "Aqueous and pH-dependent solubility profiling",
        "Chemical stability screening",
        "Hygroscopicity profiling",
        "Powder characterization: flowability, compressibility, bulk/tap density",
        "Preformulation summary reports",
      ],
      footer:
        "Outcome: Clear developability maps that outline formulation risks and streamline pre-clinical transitions.",
    },
    {
      id: "regulatory",
      title: "Regulatory & CMC Consulting",
      description:
        "Expert guidance on solid-state strategy for IND, IMPD, NDA, and ANDA submissions — ensuring your CMC package is scientifically robust and regulator-ready.",
      icon: <Award className="w-8 h-8 text-[#005dad]" />,
      bullets: [
        "Solid-state risk assessment and development strategy",
        "ICH Q6A polymorph control strategy",
        "CMC section writing and review support",
        "Regulatory query response preparation",
        "Scientific advisory for solid-state-related development challenges",
      ],
      footer:
        "Offerings: Regulator-ready section compilation aligned with global drug authority expectations.",
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
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Full Width Banner Section */}
      <PageBanner title="Services" alt="Services Header" />

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <header className="space-y-6 text-center">
          <p className="text-[#005dad] uppercase tracking-[0.35em] text-sm font-semibold">
            Our Services
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-slate-900">
            Our Services
          </h1>
          <p className="mx-auto max-w-3xl text-slate-700 text-lg md:text-xl font-bold italic tracking-wide text-[#005dad] mt-2">
            Comprehensive solid-state solutions — from first crystal to clinical readiness.
          </p>
          <p className="mx-auto max-w-4xl text-slate-655 leading-8 text-base md:text-lg mt-4 font-medium">
            We offer a focused suite of services designed to address every solid-state challenge in the small-molecule drug development pipeline. Each engagement is tailored to your program's stage, timeline, and regulatory requirements.
          </p>
          <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
        </header>

        {/* Services Grid */}
        <div className="grid gap-8">
          {services.map((service, i) => (
            <motion.section
              id={service.id}
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="scroll-mt-28 border border-sky-100 bg-white/60 backdrop-blur-md p-8 md:p-12 shadow-lg transition-all duration-300 hover:border-[#005dad]/30 hover:shadow-blue-100/10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4 flex-1">
                  
                  {/* Title and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white shadow-inner shrink-0">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-700 leading-7 text-sm sm:text-base font-semibold">
                    {service.description}
                  </p>
                </div>

                <span className="inline-flex border border-blue-200 bg-blue-50/50 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#005dad] self-start lg:self-center">
                  Key Scope
                </span>
              </div>

              {/* Bullet Details Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.bullets.map((item) => (
                  <div
                    key={item}
                    className="border border-sky-100/50 bg-white/70 p-5 shadow-sm hover:border-[#005dad]/30 hover:scale-[1.02] transition-all"
                  >
                    <p className="text-slate-800 text-xs sm:text-sm leading-6 font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Unique Footer / Rationale Section */}
              <div className="mt-8 pt-6 border-t border-sky-100/60">
                <p className="text-[#00427b] text-xs sm:text-sm font-bold leading-relaxed italic">
                  {service.footer}
                </p>
              </div>

            </motion.section>
          ))}
        </div>

        {/* Bottom Section */}
        <section className="border border-sky-100 bg-white/60 backdrop-blur-md p-8 md:p-12 shadow-lg">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Industries We Serve
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {industries.map((item) => (
                  <div
                    key={item}
                    className="border border-sky-100 bg-white/70 p-4 text-slate-800 text-xs sm:text-sm font-semibold hover:border-[#005dad]/30 hover:scale-105 transition-all shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Our Differentiating Approach
              </h2>
              <ul className="space-y-4 text-slate-800">
                {advantages.map((item) => (
                  <li
                    key={item}
                    className="border border-sky-100 bg-white/70 p-5 font-semibold text-xs sm:text-sm shadow-sm hover:border-[#005dad]/30 hover:scale-[1.02] transition-all flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#005dad] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        </div>
      </div>
    </div>
  );
}

export default Services;