import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaStore, 
  FaMapMarkerAlt, 
  FaCoins, 
  FaFlask, 
  FaCheckCircle, 
  FaClock, 
  FaHandshake,
  FaChevronRight 
} from "react-icons/fa";

import chairmanImg from "../assets/Chairman.jpg";
import sunilSirImg from "../assets/sunil sir pict.jpg";
import reenaMadamImg from "../assets/Reena madam.jpg";
import aboutHeroBg from "../assets/legacy50.jpg"; // A premium heritage gold image
import sjsGoldImg from "../assets/sjsch1.jpg";
import sjsRefiningImg from "../assets/sjsch2.jpeg";
import sjsHallmarkImg from "../assets/sjsch3.jpeg";
import commitGoldBg from "../assets/commitgold.jpeg";

// Framer motion variants for simple reuse
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

/* ─── Floating Gold Particles ─── */
function GoldParticles({ count = 20 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        return (
          <div
            key={i}
            className="floating-particle absolute rounded-full bg-gradient-to-br from-amber-300 to-amber-600 opacity-40"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 10px 2px rgba(245, 158, 11, 0.4)"
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Spotlight Interactive Card ─── */
function SpotlightCard({ icon: Icon, title, description }) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card bg-white/50 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(217,119,6,0.15)] hover:border-amber-400/50 transition-all duration-500 text-center flex flex-col items-center cursor-pointer group"
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="relative w-16 h-16 rounded-2xl bg-amber-50/80 border border-amber-200/50 flex items-center justify-center text-amber-700 text-2xl mb-6 shadow-sm z-10"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Icon className="relative z-10" />
      </motion.div>
      <h3 className="text-xl font-bold text-amber-955 uppercase mb-3 font-sans relative z-10">{title}</h3>
      <p className="text-sm text-[#5A4F3D] leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
}

import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="relative pt-24 overflow-hidden bg-[#FAF6EE] text-[#3A3225]">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer with slow zoom-out on load */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
          initial={{ scale: 1.15, opacity: 0.8 }}
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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SJS Heritage &amp; Trust
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Our Story
          </motion.h1>
          <motion.div 
            className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          />
        </div>
      </section>

      {/* 2. CHAIRMAN TRIBUTE SECTION */}
      <motion.section className="w-full py-28 px-6 relative bg-gradient-to-b from-[#FAF6EE] to-[#F5ECD7] overflow-hidden border-t border-amber-100/30" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        {/* Ambient glows */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Chairman Image Column (Left 5 cols) */}
            <motion.div
              className="lg:col-span-5 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Picture Container with Gold Frame styling and glow on hover */}
              <motion.div
                className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(40,30,15,0.15)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.25)] border-4 border-[#E6C687] p-2.5 bg-white transition-all duration-500 group"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-amber-50">
                  <img 
                    src={chairmanImg} 
                    alt="Chairman Mr. Jaihind Mahadev Salunkhe" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle vignette on the picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                </div>
              </motion.div>
              
              <div className="mt-8 text-center">
                <h4 className="text-2xl font-black text-amber-955 uppercase tracking-wide">Mr. Jaihind Mahadev Salunkhe</h4>
                <p className="text-amber-800 text-xs font-black tracking-widest uppercase mt-1">Founder Chairman (1959 - 2025)</p>
                <div className="w-16 h-1 bg-amber-500 rounded-full mt-4 mx-auto" />
              </div>
            </motion.div>

            {/* Chairman Tribute Text Column (Right 7 cols) */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Legacy of Excellence</span>
              <h2 className="text-3xl lg:text-5xl font-black text-amber-955 mt-2 mb-8 uppercase leading-tight tracking-wide">
                A Tribute to a Visionary:<br/>
                <span className="text-amber-900 font-extrabold text-2xl lg:text-4xl">Chairman Mr. Jaihind Mahadev Salunkhe</span>
              </h2>

              <div className="space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif text-justify">
                <p>
                  Our Chairman, Mr. Jaihind Mahadev Salunkhe, an excellent entrepreneur and philanthropist, started his journey in 1969 in Kochi, Kerala with a jewellery shop in the name of SHALIMAR along with his own brother Mr. Prathap Rao.
                </p>
                <p>
                  From the company's inception in 1959 in the name of SHALIMAR, he instilled a culture of excellence. Under his and his brother's leadership, SHALIMAR Jewellery grew into excellence.
                </p>
                <p>
                  In the 1970s, he handed over the jewelry business to his brother and took the spearhead decision of shifting from Kochi to Thrissur, Kerala, a place that is a notable hub in India due to the presence of large gold-dealing corporates.
                </p>
                <p>
                  This decision fundamentally reshaped his entrepreneurship and gave birth to a new company, SJS Enterprises, which dealt with gold refinery and gold bullion.
                </p>
                <p>
                  More than his corporate achievements, Mr. Jaihind is renowned for the profound impact he had on individuals. He possessed a rare blend of stern professionalism, genuine warmth, and excellent customer relations and treated every employee and partner with equal respect.
                </p>
                <p>
                  Mr. Jaihind Mahadev Salunkhe, a mentor and a father figure to countless individuals, always ready to lend an ear and share his wisdom. He often said, <span className="font-bold italic text-amber-950">"The strength of the company is the strength of its employees,"</span> a belief he embodied by creating opportunities for generations of SHALIMAR Group employees.
                </p>
                <p>
                  Mr. Jaihind was an extraordinary visionary whose passion, integrity, and relentless drive were the bedrock of our company. On August 2025, he left us but his memory will forever inspire the path we follow.
                </p>
                
                <motion.div 
                  className="border-l-4 border-amber-500 pl-6 italic bg-amber-50/50 backdrop-blur-sm py-4 pr-4 rounded-r-2xl shadow-sm my-8 border border-amber-200/30"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-amber-955 font-semibold">
                    The Board of Directors and the entire leadership team are committed to honouring Mr. Jaihind's legacy by upholding the core values he established: Integrity, Innovation, and Service. We will continue to pursue the ambitious vision he set forth, ensuring that SJS Gold Private Limited remains a testament to his life's work.
                  </p>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
             </motion.section>

      {/* 3. DETAILED HERITAGE TIMELINE */}
      <section className="w-full py-28 px-6 relative border-t border-amber-200/20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/92 via-[#261E14]/88 to-[#1A1610]/95" />
        
        {/* Floating Gold Particles */}
        <GoldParticles count={30} />

        {/* Decorative elements */}
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-amber-400/8 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Chronicle of Trust</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-wide mt-2">
              Timeline of Milestones
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 rounded-full mt-4 mx-auto" />
          </div>

          {/* Timeline track wrapper */}
          <div className="relative">
            {/* Center line (Desktop) or Left Line (Mobile) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.5)] rounded-full"></div>

            <div className="space-y-20 relative">
              
              {/* Item 1 - 1959 / 1969 */}
              <div className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                {/* Desktop Left Side Card */}
                <motion.div 
                  className="w-full md:w-[44%] order-2 md:order-1 ml-12 md:ml-0"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 rounded-3xl p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-400 relative group cursor-pointer">
                    <span className="inline-block bg-amber-955 text-amber-300 font-black text-[10px] px-4 py-1.5 rounded-full mb-5 border border-amber-500/30 uppercase tracking-widest">
                      1959 / 1969
                    </span>
                    <h3 className="text-xl font-bold text-amber-955 uppercase mb-4 flex items-center gap-3 font-sans">
                      <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-200/50 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                        <FaStore />
                      </div>
                      The Shalimar Inception
                    </h3>
                    <p className="text-sm text-[#4A3F2C] leading-relaxed">
                      Founded by Late Chairman Mr. Jaihind Mahadev Salunkhe alongside his brother Mr. Prathap Rao in Kochi, Kerala. The single shop, named SHALIMAR, laid the bedrock for SJS Group by instilling a culture of absolute purity and customer goodwill.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-4 border-white shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center justify-center cursor-pointer text-white font-bold animate-pulse-ring"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full" />
                  </motion.div>
                </div>

                {/* Desktop Right Side Placeholder */}
                <div className="hidden md:block w-[44%] order-2"></div>
              </div>

              {/* Item 2 - 1970s */}
              <div className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                {/* Desktop Left Side Placeholder */}
                <div className="hidden md:block w-[44%]"></div>

                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-4 border-white shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center justify-center cursor-pointer text-white font-bold animate-pulse-ring"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full" />
                  </motion.div>
                </div>

                {/* Desktop Right Side Card */}
                <motion.div 
                  className="w-full md:w-[44%] ml-12 md:ml-0"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 rounded-3xl p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-400 relative group cursor-pointer">
                    <span className="inline-block bg-amber-955 text-amber-300 font-black text-[10px] px-4 py-1.5 rounded-full mb-5 border border-amber-500/30 uppercase tracking-widest">
                      1970s
                    </span>
                    <h3 className="text-xl font-bold text-amber-955 uppercase mb-4 flex items-center gap-3 font-sans">
                      <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-200/50 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                        <FaMapMarkerAlt />
                      </div>
                      Pivot to Thrissur &amp; Bullion
                    </h3>
                    <p className="text-sm text-[#4A3F2C] leading-relaxed">
                      Mr. Jaihind made the strategic decision to shift from Kochi to Thrissur, Kerala. Recognizing Thrissur's rising role as a corporate gold hub, he founded SJS Enterprises, redirecting focus into wholesale gold refining and bullion trade.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Item 3 - 2007 */}
              <div className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                {/* Desktop Left Side Card */}
                <motion.div 
                  className="w-full md:w-[44%] order-2 md:order-1 ml-12 md:ml-0"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 rounded-3xl p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-400 relative group cursor-pointer">
                    <span className="inline-block bg-amber-955 text-amber-300 font-black text-[10px] px-4 py-1.5 rounded-full mb-5 border border-amber-500/30 uppercase tracking-widest">
                      2007
                    </span>
                    <h3 className="text-xl font-bold text-amber-955 uppercase mb-4 flex items-center gap-3 font-sans">
                      <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-200/50 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                        <FaCoins />
                      </div>
                      Modern Bullion Expansion
                    </h3>
                    <p className="text-sm text-[#4A3F2C] leading-relaxed">
                      Leadership handed down to his son, Mr. Sunil Jaihind Salunkhe, who established SJS Gold Private Limited. He catalyzed major expansions in technology, scaling up refining services, and becoming a leading bullion supplier across South India.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-4 border-white shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center justify-center cursor-pointer text-white font-bold animate-pulse-ring"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full" />
                  </motion.div>
                </div>

                {/* Desktop Right Side Placeholder */}
                <div className="hidden md:block w-[44%] order-2"></div>
              </div>

              {/* Item 4 - Present */}
              <div className="flex flex-col md:flex-row items-stretch md:justify-between relative">
                {/* Desktop Left Side Placeholder */}
                <div className="hidden md:block w-[44%]"></div>

                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 top-10 md:top-12 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div 
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-4 border-white shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center justify-center cursor-pointer text-white font-bold animate-pulse-ring"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2.5 h-2.5 bg-amber-950 rounded-full" />
                  </motion.div>
                </div>

                {/* Desktop Right Side Card */}
                <motion.div 
                  className="w-full md:w-[44%] ml-12 md:ml-0"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 rounded-3xl p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-400 relative group cursor-pointer">
                    <span className="inline-block bg-amber-955 text-amber-300 font-black text-[10px] px-4 py-1.5 rounded-full mb-5 border border-amber-500/30 uppercase tracking-widest">
                      Present
                    </span>
                    <h3 className="text-xl font-bold text-amber-955 uppercase mb-4 flex items-center gap-3 font-sans">
                      <div className="p-2.5 rounded-2xl bg-amber-100/70 border border-amber-200/50 text-amber-700 group-hover:scale-110 transition-transform duration-300">
                        <FaFlask />
                      </div>
                      Refinery &amp; BAC Assurances
                    </h3>
                    <p className="text-sm text-[#4A3F2C] leading-relaxed">
                      SJS restructured its operations, placing refining and high-standard quality testing under SJS Precious Metals LLP. The group also entered into a strategic investment partnership with the Bombay Assay Company (BAC), solidifying its BIS-certified testing supremacy.
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT LEADERSHIP TEAM */}
      <section className="w-full py-28 px-6 bg-[#FAF6EE] relative border-t border-amber-200/20 overflow-hidden">
        {/* Floating Gold Particles Background Layer */}
        <GoldParticles count={20} />
        {/* Ambient Gold Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Driving Growth &amp; Trust</span>
            <h2 className="text-3xl lg:text-5xl font-black text-amber-955 uppercase tracking-wide mt-2">
              SJS Leadership Board
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 rounded-full mt-4 mx-auto" />
          </div>

          <div className="space-y-36">
            
            {/* Leader 1 - Sunil Sir (Image Left, Bio Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Image Container */}
              <motion.div 
                className="lg:col-span-5 flex flex-col items-center"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(40,30,15,0.15)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.25)] border-4 border-[#E6C687] p-2 bg-white transition-all duration-500 group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-amber-50">
                    <img 
                      src={sunilSirImg} 
                      alt="Mr. Sunil Jaihind Salunkhe" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610]/75 to-transparent" />
                    {/* Badge Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 bg-amber-950/85 backdrop-blur-md border border-amber-500/30 rounded-xl p-3.5 text-center shadow-lg">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Bullion &amp; Refining Pioneer</p>
                      <p className="text-amber-300 text-xs mt-0.5 font-medium">Est. SJS Gold in 2007</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center lg:text-left w-full max-w-[380px]">
                  <h3 className="text-2xl font-black text-amber-955 uppercase tracking-wide">Mr. Sunil Jaihind Salunkhe</h3>
                  <p className="text-amber-800 text-xs font-bold tracking-widest uppercase mt-1">Managing Director</p>
                  <p className="text-amber-700/80 text-[11px] font-semibold uppercase mt-0.5 tracking-wider">SJS Group &amp; EMMA Trading House</p>
                </div>
              </motion.div>

              {/* Bio Container */}
              <motion.div 
                className="lg:col-span-7 space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif text-justify"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
              >
                <p>
                  Mr. Sunil Jaihind Salunkhe began his professional journey in the bullion and precious metals industry in 1998, after completing his post-graduation, by joining his father’s gold trading business. Backed by the strong legacy of his father, Mr. Jaihind Mahadev Salunkhe, he inherited decades of deep-rooted knowledge in gold bullion, refining, and purity testing—an enduring foundation that continues to guide his leadership and vision.
                </p>
                <p>
                  An astute and forward-thinking entrepreneur, Mr. Salunkhe gained extensive hands-on experience across gold bullion operations, refining processes, and advanced purity testing methodologies. This strong technical and operational grounding, combined with his entrepreneurial acumen, enabled him to envision and build a modern, integrated gold enterprise aligned with global standards.
                </p>
                <p>
                  Driven by this vision, he established SJS Gold Private Limited in 2007, a company dedicated to excellence in three core verticals: Gold Bullion, Gold Refinery and Gold Testing. Under his leadership, the company quickly evolved into a trusted and respected name in the precious metals ecosystem, known for ethical business practices, technological advancement, and a strong customer-centric approach.
                </p>
                <p>
                  To sharpen strategic focus and enable sustainable growth, Mr. Sunil Salunkhe reorganized and diversified business operations into specialized entities. This structured approach allowed each vertical to operate independently with enhanced efficiency, governance, and scalability—significantly strengthening the Group’s overall performance.
                </p>
                <p>
                  As part of this strategic expansion, SJS Precious Metals LLP was established to manage refining and testing operations with uncompromising precision and quality control, while SJS Gold Private Limited continued to focus exclusively on bullion trading, building a strong foothold in the precious metals market.
                </p>
                <p>
                  Further extending his vision, Mr. Salunkhe ventured into the hallmarking sector with the establishment of Bombay Assay Company, a dedicated entity offering reliable, accurate, and certified hallmarking services. Bombay Assay Company is an authorized hallmarking centre for TITAN COMPANY LIMITED, operating pan India, underscoring the Group’s credibility and compliance with the highest industry standards.
                </p>
                
                {/* Custom achievements card */}
                <motion.div 
                  className="bg-white/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-3xl p-8 font-sans text-sm mt-8 shadow-sm transition-all duration-300"
                  whileHover={{ y: -4, shadow: "0 10px 25px rgba(217,119,6,0.08)" }}
                >
                  <h4 className="text-base font-black text-amber-955 uppercase mb-6 flex items-center gap-2">
                    <FaCheckCircle className="text-amber-600" />
                    By creating specialized entities, Mr. Salunkhe achieved:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#5A4F3D] font-semibold text-sm">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Focused specialization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Enhanced operational efficiency</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Strengthened compliance &amp; governance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Stronger brand positioning</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Scalable and sustainable growth</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Reduced risk &amp; increased stability</span>
                    </li>
                    <li className="col-span-1 md:col-span-2 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Continuous innovation and modernization</span>
                    </li>
                  </ul>
                </motion.div>
                
                <p>
                  In addition to his entrepreneurial achievements, Mr. Sunil Salunkhe is an accomplished and articulate speaker. He has been invited to speak at various industry conferences, forums, and professional gatherings, where he has shared insights on the bullion and precious metals sector, ethical business practices, regulatory compliance, and the future of gold refining and hallmarking in India. His practical experience, strategic vision, and clear communication style make him a respected voice among industry peers and emerging professionals alike.
                </p>
                <p>
                  Today, Mr. Sunil Salunkhe stands as a visionary leader who has transformed a family legacy into a diversified and thriving business group. His ability to innovate, build specialized enterprises, and drive excellence across every vertical has positioned the SJS Group as a powerhouse in the precious metals industry. His journey reflects resilience, foresight, and an unwavering commitment to excellence.
                </p>
              </motion.div>
            </div>

            {/* Leader 2 - Reena Madam (Bio Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pt-24 border-t border-amber-200/20">
              {/* Bio Container (Left 7 cols) */}
              <motion.div 
                className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif text-justify"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <p>
                  Mrs. Reena Sunil Salunkhe is an inspiring entrepreneur known for her determination, innovative mindset, and commitment to empowering others. With a strong belief in hard work and continuous learning, she has built a reputation as a visionary leader who turns challenges into opportunities.
                </p>
                <p>
                  Mrs Reena began her entrepreneurial journey in SJS Gold Private Limited with a clear mission—to create meaningful solutions that improve the lives of people around her. As an entrepreneur, Mrs. Reena played a vital role in strengthening the foundation of their business by taking charge of costing and administration. Her keen eye for detail, understanding of market dynamics, and ability to optimize expenses significantly contributed to the company’s stability and growth.
                </p>
                <p>
                  By effectively managing the financial framework, she ensured smooth operations and stood as a strong support to her husband, helping steer the business toward long-term success. Her dedication, teamwork, and strategic financial oversight have been instrumental in shaping their entrepreneurial achievements.
                </p>
                <p>
                  Through her dedication, she successfully established her business and transformed the SJS brand into one known for quality, trust, and customer satisfaction. Her ability to understand market needs, adapt to change, and lead with integrity has earned her the respect of clients and peers alike. She is currently serving as a Director for SJS Group of Companies and EMMA Trading House India Private Limited.
                </p>
                <p>
                  In 2021, Mrs. Reena Sunil Salunkhe stepped into a leadership role at EMMA Trading House India Pvt. Ltd., taking responsibility for cost analysis, and has been part of strategic business expansion. With her strong analytical skills and disciplined approach, she streamlined operational costs and improved efficiency, which contributed directly to the company’s steady growth. Her clear vision and commitment to excellence helped the organization strengthen to move towards long-term sustainability.
                </p>
                <p>
                  Beyond her business achievements, Mrs. Salunkhe is also passionate about uplifting women and young entrepreneurs. She often participates in community initiatives, training programs, and motivational events where she shares her experiences to inspire others to pursue their dreams fearlessly.
                </p>
                <p>
                  Driven by purpose and powered by discipline, Mrs. Reena Sunil Salunkhe continues to set new benchmarks in her field. Her entrepreneurial journey is a testament to the power of perseverance, positivity, and a strong vision for the future.
                </p>
                
                <motion.div 
                  className="border-l-4 border-amber-500 pl-6 italic bg-amber-50/50 backdrop-blur-sm py-4 pr-4 rounded-r-2xl shadow-sm border border-amber-200/30 font-serif"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-amber-955 font-semibold leading-relaxed">
                    Her leadership reflects a remarkable blend of compassion and professionalism, making her a highly respected figure in the business she leads.
                  </p>
                </motion.div>
              </motion.div>

              {/* Image Container (Right 5 cols) */}
              <motion.div 
                className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", delay: 0.15 }}
              >
                <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(40,30,15,0.15)] hover:shadow-[0_20px_50px_rgba(217,119,6,0.25)] border-4 border-[#E6C687] p-2 bg-white transition-all duration-500 group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-amber-50">
                    <img 
                      src={reenaMadamImg} 
                      alt="Mrs. Reena Sunil Salunkhe" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610]/75 to-transparent" />
                    {/* Badge Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 bg-amber-950/85 backdrop-blur-md border border-amber-500/30 rounded-xl p-3.5 text-center shadow-lg">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Financial &amp; Cost Administration Leader</p>
                      <p className="text-amber-300 text-xs mt-0.5 font-medium">Empowering Leadership</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center lg:text-right w-full max-w-[380px]">
                  <h3 className="text-2xl font-black text-amber-955 uppercase tracking-wide">Mrs. Reena Sunil Salunkhe</h3>
                  <p className="text-amber-800 text-xs font-bold tracking-widest uppercase mt-1">Director</p>
                  <p className="text-amber-700/80 text-[11px] font-semibold uppercase mt-0.5 tracking-wider">SJS Group &amp; EMMA Trading House</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. CORE VALUES SECTION */}
      <section className="w-full py-28 px-6 relative border-t border-amber-200/20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${commitGoldBg})` }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/95 via-[#261E14]/90 to-[#1A1610]/95" />
        
        {/* Floating Gold Particles Background Layer */}
        <GoldParticles count={25} />
        
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              className="text-amber-600 font-bold uppercase tracking-widest text-xs"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Upholding Legacy
            </motion.span>
            <motion.h2 
              className="text-3xl lg:text-5xl font-black text-white uppercase tracking-wide mt-2 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Core Pillars
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-4 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <SpotlightCard 
                icon={FaCheckCircle} 
                title="Integrity" 
                description="Upholding absolute purity, transparent business practices, and honesty in every bullion transaction and refinery operation. Trust is our ultimate currency."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SpotlightCard 
                icon={FaClock} 
                title="Innovation" 
                description="Utilizing advanced assaying technologies, highly optimized refining methods, and real-time live-rate digital solutions to serve our partners effectively."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SpotlightCard 
                icon={FaHandshake} 
                title="Service" 
                description="Treating every employee, dealer, and customer with equal dignity. Lending continuous guidance, support, and cultivating shared economic opportunities."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. ABOUT OUR COMPANIES SECTION */}
      <CompanyCardsSection />

    </div>
  );
}



