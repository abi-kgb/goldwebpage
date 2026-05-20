import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import "swiper/css";
import "./App.css";

import background from "./assets/background.jpg";
import coin from "./assets/Gold Coin.jpeg";
import sjsLogo from "./assets/logo.png";
import aboutBg from "./assets/SJSNOW1.jpg";

import ServicesCarousel from "./components/ServicesCarousel";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

// Partner logos
import bhimaLogo from "./assets/Bhima.jpeg";
import augmontLogo from "./assets/AUGMONT.jpeg";
import tanishqLogo from "./assets/Tanishq.jpeg";
import joyalukkasLogo from "./assets/Joyalukas.jpeg";
import chungathLogo from "./assets/Chungath.jpeg";
import qualityLogo from "./assets/Quality.jpeg";
import regalLogo from "./assets/REGAL.jpeg";

// Store Badges
import appleStoreImg from "./assets/Website Apple Store Image.jpg";
import playStoreImg from "./assets/Website Google Play IMage.jpg";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position to trigger the logo transition
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (latest <= 100 && isScrolled) {
        setIsScrolled(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY, isScrolled]);

  // Force scroll to top on refresh/mount to ensure they always see the flipping coin
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FAF3E0] via-[#F4EAD4] to-[#EBDCB9] text-[#3A3225] min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">

      {/* STICKY HEADER COMBINING TOP BAR & NAVBAR */}
      <motion.div 
        className="fixed top-0 z-50 w-full flex flex-col shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: isScrolled ? "auto" : "none" }}
      >
        
      
        {/* MAIN NAVBAR */}
        <nav className="bg-[#FAF3E0]/85 backdrop-blur-md border-t border-amber-200/40 p-3 flex items-center px-6 shadow-sm">
          {/* LOGO SLOT (Top Left) */}
          <div className="w-48 lg:w-64 h-12 flex-shrink-0 flex items-center justify-start">
            {isScrolled && (
              <motion.img
                layoutId="company-logo"
                src={sjsLogo}
                className="h-full w-auto object-contain cursor-pointer brightness-[0.85] contrast-[1.05]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            )}
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex-1 flex flex-wrap justify-end items-center gap-8 text-md font-semibold text-[#4A3F2C]">
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Home</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About Us</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Our Team</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">CSR</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">SJS Foundation</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Join Our Team</a>
            <a href="#" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contact Us</a>
            
            {/* HIGHLIGHTED LIVE RATE BUTTON */}
            <a href="#" className="bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-black px-5 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Live Rate
            </a>
          </div>
        </nav>
          {/* TOP CONTACT BAR */}
        <div className="bg-[#FAF3E0]/85 backdrop-blur-md px-6 py-2 flex justify-end items-center text-sm text-amber-800 font-semibold border-b border-amber-200/40">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2"><FaPhoneAlt className="text-amber-600" /><p>+91 99616 40004</p></div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-amber-600" /><p>admin@sjsgold.com</p></div>
            
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="hover:scale-105 transition-transform duration-300">
                <img src={playStoreImg} alt="Get it on Google Play" className="h-8 w-auto rounded object-contain" />
              </a>
              <a href="#" className="hover:scale-105 transition-transform duration-300">
                <img src={appleStoreImg} alt="Download on the App Store" className="h-8 w-auto rounded object-contain" />
              </a>
            </div>
            
            <FaLinkedin className="text-xl cursor-pointer hover:text-amber-950 transition-all" />
            <FaTwitter className="text-xl cursor-pointer hover:text-amber-950 transition-all" />
          </div>
        </div>

      </motion.div>
  
      {/* HERO SECTION */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-transparent relative pt-16 pb-12 overflow-hidden">
        {/* Soft elegant ambient background gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-amber-300/30 blur-[100px] pointer-events-none z-0"></div>

        {/* LARGE CENTER COIN */}
        <div className="flex flex-col items-center justify-center z-10 w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]">
          {!isScrolled && (
            <motion.div
              initial={{ rotateY: 360, scale: 0.5, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 50, damping: 10 }}
              className="w-full h-full"
              style={{ perspective: 1000 }}
            >
              <motion.img
                src={coin}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          )}
        </div>
        
        {!isScrolled && (
          <motion.img
            layoutId="company-logo"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            src={sjsLogo}
            className="h-20 lg:h-28 mt-12 object-contain z-10 brightness-[0.85] contrast-[1.05]"
            alt="SJS Logo"
          />
        )}
      </section>

      {/* ABOUT SECTION (Moved below the fold with premium background image integration) */}
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden py-24 px-6 border-t border-amber-200/40">
        {/* Elegant gold textured background image layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100" 
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        {/* Semi-transparent champagne/ivory overlay with soft backdrop blur for premium depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FAF3E0]/40 via-[#F4EAD4]/20 to-[#FAF3E0]/40 backdrop-blur-[1px]" />

        {/* Content Wrapper floating above the background */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-5xl font-extrabold leading-tight text-black text-center"
          >
            ABOUT <span className="text-amber-900">SJS</span>
            <br />
            GROUP OF COMPANIES
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 80 }}
            className="w-40 h-1 bg-amber-500 rounded-full mt-5 origin-center mb-16"
          ></motion.div>

          {/* Heritage Introductory Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg lg:text-xl font-medium text-black leading-relaxed text-center max-w-3xl mx-auto mb-16"
          >
            The SJS Group has grown into a diverse and respected name in the gold industry, built on a solid foundation of trust, quality, and lasting customer relationships.
          </motion.p>

          {/* 2x2 Grid of Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
            {/* Milestone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
              className="milestone-card bg-[#FAF3E0]/75 backdrop-blur-md border border-amber-200/40 rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-300 flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/40">1969</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">The Foundation & Heritage</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base">
                  What began in 1969 as a single jewelry shop in Kochi, Kerala—founded by Late Chairman Mr. Jaihind Mahadev Salunkhe—has evolved into a nationwide gold enterprise. Originally known as Shalimar Jewellers, the brand earned a reputation for trust, quality, and lasting customer relationships.
                </p>
              </div>
            </motion.div>

            {/* Milestone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="milestone-card bg-[#FAF3E0]/75 backdrop-blur-md border border-amber-200/40 rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-300 flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/40">2007</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Leadership & Evolution</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base">
                  In 2007, leadership transitioned to his son, Mr. Sunil Jaihind Salunkhe, who transformed the business into SJS Gold Private Limited. Under his guidance, the company significantly expanded its focus to include Bullion Sales and Refinery Operations.
                </p>
              </div>
            </motion.div>

            {/* Milestone 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="milestone-card bg-[#FAF3E0]/75 backdrop-blur-md border border-amber-200/40 rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-300 flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/40">Operations</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Strategic Restructuring</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base">
                  To support continued growth, the company later restructured—retaining bullion sales under the parent entity while establishing SJS Precious Metals LLP to manage all refinery and testing operations.
                </p>
              </div>
            </motion.div>

            {/* Milestone 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="milestone-card bg-[#FAF3E0]/75 backdrop-blur-md border border-amber-200/40 rounded-2xl p-8 shadow-sm cursor-pointer transition-all duration-300 flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-200/40">Partnership</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Quality & Assurance</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base">
                  As part of its strategic investment portfolio, SJS Gold Private Limited partnered with the Bombay Assay Company (BAC), a BIS-recognized leader in gold hallmarking and quality testing in India.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vision Statement Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px rgba(217, 119, 6, 0.25)" 
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-8 lg:p-10 shadow-lg max-w-5xl w-full mx-auto mt-16 flex flex-col md:flex-row items-center gap-6 justify-between border border-amber-500/30 cursor-pointer transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <span className="text-amber-200 text-xs font-bold uppercase tracking-widest">Our Strategic Vision</span>
              <p className="text-xl lg:text-2xl font-bold leading-relaxed max-w-2xl italic text-amber-100">
                “Spread Our Wings”
              </p>
              <p className="text-amber-50/90 text-sm lg:text-base leading-relaxed mt-2">
                We are embarking on a strategic expansion across various regions of India, extending our footprint while upholding our commitment to quality, trust, and excellence.
              </p>
            </div>
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hidden md:block">
              <span className="text-2xl font-black text-amber-200 tracking-wider">SJS GOLD</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesCarousel />

      {/* TRUSTED BY SECTION (FRAMER MOTION ANIMATED GRID) */}
      <section className="w-full bg-[#FAF3E0]/45 py-16 overflow-hidden border-y border-amber-200/20 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 mb-12 text-center flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#3A3225] uppercase tracking-widest mb-4">
            Trusted <span className="text-amber-600">Partners</span>
          </h3>
          <div className="w-24 h-1 bg-amber-500 rounded-full" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {/* The 7 Unique Logos with Staggered Entrance & Subtle Float */}
            {[
              { src: bhimaLogo, alt: "Bhima Gold", size: "h-20 md:h-24 lg:h-32", delay: 0 },
              { src: augmontLogo, alt: "Augmont", size: "h-14 md:h-16 lg:h-20", delay: 0.5 },
              { src: tanishqLogo, alt: "Tanishq", size: "h-24 md:h-28 lg:h-36", delay: 1 },
              { src: joyalukkasLogo, alt: "Joyalukkas", size: "h-20 md:h-24 lg:h-32", delay: 1.5 },
              { src: chungathLogo, alt: "Chungath", size: "h-20 md:h-24 lg:h-32", delay: 2 },
              { src: qualityLogo, alt: "Quality Bullion", size: "h-24 md:h-28 lg:h-36", delay: 2.5 },
              { src: regalLogo, alt: "Regal", size: "h-20 md:h-24 lg:h-32", delay: 3 },
            ].map((logo, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 40 },
                  show: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 150, damping: 15 }
                  }
                }}
                whileHover={{ scale: 1.15, y: -10, transition: { duration: 0.2 } }}
                className="cursor-pointer"
              >
                <motion.img 
                  src={logo.src} 
                  alt={logo.alt} 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: logo.delay // Different delays so they don't float uniformly
                  }}
                  className={`${logo.size} w-auto object-contain mix-blend-multiply drop-shadow-md`} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsCarousel />

      {/* ENHANCED 3D FACETED INGOT / GEM CUT TRANSITION */}
      <div className="w-full relative leading-[0] z-10">
        <svg className="w-full h-[80px] md:h-[140px] block" viewBox="0 0 1200 140" preserveAspectRatio="none">
          {/* Base bottom anchor layer */}
          <polygon points="0,140 1200,140 1200,100 0,100" fill="#0A0806" />
          
          {/* 5-part 3D shading for the facets */}
          {/* Far Left Facet */}
          <polygon points="0,140 200,140 300,50 0,100" fill="#241E15" />
          {/* Inner Left Facet */}
          <polygon points="200,140 450,140 550,20 300,50" fill="#2D251A" />
          {/* Center Facet */}
          <polygon points="450,140 750,140 650,20 550,20" fill="#1A1610" />
          {/* Inner Right Facet */}
          <polygon points="750,140 1000,140 900,50 650,20" fill="#100E0A" />
          {/* Far Right Facet */}
          <polygon points="1000,140 1200,140 1200,100 900,50" fill="#0A0806" />
          
          {/* Glowing gold geometric edge lines for extra definition */}
          <polyline points="0,100 300,50 550,20 650,20 900,50 1200,100" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="140" x2="300" y2="50" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="450" y1="140" x2="550" y2="20" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="750" y1="140" x2="650" y2="20" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="1000" y1="140" x2="900" y2="50" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* FOOTER SECTION */}
      <footer className="w-full relative bg-[#1A1610] text-amber-50">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8 text-left">
            
            {/* Column 1: Bullion Sales */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Bullion Sales</h5>
              
              <div className="mb-6">
                <h6 className="text-sm font-bold text-white mb-3">Corporate Office</h6>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Gold Private Limited<br/>
                    X/6-9, Shalimar, Ambakadan Junction,<br/>
                    Pallikulam Road, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 487 2423 2031</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 487 2424 618</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">trade@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="text-sm font-bold text-white mb-3">Branch Office</h6>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    First Floor, B-107, Floral Deck Plaza,<br/>
                    MIDC Central Road, Opp. SEEPZ,<br/>
                    Andheri East, Mumbai 400 093, Maharashtra
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90210</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90211</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Refining Collection & Delivery */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Refining Collection &amp; Delivery</h5>
              
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Precious Metals LLP<br/>
                    35/642/5A, Shalimar, Ambakkadan Junction,<br/>
                    Pallikulam Road, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 999 5030 995</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    14/924-A, Parashakti Building,<br/>
                    Opposite Ganapati Temple,<br/>
                    Mullackal, Alappuzha 688 011, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">trade@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    First Floor, Unit No. 22, Shreenath Industrial Estate,<br/>
                    Andheri Sainath Premises Co. Op Society Ltd,<br/>
                    Mahakali Caves Road, Andheri East,<br/>
                    Mumbai 400 093, Maharashtra
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90212</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">mumbai@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Hallmarking */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Hallmarking</h5>
              
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-white font-semibold">BOMBAY ASSAY COMPANY</strong><br/>
                    No 750, First Floor, 33rd A Cross,<br/>
                    9th Main, Jayanagar 4th Block,<br/>
                    Bengaluru 560 011, Karnataka
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 96068 03916</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@bombayassay.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Testing Collection & Delivery */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Testing Collection &amp; Delivery</h5>
              
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Precious Metals LLP<br/>
                    35/1318/12, ONE SHALIMAR,<br/>
                    Koppan Lane, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 75588 34422</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">sjspm@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">© 2026 SJS Gold. All rights reserved.</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Engineered with Precision &amp; Trust.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING COIN (Appears on bottom right when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-8 right-8 z-40 w-16 h-16 cursor-pointer rounded-full overflow-visible shadow-[0_0_25px_rgba(217,119,6,0.4)] border border-amber-500 bg-[#FAF3E0] p-1"
            initial={{ scale: 0, opacity: 0, y: 50, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50, rotateY: 180 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Scroll to Top"
            style={{ perspective: 1000 }}
          >
            <motion.img
              src={coin}
              className="w-full h-full object-contain rounded-full"
              animate={{ rotateY: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "linear"
              }}
              alt="Floating Coin"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}