function Services() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-5 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We provide complete pharmacy and healthcare solutions
            with modern medical support and technology.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#0F172A] border border-cyan-500/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Medicine Supply
            </h2>
            <p className="text-gray-400 leading-7">
              High-quality and certified medicines available anytime.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-cyan-500/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Online Consultation
            </h2>
            <p className="text-gray-400 leading-7">
              Expert medical consultation from trusted professionals.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-cyan-500/10 rounded-3xl p-8 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Emergency Delivery
            </h2>
            <p className="text-gray-400 leading-7">
              Fast emergency medicine delivery service across the city.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Services;