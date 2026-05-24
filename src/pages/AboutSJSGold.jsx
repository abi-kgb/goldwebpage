import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaStar,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaBoxes,
  FaEye,
  FaShieldAlt
} from "react-icons/fa";
import GoBackButton from "../components/GoBackButton";

// Images
import heroBannerImg from "../assets/about.jpg"; // Using 'about.jpg' from assets
import visionImg from "../assets/Our Vision and Golden Path.jpg";

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

export default function AboutSJSGold() {
  const navigate = useNavigate();

  const focusAreas = [
    {
      title: "Quality Assurance",
      desc: "We deal in bullion that meets industry standards for purity and authenticity.",
      icon: <FaStar />
    },
    {
      title: "Transparent Pricing",
      desc: "Real-time market-based pricing ensures fully transparent buying and selling.",
      icon: <FaEye />
    },
    {
      title: "Secure and Professional Handling",
      desc: "We ensure safe handling, confidentiality, and efficient processing for all transactions.",
      icon: <FaShieldAlt />
    }
  ];

  const whyChooseUs = [
    { title: "Reliability", text: "Ethical, professional, and consistent service.", icon: <FaHandshake /> },
    { title: "Market Expertise", text: "Experienced in bullion trading and market trends.", icon: <FaChartLine /> },
    { title: "Customer Focus", text: "Personalized support for investors and jewelers.", icon: <FaUsers /> },
    { title: "Efficiency", text: "Faster processing aligned with market demands.", icon: <FaCheckCircle /> },
    { title: "Stock Availability", text: "Large inventory ready for customer needs.", icon: <FaBoxes /> }
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
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A05]/95 via-[#1A1208]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A05]/60 via-transparent to-transparent" />

          {/* Floating particles */}
          <FloatingParticle size="80px" left="10%" top="20%" delay={0} duration={6} />
          <FloatingParticle size="50px" left="60%" top="15%" delay={1.5} duration={5} />
          <FloatingParticle size="100px" left="75%" top="60%" delay={3} duration={7} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="text-amber-400 text-xs font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/60 backdrop-blur-sm mb-5 inline-block w-fit"
            >
              Corporate Profile
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6 flex flex-col gap-2"
            >
              <span>About SJS Gold</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Private Limited
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
              SJS Gold Private Limited is a professionally managed company engaged in the trade of high-quality gold bullion, offering clients a reliable and transparent platform for buying and selling physical gold.
            </motion.p>
            
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.45}
              className="text-amber-300/80 text-sm md:text-base leading-relaxed font-medium max-w-2xl mt-4 italic"
            >
              Built on a foundation of trust, integrity, and customer-first values, the company aims to make gold investment simple, secure, and accessible.
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative gold line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════
          2. OUR FOCUS & EXCELLENCE
         ═══════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-300/15 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          
          {/* Left — Intro & Focus Areas */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="space-y-8"
          >
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
                className="text-amber-600 font-black uppercase tracking-[0.2em] text-xs"
              >
                Service Excellence
              </motion.span>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-3 leading-tight"
              >
                At SJS Gold, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">We Focus On:</span>
              </motion.h2>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.2}
                className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-4"
              />
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.25}
              className="text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-medium"
            >
              With a commitment to service excellence, SJS Gold Private Limited provides fair pricing, smooth transactions, and a dedicated team that ensures clarity at every stage.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-amber-50/80 to-transparent border border-amber-200/30 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                    <span className="text-white text-lg">{area.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[#3A3225] text-lg font-bold mb-1">✔ {area.title}</h4>
                    <p className="text-[#4A3F2C] text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Vision & Why Choose Us */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="space-y-12"
          >
            {/* Vision Image Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none" />
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(180,100,0,0.2)] border border-amber-200/50 bg-[#1A1208]"
              >
                <img
                  src={visionImg}
                  alt="Our Vision"
                  className="w-full h-48 object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-2xl md:text-3xl font-black text-amber-400 uppercase tracking-widest mb-3">Our Vision</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium max-w-md italic">
                    "To be recognized as the most trusted and preferred partner in gold bullion trading by delivering value, transparency, and unmatched customer experiences."
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-black text-[#3A3225] uppercase tracking-wide mb-6">
                Why Choose <span className="text-amber-600">SJS Gold?</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={0.3 + (idx * 0.1)}
                    className="p-4 rounded-xl bg-white border border-amber-200/50 shadow-sm hover:shadow-md hover:border-amber-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-amber-600 text-lg">
                        {item.icon}
                      </div>
                      <h4 className="text-[#3A3225] font-bold text-sm uppercase tracking-wide">{item.title}</h4>
                    </div>
                    <p className="text-[#4A3F2C] text-xs font-medium leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          3. LOCATIONS — Contact cards
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#1A1208] via-[#12100A] to-[#0E0B07] py-24 px-6 overflow-hidden">
        <FloatingParticle size="120px" left="5%" top="10%" delay={0} duration={8} />
        <FloatingParticle size="80px" left="85%" top="30%" delay={2} duration={6} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-black uppercase tracking-[0.25em] text-xs block mb-3">
              Trade With Confidence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight">
              Get In Touch <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">With Us</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-5 mx-auto mb-6" />
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">
              Whether you're a jeweller or investor, we are committed to helping you trade gold with confidence and clarity.
            </p>
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
              className="group relative bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Kerala
                    </h3>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                      Head Office
                    </span>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  X/6-9, Shalimar, Ambakadan Junction,
                  <br />Pallikulam Road, Thrissur 680001, Kerala
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-400 text-xs" />
                    </div>
                    <span className="font-medium">+91 999 5030 995</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-amber-400 text-xs" />
                    </div>
                    <span className="font-medium">admin@sjsgold.com</span>
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
              className="group relative bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Mumbai
                    </h3>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                      Branch Office
                    </span>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed font-medium">
                  First Floor, B-107, Floral Deck Plaza,
                  <br />MIDC Central Road, Opp. SEEPZ,
                  <br />Andheri East, Mumbai 400093, Maharashtra
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-400 text-xs" />
                    </div>
                    <span className="font-medium">+91 892 1156 668</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-amber-400 text-xs" />
                    </div>
                    <span className="font-medium">admin@sjsgold.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          4. GO BACK CTA
         ═══════════════════════════════════════════════ */}
      <div className="bg-[#FAF6EE] pb-8 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <GoBackButton onClick={() => navigate(-1)} />
        </div>
      </div>
    </motion.div>
  );
}