/* ─── Company Cards Sub-Component ─── */
function CompanyCardsSection() {
  const navigate = useNavigate();
  const companies = [
    {
      id: "sjsgold",
      img: sjsGoldImg,
      title: "SJS GOLD PVT LTD:",
      text: "Is a private limited company established in 2007 engaged in trading, refining, hallmarking and assaying of Gold bullion across South India. With head office at Thrissur, and branches in Mumbai, Kochi, Kozhikode and Alappuzha, our processes exceed global standards for precision metal assessment."
    },
    {
      id: "sjsprecious",
      img: sjsRefiningImg,
      title: "SJS Precious Metals LLP:",
      text: "With over 75 years of experience, our refinery specializes in world-class gold processing. Our state-of-the-art Aqua Regia plant refines up to 100 KGs per day, ensuring purity levels of 999+ with unmatched precision and reliability."
    },
    {
      id: "bac",
      img: sjsHallmarkImg,
      title: "BOMBAY ASSAY COMPANY (BAC):",
      text: "A renowned assaying & hallmarking brand with facilities in Mumbai, Surat, Kolkata, Hosur, Udupi and Delhi — offering unmatched precision and new benchmarks in precious metal testing."
    },
  ];

  return (
    <section className="w-full py-28 px-6 bg-[#FAF6EE] border-t border-amber-200/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">
            Our Group
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-amber-955 uppercase tracking-wide mt-2">
            About Our Companies
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 rounded-full mt-4 mx-auto" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="bg-white rounded-[20px] overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(217,119,6,0.12)] transition-all duration-500 group flex flex-col shadow-sm"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={company.img}
                  alt={company.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1 bg-white">
                <p className="text-[15px] text-[#5A4F3D] leading-relaxed font-medium mb-8">
                  <span className="font-bold text-[#D4AF37] uppercase">{company.title} </span>
                  {company.text}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => {
                    if (company.id === "sjsgold") {
                      navigate("/about-sjs-gold");
                    } else if (company.id === "sjsprecious") {
                      navigate("/sjs-precious");
                    } else if (company.id === "bac") {
                      window.open("https://bombayassay.com/", "_blank", "noopener,noreferrer");
                    } else {
                      navigate("/about-sjs-gold");
                    }
                  }}
                  className="mt-auto self-start flex items-center gap-1.5 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-full px-5 py-1.5 font-bold text-sm uppercase tracking-wider transition-colors duration-300"
                >
                  <span>Read More</span>
                  <div className="flex -space-x-1">
                    <FaChevronRight className="text-[10px]" />
                    <FaChevronRight className="text-[10px]" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
