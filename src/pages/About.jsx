function About() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-20 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <section className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] items-center">
            <div className="space-y-6">
              <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">
                About UNIT CELL Labs
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-3xl">
                Specialized pharmaceutical solid-state research for reliable drug development.
              </h1>
              <p className="max-w-3xl text-slate-300 leading-8 text-lg">
                UNIT CELL Labs is a specialized pharmaceutical solid-state research company focused on delivering scientific solutions for drug substance and drug product development. We support pharmaceutical, biotech, specialty chemical, material science, agrochemical, nutraceutical, and research organizations with comprehensive solid-form screening, characterization, crystallization process development, and preformulation studies.
              </p>
              <p className="text-slate-300 leading-8 text-lg">
                Our mission is to help clients minimize development risks, improve product performance, and build strong intellectual property opportunities through deep understanding of solid-state chemistry.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-cyan-400/10 bg-[#0C1627]/90 p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0D1B31]/95 hover:scale-105">
              <h2 className="text-2xl font-semibold text-cyan-300">Our Core Strengths</h2>
              <ul className="space-y-3 text-slate-300">
                <li>Expertise in pharmaceutical solid-state chemistry</li>
                <li>Customized screening strategies for APIs</li>
                <li>Support for pharmaceutical and material development programs</li>
                <li>Data-driven scientific approach</li>
                <li>Fast project execution with confidentiality</li>
                <li>Advanced analytical characterization support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Our Approach</h2>
            <p className="text-slate-300 leading-8 mb-6">
              We combine scientific expertise, regulatory understanding, and practical development strategies to provide high-quality and reliable data for diverse industrial research and development programs.
            </p>
            <div className="space-y-4">
              {[
                "Scientific excellence in solid-state chemistry",
                "Regulatory-oriented development strategies",
                "Confidential collaboration with project teams",
                "Robust data for formulation and lifecycle planning",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-105">
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Workflow</h2>
            <div className="space-y-5">
              {[
                { step: "Step 1", title: "Scientific Discussion", detail: "Understanding molecule information, project goals, and development challenges." },
                { step: "Step 2", title: "Proposal and Planning", detail: "Defining scope, timelines, deliverables, and experimental strategy." },
                { step: "Step 3", title: "Experimental Execution", detail: "Conducting systematic screening and characterization studies." },
                { step: "Step 4", title: "Data Analysis", detail: "Scientific interpretation of results and comparative assessment." },
                { step: "Step 5", title: "Reporting and Recommendations", detail: "Detailed reporting with conclusions and development recommendations." },
              ].map((item) => (
                <div key={item.step} className="rounded-3xl border border-cyan-400/10 bg-[#0C172B]/80 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0D1B35]/90 hover:scale-105">
                  <p className="text-cyan-300 font-semibold">{item.step}</p>
                  <h3 className="text-xl font-semibold text-white mt-2">{item.title}</h3>
                  <p className="text-slate-300 mt-2 leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#081422]/95 hover:shadow-cyan-500/10">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Vision & Mission</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-3">Vision</h3>
              <p className="text-slate-300 leading-7">To become a trusted scientific partner in pharmaceutical solid-state research and development by delivering innovative, reliable, and impactful solutions.</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-[#0B1324]/90 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0C1628]/95 hover:scale-105">
              <h3 className="text-xl font-semibold text-white mb-3">Mission</h3>
              <p className="text-slate-300 leading-7">To support industrial innovation and research through high-quality solid-state science, scientific integrity, and customer-focused collaboration.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
