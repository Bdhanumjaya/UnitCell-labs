import {
  Microscope,
  Atom,
  FlaskConical,
  Waves,
  Snowflake,
  ShieldCheck,
  Factory,
} from "lucide-react";
import pageBg from "../assets/page-bg.png";

function Expertise() {
  const expertiseAreas = [
    {
      title: "Polymorphism",
      description:
        "Expert identification and characterization of polymorphic forms, including metastable and stable crystal structures.",
      icon: Microscope,
      details: [
        "Form screening and identification",
        "Stability assessment",
        "Thermodynamic relationships",
        "Patent landscape analysis",
      ],
    },
    {
      title: "Crystal Engineering",
      description:
        "Advanced crystal engineering approaches for designing solid forms with desired physicochemical properties.",
      icon: Atom,
      details: [
        "Molecular design principles",
        "Supramolecular interactions",
        "Crystal structure prediction",
        "Property optimization",
      ],
    },
    {
      title: "Salt and Co-crystal Development",
      description:
        "Systematic development of salts and co-crystals to enhance drug performance and intellectual property.",
      icon: FlaskConical,
      details: [
        "Salt former selection",
        "Co-former screening",
        "Multi-component systems",
        "IP opportunities",
      ],
    },
    {
      title: "Amorphous Systems",
      description:
        "Characterization and stabilization of amorphous forms for improved bioavailability and formulation.",
      icon: Waves,
      details: [
        "Amorphization techniques",
        "Stability studies",
        "Dissolution enhancement",
        "Formulation strategies",
      ],
    },
    {
      title: "Crystallization Science",
      description:
        "Fundamental understanding and control of crystallization processes for robust manufacturing.",
      icon: Snowflake,
      details: [
        "Nucleation and growth",
        "Process optimization",
        "Scale-up considerations",
        "Quality control",
      ],
    },
    {
      title: "Solid-State Stability",
      description:
        "Comprehensive evaluation of solid-state stability under various environmental conditions.",
      icon: ShieldCheck,
      details: [
        "Thermal stability",
        "Hygroscopicity",
        "Photostability",
        "Chemical degradation",
      ],
    },
    {
      title: "API Process Understanding",
      description:
        "Deep understanding of API manufacturing processes and their impact on solid-state properties.",
      icon: Factory,
      details: [
        "Process-solid form relationships",
        "Critical process parameters",
        "Quality by design",
        "Manufacturing robustness",
      ],
    },
  ];

  const capabilities = [
    "Scientifically designed screening approaches",
    "Advanced analytical characterization tools",
    "Regulatory-compliant methodologies",
    "Data-driven decision making",
    "Confidential project execution",
    "Fast-track development support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf8ff] via-[#dff4ff] to-[#cfefff] text-slate-900">
      
      {/* Banner Section */}
      <div className="relative h-[200px] md:h-[350px] overflow-hidden group shadow-2xl">
        <img
          src={pageBg}
          alt="Expertise Header"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cfefff]/20 to-[#cfefff]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
            <h2 className="text-slate-900/20 text-6xl md:text-8xl font-black uppercase tracking-widest select-none">
              Expertise
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Header */}
          <header className="space-y-6 text-center">
            <p className="text-cyan-700 uppercase tracking-[0.35em] text-sm font-semibold">
              Scientific Expertise
            </p>
            <h1 className="text-4xl font-extrabold sm:text-4xl text-slate-900">
              Advancing Drug Development Through Crystal Engineering
            </h1>
            <p className="mx-auto max-w-3xl text-slate-700 leading-8 text-lg">
              We utilize scientifically designed screening approaches combined
              with advanced analytical tools to provide reliable solid-state
              understanding and development solutions.
            </p>
          </header>

          {/* Expertise Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="group rounded-2xl border border-sky-100 bg-white/60 backdrop-blur-md p-5 shadow-lg transition-all duration-300 hover:border-cyan-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-cyan-100 text-cyan-700">
                    <area.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {area.title}
                  </h3>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  {area.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {area.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-sky-100 bg-white/70 px-4 py-2 text-sm text-slate-600 hover:border-cyan-300 transition-all"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <section className="rounded-[2rem] border border-sky-100 bg-white/60 backdrop-blur-md p-10 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-cyan-800 mb-4">
                Our Scientific Capabilities
              </h2>
              <p className="text-slate-700 leading-8 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep scientific knowledge
                to deliver comprehensive solid-state solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="group rounded-3xl border border-sky-100 bg-white/70 p-6 text-center hover:border-cyan-300 hover:scale-105 transition-all shadow-sm"
                >
                  <p className="text-slate-700 font-medium">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Section */}
          <section className="rounded-[2rem] border border-sky-100 bg-white/60 backdrop-blur-md p-10 text-center shadow-lg">
            <h2 className="text-3xl font-semibold text-cyan-800 mb-6">
              Scientific Solutions for Pharmaceutical Solid Forms
            </h2>

            <p className="text-slate-700 leading-8 max-w-4xl mx-auto mb-8">
              From molecule to solid-state understanding, we enable better
              pharmaceutical development through comprehensive scientific
              expertise and advanced analytical capabilities.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Research Excellence",
                  desc: "Published research and scientific collaborations drive innovation.",
                },
                {
                  title: "Technology Integration",
                  desc: "State-of-the-art analytical tools combined with expertise.",
                },
                {
                  title: "Regulatory Focus",
                  desc: "Aligned with global regulatory expectations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-sky-100 bg-white/70 p-6 hover:border-cyan-300 transition-all shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {item.desc}
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

export default Expertise;