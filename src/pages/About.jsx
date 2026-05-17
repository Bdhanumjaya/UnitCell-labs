import pageBg from "../assets/page-bg.png";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";

function About() {
  const team = [
    {
      name: "Dr. Arunesh",
      role: "Scientific Director",
      bio: "Over 20 years of expertise in crystal engineering and solid-state pharmaceutical development.",
      image: team1
    },
    {
      name: "Dr. Saranya",
      role: "Principal Scientist",
      bio: "Specializes in high-throughput screening and advanced polymorphic characterization techniques.",
      image: team2
    },
    {
      name: "Mr. Ramesh",
      role: "Laboratory Operations Manager",
      bio: "Ensures operational excellence and scientific rigor across all laboratory processes.",
      image: team3
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Full Width Banner Section */}
      <div className="relative h-[200px] md:h-[350px] overflow-hidden group shadow-2xl">
        <img
          src={pageBg}
          alt="About Header"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
            <h2 className="text-white/20 text-6xl md:text-8xl font-black uppercase tracking-widest select-none">
              About Us
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-24">
          <header className="space-y-8 text-center">
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">
              About UNIT CELL Labs
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-4xl mx-auto max-w-4xl">
              Specialized pharmaceutical solid-state research for reliable drug development.
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-slate-300 leading-8 text-lg">
                UNIT CELL Labs is a specialized pharmaceutical solid-state research
                company focused on delivering scientific solutions for drug
                substance and drug product development. We support pharmaceutical,
                biotech, specialty chemical, material science, agrochemical,
                nutraceutical, and research organizations with comprehensive
                solid-form screening, characterization, crystallization process
                development, and preformulation studies.
              </p>
              <p className="text-slate-400 leading-8 text-lg">
                Our mission is to help clients minimize development risks, improve
                product performance, and build strong intellectual property
                opportunities through deep understanding of solid-state chemistry.
              </p>
            </div>
          </header>

          {/* Core Strengths Section */}
          <section className="rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 text-center mb-12">Our Core Strengths</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Expertise in pharmaceutical solid-state chemistry",
                "Customized screening strategies for APIs",
                "Support for pharmaceutical and material development programs",
                "Data-driven scientific approach",
                "Fast project execution with confidentiality",
                "Advanced analytical characterization support",
              ].map((strength) => (
                <div key={strength} className="p-6 rounded-2xl border border-cyan-400/10 bg-[#0C1627]/90 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0D1B31]/95 hover:scale-[1.02] flex items-center justify-center text-center">
                  <p className="text-slate-300 font-medium">{strength}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach Section */}
          <section className="rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Our Approach</h2>
            <p className="text-slate-300 leading-8 mb-6 text-lg">
              We combine scientific expertise, regulatory understanding, and practical development strategies to provide high-quality and reliable data for diverse industrial research and development programs.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Scientific excellence in solid-state chemistry",
                "Regulatory-oriented development strategies",
                "Confidential collaboration with project teams",
                "Robust data for formulation and lifecycle planning",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-105">
                  <p className="text-slate-300 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white">Our Leadership Team</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Expertise that drives scientific innovation and reliable results.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group relative rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0A1628]/95 overflow-hidden shadow-2xl">
                  <div className="relative mb-6 h-64 overflow-hidden rounded-[2rem]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm uppercase tracking-wider">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Workflow Section */}
          <section className="rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 lg:p-16 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-16 text-center">Scientific Workflow</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden lg:block -translate-x-1/2" />
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent lg:hidden" />

              <div className="space-y-12 lg:space-y-2">
                {[
                  { step: "01", title: "Scientific Discussion", detail: "Understanding molecule information, project goals, and development challenges." },
                  { step: "02", title: "Proposal and Planning", detail: "Defining scope, timelines, deliverables, and experimental strategy." },
                  { step: "03", title: "Experimental Execution", detail: "Conducting systematic screening and characterization studies." },
                  { step: "04", title: "Data Analysis", detail: "Scientific interpretation of results and comparative assessment." },
                  { step: "05", title: "Reporting and Recommendations", detail: "Detailed reporting with conclusions and development recommendations." },
                ].map((item, index) => (
                  <div key={item.step} className={`relative flex items-center gap-8 lg:gap-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0B1324] text-cyan-300 font-bold text-lg z-10 transition-all duration-300 lg:absolute lg:left-1/2 lg:-translate-x-1/2 group-hover:border-cyan-400">
                      {item.step}
                    </div>
                    <div className={`flex-1 lg:w-[45%] ${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20 lg:text-left"}`}>
                      <div className="rounded-2xl border border-cyan-400/5 bg-[#0C172B]/40 p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-[#0D1B35]/60">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-slate-400 mt-2 leading-7">{item.detail}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-[45%]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="rounded-[2.5rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 lg:p-16 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-8 text-center">Vision & Mission</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-slate-300 leading-8 text-lg">To become a trusted scientific partner in pharmaceutical solid-state research and development by delivering innovative, reliable, and impactful solutions.</p>
              </div>
              <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-slate-300 leading-8 text-lg">To support industrial innovation and research through high-quality solid-state science, scientific integrity, and customer-focused collaboration.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
