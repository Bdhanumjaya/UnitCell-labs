import { useState } from "react";
import { ExternalLink } from "lucide-react";

function About() {

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      name: "Dr. C. Malla Reddy",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      role: "Professor at IIT Hyderabad and Founder of Unit Cell Labs.",
      experience: [
        "17+ years in pharmaceutical solid-state science.",
        "150+ research publications with global recognition.",
        "Extensive industry collaborations in pharmaceutical research.",
      ],
    },

    {
      name: "Dr. K. Balaju",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      role: "Senior Solid-State Chemist and Co-founder of Unit Cell Labs.",
      experience: [
        "8+ years of pharmaceutical industrial experience.",
        "50+ patent applications and research works.",
        "Expert in synthetic and process chemistry.",
      ],
    },

    {
      name: "Dr. Biswajit Nayak",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598",
      role: "Research Specialist in Solid-State Chemistry.",
      experience: [
        "3+ years of pharmaceutical solid-state research.",
        "11+ publications in solid-state chemistry.",
        "Focused on crystal engineering and material science.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#082F49] text-white px-6 md:px-12 lg:px-20 py-16 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-28">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-cyan-400">Our Team</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-8">
          Our research team specializes in pharmaceutical solid-state sciences
          and healthcare innovations.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28">

        {doctors.map((doctor, index) => (

          <div
            key={index}
            className="bg-[#0B1324] border border-cyan-400/20 rounded-3xl pt-24 pb-8 px-6 relative text-center shadow-[0_0_20px_rgba(34,211,238,0.06)] hover:-translate-y-2 hover:border-cyan-300/40 transition duration-300 min-h-[620px]"
          >

            {/* Profile Image */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">

              <img
                src={doctor.image}
                alt="doctor"
                className="w-36 h-36 rounded-full object-cover border-4 border-cyan-300/30 shadow-xl"
              />

            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow mt-10">

              <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                {doctor.name}
              </h2>

              <p className="text-slate-300 leading-7 mb-6 min-h-[80px]">
                {doctor.role}
              </p>

              {/* Tick Points */}
              <div className="flex flex-col gap-4 mb-8 text-left">

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-[#06121F] text-xs font-bold">
                    ✓
                  </div>

                  <p className="text-slate-300 text-sm">
                    Pharmaceutical Solid-State Research
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-[#06121F] text-xs font-bold">
                    ✓
                  </div>

                  <p className="text-slate-300 text-sm">
                    Advanced Crystal Engineering
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-[#06121F] text-xs font-bold">
                    ✓
                  </div>

                  <p className="text-slate-300 text-sm">
                    Innovative Healthcare Solutions
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-[#06121F] text-xs font-bold">
                    ✓
                  </div>

                  <p className="text-slate-300 text-sm">
                    International Research Collaborations
                  </p>
                </div>

              </div>

              {/* Button */}
              <button
                onClick={() => setSelectedDoctor(doctor)}
                className="group flex items-center justify-center gap-2 mx-auto mt-auto bg-cyan-400 hover:bg-cyan-300 text-[#06121F] px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
              >
                View Full Profile

                <ExternalLink
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />

              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Popup Modal */}
      {selectedDoctor && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-[#0B1324] border border-cyan-400/20 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-5 text-slate-300 text-3xl hover:text-cyan-400 transition"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedDoctor.image}
              alt="doctor"
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-300/30 shadow-xl"
            />

            {/* Name */}
            <h2 className="text-3xl font-bold text-cyan-300 text-center mt-6 mb-4">
              {selectedDoctor.name}
            </h2>

            {/* Role */}
            <p className="text-slate-300 text-center leading-7 mb-8">
              {selectedDoctor.role}
            </p>

            {/* Experience */}
            <div className="space-y-4">

              {selectedDoctor.experience.map((item, i) => (

                <div
                  key={i}
                  className="bg-[#111C2D] p-4 rounded-2xl border border-cyan-400/10"
                >
                  <p className="text-slate-300 leading-7">
                    • {item}
                  </p>
                </div>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default About;