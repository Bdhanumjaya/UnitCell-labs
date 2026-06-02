import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Importance from "../components/home/Importance";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Industries from "../components/home/Industries";
import Methodology from "../components/home/Methodology";
import VisionMission from "../components/home/VisionMission";
import Facilities from "../components/home/Facilities";
import FinalCTA from "../components/home/FinalCTA";

function Home() {
  useEffect(() => {
    document.title = "Unit Cell Labs — Solid-State Pharmaceutical CRO | Polymorph & Crystallization Experts";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Unit Cell Labs is a specialized solid-state pharma CRO offering polymorph screening, crystallization development, solid-state characterization, and CMC consulting for drug development programs worldwide.";
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#005dad]/30">
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <VisionMission />
        <Facilities />
        <Industries />
        <Importance />
        <Services />
        <WhyChooseUs />
        <Methodology />
        <FinalCTA />
      </div>

    </div>
  );
}

export default Home;