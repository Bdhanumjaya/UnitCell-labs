import { useState } from "react";
import { X } from "lucide-react";
import team1 from "../assets/team-1.png";
import team2 from "../assets/team-2.png";
import team3 from "../assets/team-3.png";

function LeadershipTeam() {
  const [activeProfile, setActiveProfile] = useState(null);

  const team = [
    {
      name: "Dr. Arunesh",
      role: "Scientific Director",
      bio: "Over 20 years of expertise in crystal engineering and solid-state pharmaceutical development.",
      image: team1,
      bullets: [
        "Pharmaceutical Solid-State Research",
        "Advanced Crystal Engineering",
        "Crystallization Process Design",
        "Polymorphism & Salt Selection"
      ]
    },
    {
      name: "Dr. Saranya",
      role: "Principal Scientist",
      bio: "Specializes in high-throughput screening and advanced polymorphic characterization techniques.",
      image: team2,
      bullets: [
        "Polymorphic Characterization",
        "High-Throughput Screening",
        "Thermal & Spectroscopic Analysis",
        "Solid-form Lifecycle Planning"
      ]
    },
    {
      name: "Mr. Ramesh",
      role: "Laboratory Operations Manager",
      bio: "Ensures operational excellence and scientific rigor across all laboratory processes.",
      image: team3,
      bullets: [
        "Laboratory Operations & Safety",
        "Rigor & Compliance QA",
        "SOP Development & Training",
        "Equipment Calibration & Safety"
      ]
    }
  ];

  return (
    <>
      <section className="w-full space-y-16 py-16 px-8 md:px-12 bg-white/60 backdrop-blur-md border border-sky-100 hover:border-[#005dad]/30 transition-all duration-300 shadow-lg relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#005dad]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center space-y-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Our Leadership Team
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-light">
            Expertise that drives scientific innovation and reliable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative border border-sky-100 bg-white/70 hover:bg-white p-6 pt-16 hover:border-[#005dad]/30 transition-all duration-300 shadow-md flex flex-col items-center text-center mt-16"
            >
              {/* Floating Circular Image -> Floating Square Image */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 h-32 w-32 rounded-none border-4 border-[#005dad]/30 overflow-hidden shadow-lg shadow-[#005dad]/10 transition-all duration-500 group-hover:scale-105 group-hover:border-[#005dad] pointer-events-none">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-3 w-full flex flex-col items-center flex-grow">
                <h3 className="text-xl font-bold text-slate-900 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[#005dad] font-bold text-xs uppercase tracking-wider">
                  {member.role}
                </p>
                
                {/* Bullet List like the image */}
                <ul className="space-y-2.5 mt-6 mb-8 text-left w-full text-xs text-slate-600">
                  {member.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="flex-shrink-0 h-4 w-4 rounded-none bg-blue-50 text-[#005dad] flex items-center justify-center font-bold text-[9px]">
                        ✓
                      </span>
                      <span className="font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Profile Button */}
              <button
                onClick={() => setActiveProfile(member)}
                className="mt-6 px-6 py-2.5 w-full bg-[#005dad]/10 hover:bg-[#005dad] text-[#005dad] hover:text-white border border-[#005dad]/20 hover:border-[#005dad] font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md shadow-blue-500/5 cursor-pointer"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Active profile modal */}
      {activeProfile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-500"
          onClick={() => setActiveProfile(null)}
        >
          <div 
            className="bg-white border-2 border-[#005dad]/20 rounded-none shadow-2xl max-w-2xl w-full overflow-hidden text-slate-800 relative animate-in fade-in slide-in-from-bottom-12 duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background glowing gradients */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#005dad]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveProfile(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-none bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition cursor-pointer z-30 shadow-sm border border-slate-200"
            >
              <X size={18} />
            </button>

            {/* Split Column Layout */}
            <div className="p-8 md:p-10 grid md:grid-cols-[180px_1fr] gap-8 relative z-10">
              {/* Left Column: Picture & Header Information */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                {/* Rectangular Profile Image */}
                <div className="relative mb-5 h-36 w-36 rounded-none border-2 border-[#005dad]/30 overflow-hidden shadow-md shadow-[#005dad]/10">
                  <img
                    src={activeProfile.image}
                    alt={activeProfile.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                  {activeProfile.name}
                </h3>
                <p className="text-[#005dad] font-bold text-[10px] tracking-widest uppercase mt-1.5">
                  {activeProfile.role}
                </p>
              </div>

              {/* Right Column: Bio, Competencies & Action Close Button */}
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#005dad] font-extrabold mb-2.5">Professional Biography</h4>
                  <div className="pl-4 border-l-4 border-[#005dad] bg-blue-50/50 p-4 rounded-none shadow-inner">
                    <p className="text-slate-700 text-[13px] leading-relaxed italic font-light">
                      "{activeProfile.bio}"
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-[#005dad] font-extrabold mb-2.5">Core Competencies</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProfile.bullets.map((bullet, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2.5 p-3 rounded-none bg-blue-50/30 border border-blue-100/50 hover:bg-blue-50 transition duration-200"
                      >
                        <span className="flex-shrink-0 h-4 w-4 rounded-none bg-[#005dad] text-white flex items-center justify-center font-bold text-[9px] shadow-sm">
                          ✓
                        </span>
                        <span className="text-slate-700 text-xs font-semibold leading-tight">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProfile(null);
                  }}
                  className="mt-6 px-8 py-3 bg-[#005dad] hover:bg-[#004c8c] text-white font-bold text-xs tracking-widest uppercase rounded-none transition duration-300 shadow-md shadow-blue-500/20 cursor-pointer w-full text-center"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LeadershipTeam;
