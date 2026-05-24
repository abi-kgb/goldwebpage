import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaShieldAlt,
  FaGem,
  FaExternalLinkAlt
} from "react-icons/fa";
import GoBackButton from "../components/GoBackButton";

// Images (Using available assets matching the theme)
import heroBannerImg from "../assets/hallmarking1.jpg";
import sectionImg from "../assets/hallmark2.jpg";
import bisLogo from "../assets/Gold-Hallmarking-Logo.jpg";

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

export default function Hallmarking() {
  const navigate = useNavigate();

  const coreValues = [
    "We will be fair, honest, transparent and ethical in our conduct; everything we do must stand the test of public scrutiny.",
    "We will be passionate about achieving the highest standards of quality, always promoting meritocracy.",
    "We will be bold and agile, courageously taking on challenges, using deep customer insight to develop innovative solutions for Jewellery QC."
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
          1. HERO BANNER — Hallmarking
         ═══════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        {/* Background image with parallax-like zoom */}
        <motion.div
          className="w-full h-[420px] md:h-[520px] lg:h-[600px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroBannerImg})` }}
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          {/* Gradient overlay */}
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
              Recognized BIS Center
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6 flex flex-col gap-2"
            >
              <span>Hall</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Marking
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
              "BOMBAY ASSAY COMPANY (BAC)", a sister concern of SJS Gold Private Limited, is a recognized assaying and hallmarking center from Bureau of Indian Standards (BIS) creating new milestones in the field of assaying and hallmarking of precious metal items in India.
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative gold line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════
          2. EXCELLENCE & BENCHMARK — Split Section
         ═══════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-amber-300/15 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left — Text */}
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
                Global Standards
              </motion.span>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-3 leading-tight"
              >
                Setting a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Benchmark</span>
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
              BAC aimed to set a benchmark in the Indian Jewellery quality control and inspection field. The process and facility of BAC matches and exceeds all the renowned global standards for the precious metal assessment.
            </motion.p>
            
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.35}
              className="text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-medium"
            >
              Being chosen as an exclusive hallmarking center by <strong className="text-amber-800">TITAN COMPANY LIMITED</strong>, machineries used in the BAC facilities, the highly skilled resources to handle the process, strict adherence to standards, flexibility for the exigencies of the industry and the guidance &amp; backing of top notch think tanks of the industry, keeps the BAC an edge above the others.
            </motion.p>

            {/* Read More Link Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
            >
              <a
                href="https://bombayassay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A3225] hover:bg-amber-600 text-white font-bold rounded-xl shadow-lg transition-colors duration-300 group"
              >
                Read More about BAC
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none" />
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(180,100,0,0.2)] border border-amber-200/50"
            >
              <img
                src={sectionImg}
                alt="Bombay Assay Company"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-amber-100">
                <img src={bisLogo} alt="BIS Logo" className="w-16 h-auto mix-blend-multiply" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          3. CORE VALUES — Dark section
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#1A1208] via-[#12100A] to-[#0E0B07] py-24 px-6 overflow-hidden">
        <FloatingParticle size="120px" left="5%" top="10%" delay={0} duration={8} />
        <FloatingParticle size="80px" left="85%" top="30%" delay={2} duration={6} />
        <FloatingParticle size="60px" left="40%" top="80%" delay={4} duration={7} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="text-amber-400 font-black uppercase tracking-[0.25em] text-xs block mb-3"
            >
              TATA Code of Conduct
            </motion.span>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight"
            >
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Values</span>
            </motion.h3>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.2}
              className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto mt-5"
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
              className="text-white/70 max-w-2xl mx-auto mt-6 text-sm lg:text-base font-medium"
            >
              Since BAC proudly associated with TITAN, the core values BAC derived from the TATA Code of Conduct are firmly embedded in our operations.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Value 1 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-semibold">
                We will be fair, honest, transparent and ethical in our conduct; everything we do must stand the test of public scrutiny.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <FaGem className="text-white text-xl" />
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-semibold">
                We will be passionate about achieving the highest standards of quality, always promoting meritocracy.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/50 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-semibold">
                We will be bold and agile, courageously taking on challenges, using deep customer insight to develop innovative solutions for Jewellery QC.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          4. LOCATIONS — Contact card
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF6EE] py-24 px-6 overflow-hidden border-t border-amber-200/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-200/20 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-xs block mb-3">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                Location
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-5 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Bengaluru Address */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-white/90 to-[#FAF0DC]/90 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3A3225]">
                      Bengaluru Address
                    </h3>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      BOMBAY ASSAY COMPANY
                    </span>
                  </div>
                </div>

                <p className="text-[#4A3F2C] text-sm md:text-base leading-relaxed font-medium">
                  No 750, First Floor, 33rd A Cross, 9th Main, <br />
                  Jayanagar 4th Block, Bengaluru - 560011 <br />
                  <span className="italic text-amber-700/80">(Land Mark: Café coffee day)</span>
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-700 text-xs" />
                    </div>
                    <span className="font-medium">+91 96068 03916</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-blue-600 text-xs" />
                    </div>
                    <span className="font-medium">admin@bombayassay.com</span>
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
