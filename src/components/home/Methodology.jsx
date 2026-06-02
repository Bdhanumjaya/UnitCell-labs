import { motion } from "framer-motion";
import { MessageSquare, FileText, Play, CheckSquare, RefreshCw } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Initial Consultation (Free)",
      desc: "Tell us about your molecule and your challenge. We will assess your program's solid-state needs and recommend the right scope of work — without obligation.",
      icon: <MessageSquare className="w-5 h-5 text-[#005dad]" />,
    },
    {
      step: "Step 2",
      title: "Proposal & Scope Definition",
      desc: "We deliver a clear, written proposal outlining the experimental design, timeline, deliverables, and pricing. No ambiguity, no surprises.",
      icon: <FileText className="w-5 h-5 text-[#005dad]" />,
    },
    {
      step: "Step 3",
      title: "Project Execution",
      desc: "Our scientists get to work. You receive a kickoff briefing, regular project updates, and direct access to the scientist leading your project throughout.",
      icon: <Play className="w-5 h-5 text-[#005dad]" />,
    },
    {
      step: "Step 4",
      title: "Data, Reports & Recommendations",
      desc: "We deliver a comprehensive scientific report with all raw data, interpreted results, and clear recommendations — structured for regulatory use where applicable.",
      icon: <CheckSquare className="w-5 h-5 text-[#005dad]" />,
    },
    {
      step: "Step 5",
      title: "Follow-On Support",
      desc: "Questions after delivery? Need to pivot the work? We stay engaged. Our relationship doesn't end at report delivery — it evolves with your program.",
      icon: <RefreshCw className="w-5 h-5 text-[#005dad]" />,
    },
  ];

  return (
    <section id="how-we-work" className="relative z-10 px-6 py-24 overflow-hidden bg-white font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#005dad]/5 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-[#005dad] uppercase tracking-[0.25em] text-xs font-bold">
            Engagement Process
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="text-slate-700 text-lg md:text-xl font-bold italic tracking-wide text-[#005dad]">
            Simple Process. Serious Science.
          </p>
          <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
        </div>

        {/* Steps Timeline / List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-white/60 border border-sky-100/70 backdrop-blur-md hover:border-[#005dad]/30 hover:bg-white/80 transition-all duration-300 shadow-md relative"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-[#005dad]/30 text-4xl sm:text-5xl font-black leading-none uppercase tracking-tighter">
                  0{i + 1}
                </span>
                <div className="w-10 h-10 bg-slate-50 flex items-center justify-center shadow-inner md:hidden">
                  {item.icon}
                </div>
              </div>

              {/* Step Info */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#005dad] transition-colors">
                    {item.title}
                  </h3>
                  <span className="hidden md:inline-flex border border-blue-200 bg-blue-50/50 px-3.5 py-1 text-xs text-[#005dad] font-extrabold uppercase tracking-wide">
                    {item.step}
                  </span>
                </div>
                
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Large Icon for Desktop (absolute / flex-end layout) */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-slate-50 shadow-inner group-hover:scale-105 transition-transform shrink-0 self-center">
                {item.icon}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;