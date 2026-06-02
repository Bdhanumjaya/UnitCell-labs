import { useEffect } from "react";
import { motion } from "framer-motion";
import pageBg from "../assets/page-bg.png";
import PageBanner from "../components/PageBanner";
import LeadershipTeam from "../components/LeadershipTeam";
import { Award, Eye, Rocket, CheckCircle } from "lucide-react";

function About() {
  useEffect(() => {
    document.title = "About Unit Cell Labs — Expert Solid-State CRO Based in India";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Learn how Unit Cell Labs brings world-class solid-state pharmaceutical expertise to global drug development programs — combining rigorous science with cost-effective, India-based operations.";
  }, []);

  const approach = [
    {
      title: "Science-first",
      desc: "Every recommendation is grounded in rigorous experimental data and deep mechanistic understanding.",
    },
    {
      title: "Collaborative",
      desc: "We work as a seamless extension of your team, not a black-box vendor.",
    },
    {
      title: "Transparent",
      desc: "Regular updates, clear interim reports, and direct access to the scientists leading your project.",
    },
    {
      title: "Pragmatic",
      desc: "We focus on answering the right questions, not generating data for its own sake.",
    },
    {
      title: "Regulatory-aware",
      desc: "Our experimental designs and reports are structured from day one to support your IND, IMPD, or NDA submissions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Full Width Banner Section */}
      <PageBanner title="About Us" alt="About Header" />

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Header & Positioning statement */}
          <header className="space-y-8 text-center">
            <p className="text-[#005dad] uppercase tracking-[0.35em] text-xs sm:text-sm font-bold">
              About Unit Cell Labs
            </p>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl text-slate-900 mx-auto max-w-4xl tracking-tight">
              We Exist Because Solid-State Science Is Hard — and It Matters.
            </h1>
            <div className="max-w-4xl mx-auto space-y-6 text-left sm:text-center">
              <p className="text-slate-800 leading-8 text-base sm:text-lg font-semibold">
                Drug development is full of critical decisions. Few are more consequential — or more often underestimated — than solid form selection. A molecule's polymorphic form, crystallinity, particle size, and hygroscopicity directly determine its bioavailability, manufacturability, shelf life, and regulatory fate.
              </p>
              <p className="text-slate-700 leading-8 text-base sm:text-lg font-medium">
                Unit Cell Labs was founded to be the dedicated solid-state partner that small and mid-size pharma and biotech companies need — but rarely have in-house. We bring senior scientific expertise, purpose-built analytical capabilities, and a clear focus on what matters: helping your program advance with confidence.
              </p>
            </div>
            <div className="h-1 w-20 bg-[#005dad] mx-auto mt-6" />
          </header>

          {/* Our Approach Section */}
          <section className="border border-sky-100 bg-white/60 backdrop-blur-md p-8 md:p-12 shadow-lg hover:border-[#005dad]/30 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-8">
              Our Approach
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {approach.map((item, i) => (
                <div
                  key={i}
                  className="border border-sky-100 bg-white/70 p-6 hover:border-[#005dad]/30 hover:scale-105 transition-all shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#005dad] shrink-0" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why India - Why Now Section */}
          <section className="border border-[#005dad]/20 bg-gradient-to-r from-blue-600/5 to-[#005dad]/5 p-8 md:p-12 shadow-lg backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#005dad]/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] items-center">
              
              <div className="space-y-4">
                <p className="text-[#00427b] uppercase tracking-widest text-xs font-bold">
                  Geographical Advantage
                </p>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Why India — Why Now
                </h2>
                <div className="h-1 w-16 bg-[#005dad]" />
              </div>

              <div className="space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  India has one of the world's deepest talent pools in pharmaceutical sciences, with a thriving ecosystem of generic and innovator drug development. Unit Cell Labs was established to channel that scientific capability into specialized solid-state CRO services — offering global pharma and biotech access to world-class science with the responsiveness and cost-effectiveness that India uniquely enables.
                </p>
                <p>
                  We serve clients across India, the US, Europe, and beyond — delivering internationally recognized scientific standards with local agility.
                </p>
              </div>

            </div>
          </section>

          {/* Leadership Team Component */}
          <LeadershipTeam />

        </div>
      </div>
    </div>
  );
}

export default About;