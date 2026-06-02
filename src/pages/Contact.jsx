import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, User, Building2, Activity, Layers, MessageSquare, ChevronDown } from "lucide-react";
import PageBanner from "../components/PageBanner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    stage: "",
    service: "",
    challenge: "",
  });
  const [focusedFields, setFocusedFields] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  const isLabelActive = (field) => {
    return focusedFields[field] || formData[field] !== "";
  };

  useEffect(() => {
    document.title = "Contact Unit Cell Labs — Schedule a Solid-State Consultation";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Have a solid-state challenge? Reach out to Unit Cell Labs. We offer free initial consultations for pharma and biotech programs at any development stage.";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Full Width Banner Section */}
      <PageBanner title="Contact" alt="Contact Header" />

      <div className="px-6 py-20 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">

          <header className="space-y-6 text-center">
            <p className="text-[#005dad] uppercase tracking-[0.35em] text-xs sm:text-sm font-bold">
              Let's Work Together
            </p>
            <h1 className="text-3xl font-black sm:text-5xl text-slate-900">
              Tell Us About Your Molecule.
            </h1>
            <p className="mx-auto max-w-4xl text-slate-750 leading-8 text-base sm:text-lg font-medium">
              Whether you are early in discovery, advancing into IND-enabling studies, or troubleshooting a clinical-stage crystallization problem — we want to hear about your challenge. Fill in the form below and a member of our scientific team will get back to you within one business day.
            </p>
            <div className="h-1 w-20 bg-[#005dad] mx-auto mt-4" />
          </header>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            
            {/* Left Card — Contact details */}
            <div className="space-y-6 border border-sky-100 bg-white/60 backdrop-blur-md p-8 shadow-lg h-fit">
              <h2 className="text-2xl font-black text-slate-950">
                Contact Details
              </h2>
              
              <div className="grid gap-5">

                <div className="flex items-center gap-5 border border-sky-100 bg-white/70 p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-[#005dad] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] font-extrabold text-[#005dad]">
                      Email Address
                    </p>
                    <p className="mt-1 text-slate-900 font-semibold text-sm sm:text-base">
                      info@unitcelllabs.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 border border-sky-100 bg-white/70 p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-[#005dad] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] font-extrabold text-[#005dad]">
                      Location
                    </p>
                    <p className="mt-1 text-slate-900 font-semibold text-sm sm:text-base leading-relaxed">
                      Unit Cell Labs Pvt. Ltd. <br />
                      IIT Hyderabad, Kandi, Sangareddy, <br />
                      Telangana - 502285, India
                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* Right Card — Contact Form */}
            <div className="border border-sky-100 bg-white/60 backdrop-blur-md p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Tell Us About Your Program
              </h2>

              <form className="space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <User className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="peer w-full bg-transparent text-slate-900 text-sm outline-none font-semibold"
                        placeholder="Enter your full name"
                      />
                      <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 opacity-0 scale-95 peer-focus:opacity-100 peer-focus:scale-100 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:scale-100 peer-autofill:opacity-100 peer-autofill:scale-100">
                        Full Name
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <Building2 className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="peer w-full bg-transparent text-slate-900 text-sm outline-none font-semibold"
                        placeholder="Enter company or organization"
                      />
                      <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 opacity-0 scale-95 peer-focus:opacity-100 peer-focus:scale-100 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:scale-100 peer-autofill:opacity-100 peer-autofill:scale-100">
                        Company / Organization
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <Mail className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="peer w-full bg-transparent text-slate-900 text-sm outline-none font-semibold"
                        placeholder="name@company.com"
                      />
                      <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 opacity-0 scale-95 peer-focus:opacity-100 peer-focus:scale-100 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:scale-100 peer-autofill:opacity-100 peer-autofill:scale-100">
                        Email Address
                      </label>
                    </div>
                  </div>
 
                  <div className="relative">
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <Phone className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="peer w-full bg-transparent text-slate-900 text-sm outline-none font-semibold"
                        placeholder="Enter phone number"
                      />
                      <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 opacity-0 scale-95 peer-focus:opacity-100 peer-focus:scale-100 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:scale-100 peer-autofill:opacity-100 peer-autofill:scale-100">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <label className={`absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 ${
                      isLabelActive("stage") ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}>
                      Development Stage
                    </label>
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <Activity className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <select
                        value={formData.stage}
                        onChange={(e) => handleChange("stage", e.target.value)}
                        onFocus={() => handleFocus("stage")}
                        onBlur={() => handleBlur("stage")}
                        className="w-full bg-transparent text-slate-900 text-sm outline-none font-semibold cursor-pointer appearance-none pr-8"
                      >
                        <option value="">Select Development Stage</option>
                        <option value="Discovery">Discovery</option>
                        <option value="Preclinical">Preclinical</option>
                        <option value="Phase I">Phase I</option>
                        <option value="Phase II">Phase II</option>
                        <option value="Phase III">Phase III</option>
                        <option value="Marketed">Marketed</option>
                      </select>
                      <ChevronDown className="absolute right-4 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className={`absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 ${
                      isLabelActive("service") ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}>
                      Service of Interest
                    </label>
                    <div className="relative flex items-center border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                      <Layers className="w-5 h-5 text-[#005dad] mr-3 shrink-0" />
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        onFocus={() => handleFocus("service")}
                        onBlur={() => handleBlur("service")}
                        className="w-full bg-transparent text-slate-900 text-sm outline-none font-semibold cursor-pointer appearance-none pr-8"
                      >
                        <option value="">Select Service of Interest</option>
                        <option value="Polymorph Screening">Polymorph Screening</option>
                        <option value="Salt & Cocrystal Screening">Salt & Cocrystal Screening</option>
                        <option value="Solid-State Characterization">Solid-State Characterization</option>
                        <option value="Crystallization Development">Crystallization Development</option>
                        <option value="ASD Development">ASD Development</option>
                        <option value="Stability Studies">Stability Studies</option>
                        <option value="Preformulation">Preformulation</option>
                        <option value="CMC Consulting">CMC Consulting</option>
                        <option value="Not Sure — Need Guidance">Not Sure — Need Guidance</option>
                      </select>
                      <ChevronDown className="absolute right-4 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative flex items-start border border-slate-300 bg-white px-4 py-3.5 focus-within:border-[#005dad] transition-all shadow-inner">
                    <MessageSquare className="w-5 h-5 text-[#005dad] mr-3 mt-0.5 shrink-0" />
                    <textarea
                      rows="5"
                      value={formData.challenge}
                      onChange={(e) => handleChange("challenge", e.target.value)}
                      className="peer w-full bg-transparent text-slate-900 text-sm outline-none font-semibold resize-none"
                      placeholder="Describe your solid-state challenge or program objectives"
                    />
                    <label className="absolute -top-2.5 left-4 bg-white px-2 text-[10px] sm:text-xs font-bold text-[#005dad] uppercase tracking-widest transform transition-all duration-200 ease-out pointer-events-none origin-left z-10 opacity-0 scale-95 peer-focus:opacity-100 peer-focus:scale-100 peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:scale-100 peer-autofill:opacity-100 peer-autofill:scale-100">
                      Tell us about your challenge
                    </label>
                  </div>
                </div>


                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#005dad] hover:bg-[#004c8c] px-6 py-4 text-base font-black text-white hover:scale-[1.03] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Send Inquiry
                  <Send size={18} />
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 max-w-7xl mx-auto overflow-hidden border border-sky-100 shadow-lg">
          <iframe
            title="Unit Cell Labs Location"
            src="https://www.google.com/maps?q=IIT+Hyderabad&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;