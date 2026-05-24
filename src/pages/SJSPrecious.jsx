import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaVial,
  FaFire,
  FaHandshake,
  FaBalanceScaleRight,
  FaUserTie,
  FaAward
} from "react-icons/fa";
import GoBackButton from "../components/GoBackButton";

// Images
import heroBannerImg from "../assets/refining2.jpg"; 
import servicesImg from "../assets/ref1 (2).jpeg";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── Floating particle decoration ─── */
const FloatingParticle = ({ size, left, top, delay, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left,
      top,
      background:
        "radial-gradient(circle, rgba(245,158,11,0.4) 0%, rgba(245,158,11,0) 70%)",
    }}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{
      duration: duration || 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay || 0,
    }}
  />
);

export default function SJSPrecious() {
  const navigate = useNavigate();

  const testingFeatures = [
    "Non-destructive testing methods",
    "Fire assay (if applicable)",
    "Purity verification for jewellery, scrap gold, and bullion",
    "Detailed purity and weight assessment reports"
  ];

  const refiningSources = [
    "Scrap gold",
    "Jewellery manufacturing residue",
    "Gold filings and dust",
    "Bullion-grade material"
  ];

  const whyChooseUs = [
    {
      title: "Precision & Reliability",
      desc: "Each test and refining process is conducted with attention to detail, ensuring consistent and dependable results.",
      icon: <FaBalanceScaleRight />
    },
    {
      title: "Transparency in Every Step",
      desc: "We maintain clear communication, accurate documentation, and honest practices throughout the entire process.",
      icon: <FaCheckCircle />
    },
    {
      title: "Industry Knowledge",
      desc: "Our team is trained and experienced in understanding the technical aspects of gold testing and refining.",
      icon: <FaAward />
    },
    {
      title: "Customer-Focused Approach",
      desc: "We provide timely service, professional guidance, and solutions tailored to the needs of jewellers, traders, and wholesalers.",
      icon: <FaUserTie />
    }
  ];

  const commitments = [
    "Ethical practices",
    "Quality standards",
    "Professional work culture",
    "Respect for client confidentiality"
  ];

  return (
    <motion.div
      className="relative w-full bg-[#FAF6EE] overflow-hidden border-t border-amber-200/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ═══════════════════════════════════════════════
          1. HERO BANNER
         ═══════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="w-full h-[420px] md:h-[520px] lg:h-[600px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A05]/95 via-[#1A1208]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A05]/60 via-transparent to-transparent" />

          <FloatingParticle size="80px" left="10%" top="20%" delay={0} duration={6} />
          <FloatingParticle size="50px" left="60%" top="15%" delay={1.5} duration={5} />
          <FloatingParticle size="100px" left="75%" top="60%" delay={3} duration={7} />

          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="text-amber-400 text-xs font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/60 backdrop-blur-sm mb-5 inline-block w-fit"
            >
              Over 75 Years Promoters Experience
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6 flex flex-col gap-2"
            >
              <span>SJS Precious Metals</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-3xl md:text-4xl lg:text-5xl mt-2">
                Testing &amp; Refining Excellence
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.25}
              className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.35}
              className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-2xl"
            >
              SJS Precious Metals LLP is formed as a specialized firm engaged in Gold Testing and Gold Refining, delivering reliable, accurate, and professional services to jewellers, traders, manufacturers, and investors.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.45}
              className="text-amber-300/80 text-sm md:text-base leading-relaxed font-medium max-w-2xl mt-4 italic"
            >
              Built on principles of integrity, precision, and transparency, the company aims to support the precious metals industry with trustworthy analytical and “BIS Approved” refining solutions.
            </motion.p>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════
          2. OUR CORE SERVICES
         ═══════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-300/15 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="text-center mb-16 relative z-10">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-amber-600 font-black uppercase tracking-[0.25em] text-xs block mb-3"
          >
            Specialized Solutions
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide leading-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Services</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mt-5"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative z-10">
          {/* Gold Testing */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:border-amber-400/50 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg mb-6">
              <FaVial className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-black text-[#3A3225] mb-4">1. Gold Testing <span className="text-amber-600 font-medium text-lg">(Assaying Services)</span></h3>
            <p className="text-[#4A3F2C] text-sm md:text-base leading-relaxed mb-6 font-medium">
              Accurate gold testing is the foundation of fair and transparent trade. SJS Precious Metals LLP provides professional testing services designed to determine the purity and composition of gold with precision.
            </p>
            <h4 className="text-[#3A3225] font-bold mb-3 uppercase tracking-wide text-xs">Our testing solutions include:</h4>
            <div className="space-y-3">
              {testingFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#4A3F2C] text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50/80 rounded-xl border border-amber-100 italic text-[#8B7355] text-sm">
              These services help clients make informed decisions, maintain trust with customers, and ensure transparency in every transaction.
            </div>
          </motion.div>

          {/* Gold Refining */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.4}
            className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200/50 hover:border-amber-400/50 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg mb-6">
              <FaFire className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-black text-[#3A3225] mb-4">2. Gold Refining <span className="text-amber-600 font-medium text-lg">Services</span></h3>
            <p className="text-[#4A3F2C] text-sm md:text-base leading-relaxed mb-6 font-medium">
              SJS Precious Metals LLP offers efficient and standardized gold refining services designed to recover and refine precious metal from various sources.
            </p>
            <h4 className="text-[#3A3225] font-bold mb-3 uppercase tracking-wide text-xs">Sources include:</h4>
            <div className="space-y-3">
              {refiningSources.map((source, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#4A3F2C] text-sm font-medium">{source}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50/80 rounded-xl border border-amber-100 italic text-[#8B7355] text-sm">
              Our refining process follows accepted industry procedures that focus on maximizing recovery while maintaining consistent quality. Clients receive refined gold of verified purity as per the agreed specifications.
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          3. WHY CHOOSE US & COMMITMENT — Dark section
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#1A1208] via-[#12100A] to-[#0E0B07] py-24 px-6 overflow-hidden">
        <FloatingParticle size="120px" left="5%" top="10%" delay={0} duration={8} />
        <FloatingParticle size="80px" left="85%" top="30%" delay={2} duration={6} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Why Choose Us */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-4">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">SJS Precious Metals?</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-10" />

              <div className="space-y-6">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.2 + (idx * 0.1)}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 transition-all duration-300 group"
                  >
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Commitment & Image */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.2}
              className="space-y-10"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(180,100,0,0.2)] border border-amber-200/50">
                  <img
                    src={servicesImg}
                    alt="Refining Excellence"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-6">
                  Our <span className="text-amber-500">Commitment</span>
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  SJS Precious Metals LLP is committed to supporting the gold ecosystem with services rooted in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {commitments.map((commitment, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaHandshake className="text-amber-500 flex-shrink-0" />
                      <span className="text-white font-semibold text-sm">{commitment}</span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-8 bg-gradient-to-r from-[#1A1610]/90 to-[#0A0806]/90 backdrop-blur-md rounded-r-[2rem] rounded-l-full shadow-lg pl-24 md:pl-28 pr-6 py-6 border border-amber-500/20 flex items-center min-h-[120px]">
                  <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] border-4 border-[#0A0806]">
                    <span className="text-5xl md:text-6xl text-[#1A1610] font-serif leading-none mt-4 md:mt-6">“</span>
                  </div>
                  <p className="text-amber-200 text-sm md:text-base font-medium italic leading-relaxed">
                    Our goal is to be recognized as a dependable partner for businesses that require accurate gold purity assessment and efficient refining solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          4. LOCATIONS — Contact cards
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF6EE] py-24 px-6 overflow-hidden border-t border-amber-200/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-200/20 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-xs block mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide leading-tight">
              Trade With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Confidence</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-5 mx-auto mb-6" />
            <p className="text-[#4A3F2C] text-sm md:text-base max-w-2xl mx-auto font-medium">
              If you are seeking a trusted partner for gold testing or gold refining, SJS Precious Metals LLP is here to provide reliable, transparent, and value-driven services tailored to your requirements.
            </p>
            <div className="mt-6 inline-block bg-amber-100 border border-amber-300 text-amber-800 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              Certified by BIS &amp; NABL for REFINERY and TESTING
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kerala Address */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/90 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3A3225]">
                      Kerala
                    </h3>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      Head Office
                    </span>
                  </div>
                </div>

                <p className="text-[#4A3F2C] text-sm leading-relaxed font-medium">
                  X/6-9, Shalimar, Ambakadan Junction,
                  <br />Pallikulam Road, Thrissur 680001, Kerala.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-700 text-xs" />
                    </div>
                    <span className="font-medium">+91 999 503 0995</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-blue-600 text-xs" />
                    </div>
                    <span className="font-medium">trade@sjsgold.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mumbai Address */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.25}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/90 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3A3225]">
                      Mumbai
                    </h3>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      Branch Office
                    </span>
                  </div>
                </div>

                <p className="text-[#4A3F2C] text-sm leading-relaxed font-medium">
                  First Floor, Unit No. 22, Shreenath Industrial Estate,
                  <br />Andheri Sainath Premises Co. Op Society Ltd,
                  <br />Mahakali Caves Road, Andheri East, Mumbai 400 093, Maharashtra.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-700 text-xs" />
                    </div>
                    <span className="font-medium">+91 86556 90212</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-blue-600 text-xs" />
                    </div>
                    <span className="font-medium">mumbai@sjsgold.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          5. GO BACK CTA
         ═══════════════════════════════════════════════ */}
      <div className="bg-[#FAF6EE] pb-8 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <GoBackButton onClick={() => navigate(-1)} />
        </div>
      </div>
    </motion.div>
  );
}
