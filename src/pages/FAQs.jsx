function FAQs() {
  const faqs = [
    {
      question: "What is polymorph screening?",
      answer: "Polymorph screening is the process of identifying different crystalline forms of an API using multiple crystallization conditions. Different polymorphs can have significantly different physicochemical properties that impact drug performance, stability, and manufacturability.",
    },
    {
      question: "Why is solid-state characterization important?",
      answer: "Solid-state properties can significantly impact solubility, stability, manufacturability, and bioavailability of pharmaceutical products. Understanding these properties is crucial for developing robust formulations and ensuring consistent product quality.",
    },
    {
      question: "Do you support customized research projects?",
      answer: "Yes. We provide customized solid-state research support based on project requirements, molecule properties, and development objectives. Every project is designed to meet specific client needs and development goals.",
    },
    {
      question: "Can you support patent-oriented screening?",
      answer: "Yes. We provide scientifically designed screening approaches that may support lifecycle management and intellectual property strategies. Our expertise helps identify novel solid forms that can extend product protection.",
    },
    {
      question: "Do you provide customized project plans?",
      answer: "Yes. Every project is designed based on API properties, client objectives, timelines, and development stage. We work closely with clients to develop project plans that align with their specific needs and regulatory requirements.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve pharmaceutical companies, biotech organizations, specialty chemical industries, agrochemical companies, nutraceutical companies, material science organizations, research institutions, CDMOs, CROs, and startups in research and development.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope and complexity. Polymorph screening typically takes 4-8 weeks, while comprehensive characterization studies may take 8-12 weeks. We provide detailed timelines during project planning.",
    },
    {
      question: "Do you maintain confidentiality?",
      answer: "Yes, confidentiality is paramount. We maintain strict confidentiality and professional integrity throughout every project. All client information and data are handled with the highest level of security and privacy.",
    },
    {
      question: "What analytical techniques do you use?",
      answer: "We utilize advanced analytical techniques including Powder X-ray Diffraction (PXRD), Single Crystal X-ray Diffraction (SC-XRD), Differential Scanning Calorimetry (DSC), Thermogravimetric Analysis (TGA), FTIR, Raman, Dynamic Vapor Sorption (DVS), and various microscopy techniques.",
    },
    {
      question: "Can you support regulatory submissions?",
      answer: "Our studies are designed considering pharmaceutical development and regulatory expectations. We can provide data packages suitable for regulatory submissions and work with clients to ensure compliance with regulatory requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-20 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-6 text-center">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Your Questions Answered
          </h1>
          <p className="mx-auto max-w-3xl text-slate-400 leading-8 text-lg">
            Find answers to common questions about our pharmaceutical solid-state research services and how we can support your development programs.
          </p>
        </header>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-8 shadow-2xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0A1628]/95 hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-4 group-hover:text-cyan-200 transition-colors">
                {faq.question}
              </h3>
              <p className="text-slate-300 leading-7 group-hover:text-slate-200 transition-colors">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <section className="rounded-[2rem] border border-cyan-400/10 bg-[#07101F]/90 p-10 shadow-2xl text-center">
          <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Still Have Questions?</h2>
          <p className="text-slate-300 leading-8 mb-8 max-w-2xl mx-auto">
            Our scientific team is ready to discuss your specific project requirements and provide detailed answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:scale-105"
            >
              Contact Our Team
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-cyan-500/10 hover:scale-105"
            >
              Schedule a Discussion
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQs;