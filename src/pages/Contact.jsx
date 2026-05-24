import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck, FaChevronDown } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


// Import Contact page assets
import contactHeroBg from "../assets/background.jpg";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [formErrors, setFormErrors] = useState({});

  const offices = [
    {
      city: "Thrissur",
      role: "Corporate Head Office",
      address: "SJS Gold Private Limited, X/6-9, Shalimar, Ambakadan Junction, Pallikulam Road, Thrissur 680 001, Kerala",
      phone: "+91 996 164 0004",
      email: "admin@sjsgold.com",
      hours: "Mon - Sat: 9:00 AM - 6:00 PM"
    },
    {
      city: "Legal Department",
      role: "Legal & Compliance",
      address: "SJS Gold Private Limited, Legal Department",
      phone: "+91 904 802 8004",
      email: "gm@sjsgold.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM"
    }
  ];

  const faqs = [
    {
      q: "What is SJS Gold's purity guarantee?",
      a: "Every single gold bar or refined shipment that SJS Precious Metals distributes is verified via strict chemical and fire assay methods. We deliver premium gold guaranteed at 999.0 and 999.9 fineness, fully backed by BIS certified hallmarking parameters."
    },
    {
      q: "How does the SJS Live Rate desk operate?",
      a: "SJS Gold displays highly accurate live market spot rates reflecting international gold exchanges and regional taxes. Dealers, jewelers, and wholesale accounts can lock in rates via our trading desk for immediate delivery."
    },
    {
      q: "Where is SJS Precious Metals' refining center located?",
      a: "Our state-of-the-art Aqua Regia refinery center is situated in Thrissur, Kerala. It features advanced metallurgical instrumentation capable of refining up to 100 kilograms of precious metals per day."
    },
    {
      q: "Are Bombay Assay Company branches authorized by the government?",
      a: "Yes. The Bombay Assay Company (BAC) is a BIS-recognized assaying and hallmarking center operating under strict governmental regulatory compliance. BAC is also a certified assay partner for major enterprises including Titan Company Limited (Tanishq)."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Provide a valid email";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+()]/g, ""))) {
      errors.phone = "Provide a valid 10-digit number";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message details are required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative pb-32 bg-[#FAF6EE] text-[#3A3225] overflow-hidden min-h-screen">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
          initial={{ scale: 1.15, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium dark-gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/95 via-[#261E14]/85 to-[#FAF6EE]" />

        <div className="relative z-10 text-center px-6">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 mb-4 inline-block shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Reach SJS
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md">
            Contact Us
          </h1>
          <div className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-4"></div>
        </div>
      </section>

      {/* Double Column: Contact Form & Branches */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-start mb-32">
        {/* Left Column: Glass Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-white/60 backdrop-blur-md border border-[#E9D5B5]/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-2xl font-black text-[#3A3225] uppercase tracking-wide mb-2">Send Message</h3>
          <p className="text-xs text-[#5A4F3D] font-bold uppercase tracking-wider mb-8">We will revert within 24 hours</p>

          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-16 flex flex-col items-center justify-center space-y-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg border border-emerald-300 text-2xl">
                  <FaCheck />
                </div>
                <h4 className="text-xl font-black text-[#3A3225] uppercase">Message Sent Successfully!</h4>
                <p className="text-xs text-[#5A4F3D] max-w-xs font-semibold leading-relaxed">
                  Thank you for contacting SJS Group. Our representative will reach out to you at the earliest.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-amber-955 uppercase tracking-widest block mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E9D5B5]/60 focus:border-amber-500/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                      placeholder="Enter name"
                    />
                    {formErrors.name && <span className="text-red-500 text-[10px] font-bold mt-1 block">{formErrors.name}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-amber-955 uppercase tracking-widest block mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E9D5B5]/60 focus:border-amber-500/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                      placeholder="Enter email"
                    />
                    {formErrors.email && <span className="text-red-500 text-[10px] font-bold mt-1 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-black text-amber-955 uppercase tracking-widest block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E9D5B5]/60 focus:border-amber-500/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                      placeholder="10-digit number"
                    />
                    {formErrors.phone && <span className="text-red-500 text-[10px] font-bold mt-1 block">{formErrors.phone}</span>}
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-amber-955 uppercase tracking-widest block mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E9D5B5]/60 focus:border-amber-500/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors"
                      placeholder="e.g. Bullion Rate Query"
                    />
                    {formErrors.subject && <span className="text-red-500 text-[10px] font-bold mt-1 block">{formErrors.subject}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-amber-955 uppercase tracking-widest block mb-1">Message Details</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#E9D5B5]/60 focus:border-amber-500/70 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-colors resize-none"
                    placeholder="Enter details here..."
                  />
                  {formErrors.message && <span className="text-red-500 text-[10px] font-bold mt-1 block">{formErrors.message}</span>}
                </div>

                <div className="flex flex-col">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-3 rounded-full text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Branch Offices (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-1">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">SJS Footprint</span>
            <h3 className="text-2xl font-black text-amber-955 uppercase tracking-wide">Our Branch Network</h3>
            <div className="w-12 h-1 bg-amber-500 rounded-full mt-2"></div>
          </div>

          <div className="space-y-6">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                className="bg-white/50 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-amber-400/30 transition-all duration-300 space-y-4"
              >
                <div className="flex justify-between items-baseline border-b border-amber-200/30 pb-2.5">
                  <h4 className="text-lg font-black text-amber-955 uppercase font-sans">{office.city}</h4>
                  <span className="text-[10px] bg-amber-100 text-amber-900 font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-amber-200/50">
                    {office.hours}
                  </span>
                </div>

                <div className="space-y-2 text-[#5A4F3D] text-xs font-bold font-sans">
                  <p className="text-amber-800 text-[10px] uppercase font-black tracking-widest mb-1.5">{office.role}</p>
                  <p className="flex items-start gap-2.5 leading-relaxed">
                    <FaMapMarkerAlt className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <FaPhoneAlt className="text-amber-600 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-amber-900 transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <FaEnvelope className="text-amber-600 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-amber-900 transition-colors">
                      {office.email}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 relative z-10 border-t border-amber-200/20 pt-24">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Help &amp; Support</span>
          <h2 className="text-2xl md:text-4xl font-black text-amber-955 uppercase tracking-wide mt-1">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-2 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <motion.div
                key={idx}
                className="bg-white/60 backdrop-blur-md border border-[#E9D5B5]/60 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="p-6 flex items-center justify-between cursor-pointer"
                >
                  <h4 className="text-sm md:text-base font-bold text-[#3A3225] uppercase font-sans pr-4">
                    {faq.q}
                  </h4>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-800 flex-shrink-0"
                  >
                    <FaChevronDown className="text-[10px]" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-amber-200/30 text-xs md:text-sm text-[#5A4F3D] leading-relaxed font-medium bg-amber-50/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
