import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import pageBg from "../assets/page-bg.png";
import PageBanner from "../components/PageBanner";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is polymorph screening?",
      answer:
        "Polymorph screening is the process of identifying different crystalline forms of an API using multiple crystallization conditions. Different polymorphs can have significantly different physicochemical properties that impact drug performance, stability, and manufacturability.",
    },
    {
      question: "Why is solid-state characterization important?",
      answer:
        "Solid-state properties can significantly impact solubility, stability, manufacturability, and bioavailability of pharmaceutical products. Understanding these properties is crucial for developing robust formulations and ensuring consistent product quality.",
    },
    {
      question: "Do you support customized research projects?",
      answer:
        "Yes. We provide customized solid-state research support based on project requirements, molecule properties, and development objectives. Every project is designed to meet specific client needs and development goals.",
    },
    {
      question: "Can you support patent-oriented screening?",
      answer:
        "Yes. We provide scientifically designed screening approaches that may support lifecycle management and intellectual property strategies. Our expertise helps identify novel solid forms that can extend product protection.",
    },
    {
      question: "Do you provide customized project plans?",
      answer:
        "Yes. Every project is designed based on API properties, client objectives, timelines, and development stage. We work closely with clients to develop project plans that align with their specific needs and regulatory requirements.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve pharmaceutical companies, biotech organizations, specialty chemical industries, agrochemical companies, nutraceutical companies, material science organizations, research institutions, CDMOs, CROs, and startups in research and development.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on the scope and complexity. Polymorph screening typically takes 4-8 weeks, while comprehensive characterization studies may take 8-12 weeks. We provide detailed timelines during project planning.",
    },
    {
      question: "Do you maintain confidentiality?",
      answer:
        "Yes, confidentiality is paramount. We maintain strict confidentiality and professional integrity throughout every project. All client information and data are handled with the highest level of security and privacy.",
    },
    {
      question: "What analytical techniques do you use?",
      answer:
        "We utilize advanced analytical techniques including Powder X-ray Diffraction (PXRD), Single Crystal X-ray Diffraction (SC-XRD), Differential Scanning Calorimetry (DSC), Thermogravimetric Analysis (TGA), FTIR, Raman, Dynamic Vapor Sorption (DVS), and various microscopy techniques.",
    },
    {
      question: "Can you support regulatory submissions?",
      answer:
        "Our studies are designed considering pharmaceutical development and regulatory expectations. We can provide data packages suitable for regulatory submissions and work with clients to ensure compliance with regulatory requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Banner Section */}
      <PageBanner title="FAQs" alt="FAQs Header" />

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <header className="space-y-6 text-center">
            <p className="text-[#005dad] uppercase tracking-[0.35em] text-sm font-semibold">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl font-extrabold sm:text-5xl text-slate-900">
              Common Scientific Inquiries
            </h1>
            <p className="mx-auto max-w-3xl text-slate-700 leading-8 text-lg">
              Find answers to common questions about our pharmaceutical
              solid-state research services and how we can support your
              development programs.
            </p>
          </header>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group border transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#005dad] bg-white/70 shadow-lg"
                    : "border-sky-100 bg-white/60 hover:border-[#005dad]/30"
                } p-5 backdrop-blur-md`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-[#005dad] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-700 leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="border border-sky-100 bg-white/60 backdrop-blur-md p-10 shadow-lg text-center">
            <h2 className="text-3xl font-semibold text-[#005dad] mb-6">
              Still Have Questions?
            </h2>

            <p className="text-slate-700 leading-8 mb-8 max-w-2xl mx-auto">
              Our scientific team is ready to discuss your specific project
              requirements and provide detailed answers to your questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#005dad] px-8 py-4 text-sm font-semibold text-white hover:bg-[#004c8c] transition hover:scale-105"
              >
                Contact Our Team
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-sky-200 bg-white/70 px-8 py-4 text-sm font-semibold text-slate-900 hover:border-[#005dad]/30 hover:scale-105 transition"
              >
                Schedule a Discussion
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default FAQs;