import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaGooglePlay, FaApple, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

import coin from "../assets/Gold Coin.jpeg";
import sjsLogo from "../assets/logo.png";
import aboutBg from "../assets/SJSNOW1.jpg";

import ServicesCarousel from "../components/ServicesCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

// Gold Bullion section images
import goldBarImg from "../assets/Gold Bar.jpeg";
import appBannerImg from "../assets/sjspic1.png";
import appScreensImg from "../assets/sjssm3.png";
import googlePlayImg from "../assets/Website Google Play IMage.jpg";
import appStoreImg from "../assets/Website Apple Store Image.jpg";

// Partner logos
import bhimaLogo from "../assets/Bhima.jpeg";
import augmontLogo from "../assets/AUGMONT.jpeg";
import tanishqLogo from "../assets/Tanishq.jpeg";
import joyalukkasLogo from "../assets/Joyalukas.jpeg";
import chungathLogo from "../assets/Chungath.jpeg";
import qualityLogo from "../assets/Quality.jpeg";
import regalLogo from "../assets/REGAL.jpeg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isGoldContentExpanded, setIsGoldContentExpanded] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className="relative">
      
      {/* HERO SECTION */}
      <section className="w-full h-screen flex flex-col items-center justify-center bg-transparent relative pt-16 pb-12 overflow-hidden">
        {/* Soft elegant ambient background gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-amber-300/30 blur-[100px] pointer-events-none z-0"></div>

        {/* LARGE CENTER COIN */}
        <div className="flex flex-col items-center justify-center z-10 w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] lg:-mt-44">
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
                alt="Gold Coin"
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
            className="h-20 lg:h-28 mt-12 lg:-mt-8 object-contain z-10 brightness-[0.85] contrast-[1.05]"
            alt="SJS Logo"
          />
        )}
      </section>

      {/* ABOUT SECTION SUMMARY */}
      <section className="w-full flex flex-col items-center justify-center relative overflow-hidden py-24 px-6 border-t border-amber-200/40">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100" 
          style={{ backgroundImage: `url(${aboutBg})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FAF3E0]/40 via-[#F4EAD4]/20 to-[#FAF3E0]/40 backdrop-blur-[1px]" />

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

          <p className="text-lg lg:text-xl font-medium text-black leading-relaxed text-center max-w-3xl mx-auto mb-12">
            The SJS Group has grown into a diverse and respected name in the gold industry, built on a solid foundation of trust, quality, and lasting customer relationships.
          </p>



          {/* 2x2 Grid of Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
            {/* Milestone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="milestone-card bg-gradient-to-b from-[#FAF6ED]/85 to-[#EFE2C6]/85 backdrop-blur-md border border-[#E9D5B5]/60 rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40">1969</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">The Foundation &amp; Heritage</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base font-medium">
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
              className="milestone-card bg-gradient-to-b from-[#FAF6ED]/85 to-[#EFE2C6]/85 backdrop-blur-md border border-[#E9D5B5]/60 rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40">2007</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Leadership &amp; Evolution</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base font-medium">
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
              className="milestone-card bg-gradient-to-b from-[#FAF6ED]/85 to-[#EFE2C6]/85 backdrop-blur-md border border-[#E9D5B5]/60 rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40">Operations</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Strategic Restructuring</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base font-medium">
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
              className="milestone-card bg-gradient-to-b from-[#FAF6ED]/85 to-[#EFE2C6]/85 backdrop-blur-md border border-[#E9D5B5]/60 rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-4"
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100/90 text-amber-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40">Partnership</span>
                  <h3 className="text-lg font-bold text-[#3A3225]">Quality &amp; Assurance</h3>
                </div>
                <p className="text-[#4A3F2C] leading-relaxed text-sm lg:text-base font-medium">
                  As part of its strategic investment portfolio, SJS Gold Private Limited partnered with the Bombay Assay Company (BAC), a BIS-recognized leader in gold hallmarking and quality testing in India.
                </p>
              </div>
            </motion.div>
          </div>

          {/* STRATEGIC VISION CARD (INTEGRATED UNDERNEATH MILESTONES ON SAME GOLD-COIN BACKGROUND) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-5xl mt-16 bg-[#BC5200] backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Ambient inner card glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-[50px] pointer-events-none" />

            <div className="flex-1 z-10 text-left">
              <span className="text-amber-300 text-xs font-black uppercase tracking-widest mb-3 block">
                OUR STRATEGIC VISION
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-black text-white italic mb-4 leading-tight">
                "Spread Our Wings"
              </h2>
              <p className="text-white/95 text-sm lg:text-base leading-relaxed max-w-2xl font-medium">
                We are embarking on a strategic expansion across various regions of India, extending our footprint while upholding our commitment to quality, trust, and excellence.
              </p>
            </div>
            
            <div className="bg-[#782D00]/50 hover:bg-[#782D00]/65 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-5 shadow-xl flex-shrink-0 z-10 transition-all duration-300 cursor-pointer">
              <span className="text-[#F59E0B] text-2xl lg:text-3xl font-black uppercase tracking-wider">SJS GOLD</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesCarousel />

   

      {/* TRUSTED BY SECTION */}
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
                    delay: logo.delay
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

      {/* 3D INGOT CUT TRANSITION SECTION */}
      <div className="w-full relative leading-[0] z-10">
        <svg className="w-full h-[80px] md:h-[140px] block" viewBox="0 0 1200 140" preserveAspectRatio="none">
          <polygon points="0,140 1200,140 1200,100 0,100" fill="#0A0806" />
          <polygon points="0,140 200,140 300,50 0,100" fill="#241E15" />
          <polygon points="200,140 450,140 550,20 300,50" fill="#2D251A" />
          <polygon points="450,140 750,140 650,20 550,20" fill="#1A1610" />
          <polygon points="750,140 1000,140 900,50 650,20" fill="#100E0A" />
          <polygon points="1000,140 1200,140 1200,100 900,50" fill="#0A0806" />
          <polyline points="0,100 300,50 550,20 650,20 900,50 1200,100" fill="none" stroke="#F59E0B" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="140" x2="300" y2="50" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="450" y1="140" x2="550" y2="20" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="750" y1="140" x2="650" y2="20" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
          <line x1="1000" y1="140" x2="900" y2="50" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

    </div>
  );
}
