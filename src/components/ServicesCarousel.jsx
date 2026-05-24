// ServicesCarousel.jsx

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoldBullion from "./GoldBullion";
import { useNavigate } from "react-router-dom";

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
      "At our gold refinery we turn raw material into high-grade brilliance — secure handling, trained specialists, and cutting-edge refining technology designed to maximise your returns.",
    highlights: [
      "Transparent melt & assay procedures",
      "High-yield recovery with audit reports",
      "XRF spectrometry & fire assay accuracy",
    ],
  },
  {
    id: 3,
    num: "03",
    title: "GOLD TESTING",
    tagline: "Precision Assaying & Non-Destructive Analysis",
    image: testImg,
    description:
      "Verify the exact caratage and gold content of any metal object.",
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
      "Secure official recognition for your gold jewelry.",
    highlights: [
      "Authorized BIS Assaying & Hallmarking",
      "Tamper-proof laser inscription stamp",
      "Regulatory compliance for retailers",
    ],
  },
];

// Gold particles
const goldParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 7.7) % 90}%`,
  top: `${10 + (i * 9.3) % 80}%`,
  size: (i % 3) + 2.5,
  delay: i * 0.35,
  duration: 5 + (i % 3) * 2,
}));

export default function ServicesCarousel() {

  const [activeId, setActiveId] = useState(1);

  const navigate = useNavigate();

  const current = services.find(
    (s) => s.id === activeId
  );

  const autoplayRef = useRef(null);

  // AUTOPLAY
  const startAutoplay = () => {

    stopAutoplay();

    autoplayRef.current = setInterval(() => {
      setActiveId(
        (prev) => (prev % services.length) + 1
      );
    }, 4500);

  };

  // STOP AUTOPLAY
  const stopAutoplay = () => {

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

  };

  // EFFECT
  useEffect(() => {

    startAutoplay();

    return () => stopAutoplay();

  }, [activeId]);

  // (now navigate to dedicated page)

  return (

    <section className="w-full py-24 px-6 bg-[#FAF3E0]/15 relative overflow-hidden border-t border-amber-200/40">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,119,6,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,119,6,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* GOLD PARTICLES */}
      {goldParticles.map((p) => (

        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 pointer-events-none z-0 opacity-20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-30, -120, -30],
            opacity: [0.1, 0.5, 0.25, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />

      ))}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-16">

          <motion.span className="text-amber-600 text-sm font-bold tracking-widest uppercase block mb-2">

            PRECIOUS METAL SOLUTIONS

          </motion.span>

          <motion.h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#3A3225] uppercase">

            OUR <span className="text-amber-600">SERVICES</span>

          </motion.h2>

        </div>

        {/* Desktop: keep original split layout */}
        <div
          className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-4 lg:gap-6 min-h-[550px] lg:min-h-[600px]">

            {services.map((service) => {

              const isActive =
                service.id === activeId;

              return (

                <motion.div
                  key={service.id}
                  onClick={() =>
                    setActiveId(service.id)
                  }
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border overflow-hidden ${
                    isActive
                      ? "bg-[#FAF3E0]/75 border-amber-300/80 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.15)] backdrop-blur-md"
                      : "bg-[#FAF3E0]/20 border-transparent hover:bg-[#FAF3E0]/45"
                  }`}
                >

                  <div className="flex items-center gap-4 relative z-10">

                    <span
                      className={`text-xl font-bold tracking-widest font-mono transition-colors duration-300 ${
                        isActive
                          ? "text-amber-600"
                          : "text-[#B38B3D]/50 group-hover:text-[#B38B3D]"
                      }`}
                    >
                      {service.num}
                    </span>

                    <h3
                      className={`text-lg lg:text-xl font-extrabold tracking-wide uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-[#3A3225]"
                          : "text-[#3A3225]/60 group-hover:text-[#3A3225]"
                      }`}
                    >
                      {service.title}
                    </h3>

                  </div>

                  {isActive && (

                    <div className="mt-4">

                      <p className="text-[#B38B3D] text-xs font-semibold uppercase tracking-wider mb-2">

                        {service.tagline}

                      </p>

                      <p className="text-[#4A3F2C] text-sm leading-relaxed font-medium">

                        {service.description}

                      </p>

                    </div>

                  )}

                </motion.div>

              );

            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-between">

            <div className="h-[420px] lg:h-[500px] w-full rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(217,119,6,0.15)] border border-amber-200/30">

              <AnimatePresence mode="wait">

                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0 overflow-hidden"
                >

                  {/* IMAGE */}
                  <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 6 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        `url(${current.image})`,
                    }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1208] via-black/35 to-transparent z-10" />

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 z-20 flex flex-col items-start gap-4">

                    <motion.span className="bg-amber-500/25 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">

                      SJS Certified Gold Service

                    </motion.span>

                    <motion.h4 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-wide drop-shadow-md">

                      {current.title}

                    </motion.h4>

                    <ul className="flex flex-col gap-2.5 mt-2">

                      {current.highlights.map(
                        (highlight, idx) => (

                          <li
                            key={idx}
                            className="flex items-center gap-3 text-white/90 text-sm font-medium"
                          >

                            <span className="text-amber-400 font-bold text-base">

                              ✓

                            </span>

                            <span>
                              {highlight}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                    {/* BUTTON */}

                      <motion.button

                        onClick={() => {
                          const route = current.id === 1
                            ? "/gold-bullion"
                            : current.id === 2
                            ? "/sjs-precious"
                            : current.id === 3
                            ? "/gold-testing"
                            : current.id === 4
                            ? "/hallmarking"
                            : "/";
                          navigate(route);
                        }
                        }

                      initial={{
                        opacity: 0,
                        y: 15,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.55,
                        type: "spring",
                        stiffness: 100,
                      }}

                      whileHover={{
                        scale: 1.05,
                        boxShadow:
                          "0 10px 25px -5px rgba(217, 119, 6, 0.45)",
                      }}

                      whileTap={{
                        scale: 0.98,
                      }}

                      className="relative overflow-hidden mt-5 px-7 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl text-xs lg:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-2 group/btn"
                    >

                      <span className="relative z-10 flex items-center gap-2">

                        Read More

                        <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300">

                          →

                        </span>

                      </span>

                    </motion.button>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Mobile: stacked heading then image per service (visible only on small screens) */}
        <div className="block lg:hidden flex flex-col gap-8">
          {services.map((service) => (
            <div key={service.id} className="w-full">
              <div
                className="p-4 rounded-2xl bg-[#FAF3E0]/30 border border-amber-200/20 mb-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-mono font-bold text-amber-600">{service.num}</span>
                    <h3 className="text-lg font-extrabold text-[#3A3225] uppercase">{service.title}</h3>
                  </div>
                </div>
                <p className="text-[#4A3F2C] text-sm mt-3">{service.tagline}</p>
              </div>

              <div className="w-full rounded-2xl overflow-hidden relative shadow-[0_12px_30px_rgba(217,119,6,0.12)]">
                <div
                  className="w-full h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-4 bg-gradient-to-t from-black/50 to-transparent text-white">
                  <h4 className="text-xl font-black uppercase">{service.title}</h4>
                  <ul className="mt-2 flex flex-col gap-1 text-sm">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-amber-400">✓</span>
                        <span className="text-white/90">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <button
                      onClick={() => {
                        const route = service.id === 1
                          ? "/gold-bullion"
                          : service.id === 2
                          ? "/sjs-precious"
                          : service.id === 3
                          ? "/gold-testing"
                          : service.id === 4
                          ? "/hallmarking"
                          : "/";
                        navigate(route);
                      }}
                      className="mt-2 inline-block px-4 py-2 bg-amber-600 rounded-md text-xs font-extrabold uppercase"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>

  );
}