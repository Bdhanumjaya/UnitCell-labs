import { motion } from "framer-motion";
import labFacilities from "../../assets/lab-facilities.png";
import crystalScreening from "../../assets/crystal-screening.png";

const Facilities = () => {
  const sections = [
    {
      title: "State-of-the-Art Laboratory",
      content:
        "Our facility is equipped with cutting-edge analytical instrumentation including high-resolution XRD, DSC, and TGA systems, providing the fundamental data required for robust solid-state development.",
      image: labFacilities,
      tag: "Advanced Infrastructure",
      reverse: false,
    },
    {
      title: "High-Throughput Screening",
      content:
        "We utilize automated liquid handling and proprietary crystallization platforms to rapidly explore thousands of conditions, ensuring comprehensive coverage of the polymorphic landscape.",
      image: crystalScreening,
      tag: "Innovation",
      reverse: true,
    },
  ];

  return (
    <section className="relative z-10 px-6 py-16 overflow-hidden bg-white font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#005dad]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-black"
          >
            Our <span className="text-[#005dad]">Capabilities</span> &
            Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-lg max-w-2xl mx-auto"
          >
            Combining advanced technology with scientific expertise to deliver
            world-class research services.
          </motion.p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12`}
          >
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-200 text-[#005dad] text-sm font-semibold tracking-wider uppercase">
                {section.tag}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                {section.title}
              </h3>

              <p className="text-black text-lg leading-relaxed">
                {section.content}
              </p>

              <div className="flex items-center gap-4 text-[#005dad] font-medium cursor-pointer group">
                <span className="h-[1px] w-8 bg-[#005dad] transition-all group-hover:w-12"></span>
                Learn More about our technology
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative group"
            >
              <div className="absolute inset-0 bg-blue-200/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative overflow-hidden border border-[#005dad]/20 shadow-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[350px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-transparent to-transparent opacity-40"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;