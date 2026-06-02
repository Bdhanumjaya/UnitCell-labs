import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinalCTA = () => (
<section className="relative z-10 px-6 py-20 md:py-32 text-center overflow-hidden bg-white font-sans">
    <div className="max-w-4xl mx-auto space-y-10 relative">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-6xl font-black text-black">
          Ready to identify your{" "}
          <span className="text-[#005dad]">ideal solid form?</span>
        </h2>

        <p className="text-xl text-black font-medium">
          Partner with world-class scientists to accelerate your drug
          development journey.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          to="/contact"
          className="px-8 md:px-12 py-4 md:py-6 bg-[#005dad] text-white font-black text-lg md:text-xl hover:bg-[#004c8c] transition-all hover:scale-105 shadow-2xl"
        >
          Get Started Now
        </Link>

        <Link
          to="/contact"
          className="px-8 md:px-12 py-4 md:py-6 border-2 border-sky-200 text-black font-black text-lg md:text-xl hover:border-[#005dad]/30 transition-all hover:scale-105 backdrop-blur-md bg-white/60"
        >
          Contact Sales
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;