import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import bullImg from "../assets/1bull.jpg";
import refImg from "../assets/2ref.jpg";
import testImg from "../assets/3test.jpg";
import hallImg from "../assets/4hall.jpg";

const services = [
  {
    id: 1,
    num: "01",
    title: "GOLD BULLION",
    tagline: "Uncompromising Purity & Liquid Assets",
    image: bullImg,
    description:
      "Purchase and trade certified gold bullion bars and coins. Valued primarily by weight and 99.9% pure gold content, SJS bullion guarantees liquidity, quality, and competitive market rates.",
    highlights: [
      "99.9% LBMA-Standard Pure Gold",
      "Available in customized bars & coins",
      "Instant liquidity & transparent live pricing",
    ],
  },
  {
    id: 2,
    num: "02",
    title: "GOLD REFINING",
    tagline: "Advanced Smelting & Chemical Purity",
    image: refImg,
    description:
      "Transform scrap gold and jeweler's sweeps into fine precious metals. Utilizing the state-of-the-art Aqua Regia chemical refining process, we ensure the maximum recovery yield with absolute purity.",
    highlights: [
      "Aqua Regia high-yield chemical refining",
      "Advanced environment-friendly smelting",
      "Precise recovery audit reports",
    ],
  },
  {
    id: 3,
    num: "03",
    title: "GOLD TESTING",
    tagline: "Precision Assaying & Non-Destructive Analysis",
    image: testImg,
    description:
      "Verify the exact caratage and gold content of any metal object. Our laboratories combine advanced X-ray Fluorescence (XRF) spectrometry with classic fire assay methods to deliver certified, fraud-proof results.",
    highlights: [
      "X-Ray Fluorescence (XRF) analysis",
      "Non-destructive instant checking",
      "Accredited fire assay certification",
    ],
  },
  {
    id: 4,
    num: "04",
    title: "HALLMARKING",
    tagline: "BIS-Certified Purity Verification",
    image: hallImg,
    description:
      "Secure official recognition for your gold jewelry. In partnership with the Bombay Assay Company (BAC), we offer Bureau of Indian Standards (BIS) hallmarking, applying laser-etched stamps of authenticity.",
    highlights: [
      "Authorized BIS Assaying & Hallmarking",
      "Tamper-proof laser inscription stamp",
      "Regulatory compliance for retailers",
    ],
  },
];

export default function ServicesCarousel() {
  const [activeId, setActiveId] = useState(1);
  const current = services.find((s) => s.id === activeId);
  const autoplayRef = useRef(null);

  // Auto-rotation (switches active tabs every 3 seconds)
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveId((prev) => (prev % services.length) + 1);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeId]);

  return (
    <section className="w-full py-24 px-6 bg-[#FAF3E0]/20 relative overflow-hidden border-t border-amber-200/40">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-amber-600 text-sm font-bold tracking-widest uppercase block mb-2">PRECIOUS METAL SOLUTIONS</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#3A3225] uppercase">
            OUR <span className="text-amber-600">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 rounded-full mt-4" />
        </div>

        {/* Dynamic Split Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* LEFT SIDE: Interactive Vertical Tabs Accordion */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4 lg:gap-6 min-h-[550px] lg:min-h-[600px]">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-[#FAF3E0]/70 border-amber-300 shadow-md translate-x-2"
                      : "bg-[#FAF3E0]/20 border-transparent hover:bg-[#FAF3E0]/45"
                  }`}
                >
                  {/* Left Active border bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-amber-500 transition-all duration-300 origin-bottom ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  {/* Header Row */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl font-bold tracking-widest font-mono transition-colors duration-300 ${
                        isActive ? "text-amber-600" : "text-[#B38B3D]/50 group-hover:text-[#B38B3D]"
                      }`}
                    >
                      {service.num}
                    </span>
                    <h3
                      className={`text-lg lg:text-xl font-extrabold tracking-wide uppercase transition-colors duration-300 ${
                        isActive ? "text-[#3A3225]" : "text-[#3A3225]/60 group-hover:text-[#3A3225]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Collapsible content (Accordion style) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-[160px] opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#B38B3D] text-xs font-semibold uppercase tracking-wider mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-[#4A3F2C] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Immersive Interactive Media Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="h-[400px] lg:h-[480px] w-full rounded-3xl overflow-hidden relative shadow-2xl border border-amber-200/30">
              {/* Fade transitions for background and overlay content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${current.image})` }}
                >
                  {/* Luxury warm gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F170E] via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12" />

                  {/* Showcase contents */}
                  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 z-10 flex flex-col items-start gap-4">
                    <span className="bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                      SJS Certified Gold Service
                    </span>
                    <h4 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-wide">
                      {current.title}
                    </h4>
                    
                    {/* List of service value-propositions */}
                    <ul className="flex flex-col gap-2 mt-2">
                      {current.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/90 text-sm">
                          <span className="text-amber-500 font-bold">&#10003;</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Enquiry CTA Button */}
                    <button className="mt-4 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs lg:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-2">
                      Read More <span>&rarr;</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
