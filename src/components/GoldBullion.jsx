// GoldBullion.jsx — Premium Gold Bullion Page

import React from "react";
import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import GoBackButton from "./GoBackButton";

// Images
import goldBarImg from "../assets/Gold Bar.jpeg";
import googlePlayImg from "../assets/Website Google Play IMage.jpg";
import appStoreImg from "../assets/Website Apple Store Image.jpg";
import appBannerImg from "../assets/sjspic1.png";
import appScreensImg from "../assets/sjssm3.png";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
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

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

/* ─── Floating gold particle decoration ─── */
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

const GoldBullion = ({ onBack }) => {
  const appFeatures = [
    "Real Time Bullion Rates",
    "Easy and Secure Purchase",
    "Hassle-Free Transactions",
    "Order Tracking & Notifications",
    "Trusted Quality & Purity",
    "Customer Support On-the-Go",
  ];

  return (
    <section className="w-full bg-[#FAF6EE] relative overflow-hidden border-t border-amber-200/30">
      {/* ═══════════════════════════════════════════════
          1. HERO BANNER — Gold Bullion
         ═══════════════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden">
        {/* Background image with parallax-like zoom */}
        <motion.div
          className="w-full h-[420px] md:h-[520px] lg:h-[600px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${goldBarImg})` }}
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
              SJS Gold Private Limited · Est. 2007
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wide leading-[1.1] mb-6"
            >
              Gold{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                Bullion
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
              SJS Gold Private Limited, pioneers in Bullion Sales in India,
              established in 2007 is located at Thrissur District, Kerala — one of the
              significant hubs of the Gold Industry, focused to provide Premium
              Quality, Trust &amp; Honesty, to our esteemed customers. We provide ideas
              to our clients by leveraging our experience and expertise, so that they
              can make profitable decisions.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
              className="text-amber-300/80 text-sm md:text-base leading-relaxed font-medium max-w-2xl mt-4 italic"
            >
              Since our formation we have been dedicated to customer benefit and this
              has reflected in all areas of our operation positively.
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative gold line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════
          2. DOWNLOAD SJS APP — Split Layout
         ═══════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-28">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-300/15 blur-[120px] pointer-events-none -translate-y-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left — Text & features */}
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
                SJS Mobile App
              </motion.span>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-3 leading-tight"
              >
                Download{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                  SJS App
                </span>
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
              SJS Group proudly introduces a modern, seamless, and secure way to
              buy gold bullion — directly through our mobile app. Designed for
              convenience, transparency, and real-time accessibility, the app
              brings the bullion market right to your fingertips.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.3}
              className="text-[#8B7355] text-sm font-medium italic"
            >
              By installing SJS APP you agree to Privacy Policy.
            </motion.p>

            {/* Feature list with stagger */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {appFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-50/80 to-transparent border border-amber-200/30 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="text-[#3A3225] text-sm font-semibold">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Store buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.5}
              className="flex flex-wrap gap-5 pt-2"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.sjsgoldprivatelimited"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={googlePlayImg}
                  alt="Get it on Google Play"
                  className="h-14 object-contain"
                />
              </motion.a>

              <motion.a
                href="https://apps.apple.com/us/app/sjs-gold/id6744094691"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={appStoreImg}
                  alt="Download on the App Store"
                  className="h-14 object-contain"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — App banner image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="relative"
          >
            {/* Ambient glow behind card */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-2xl pointer-events-none" />

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(180,100,0,0.2)] border border-amber-200/50"
            >
              <img
                src={appBannerImg}
                alt="SJS App Download Banner"
                className="w-full h-auto object-cover"
              />
              {/* Subtle shine overlay */}
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
          3. KEY FEATURES — Full‑width dark section
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-b from-[#1A1208] via-[#12100A] to-[#0E0B07] py-24 px-6 overflow-hidden">
        {/* Decorative elements */}
        <FloatingParticle size="120px" left="5%" top="10%" delay={0} duration={8} />
        <FloatingParticle size="80px" left="85%" top="30%" delay={2} duration={6} />
        <FloatingParticle size="60px" left="40%" top="80%" delay={4} duration={7} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — App screens */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              className="relative"
            >
              {/* Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

              <motion.img
                src={appScreensImg}
                alt="SJS App Screens"
                className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(245,158,11,0.15)] relative z-10"
                whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              />
            </motion.div>

            {/* Right — Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="space-y-8"
            >
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0}
                className="text-amber-400 font-black uppercase tracking-[0.25em] text-xs"
              >
                App Illustration
              </motion.span>

              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.1}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide leading-tight"
              >
                Trade Gold{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                  Smarter &amp; Faster
                </span>
              </motion.h3>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.2}
                className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
              />

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.3}
                className="text-white/75 text-base lg:text-lg leading-relaxed font-medium"
              >
                With our mobile app, customers can experience a smarter and faster
                way to trade gold, backed by the trust and credibility of SJS Group.
              </motion.p>

              {/* Features in dark theme */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {appFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-amber-500/30 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                  >
                    <FaCheckCircle className="text-amber-500 flex-shrink-0 text-sm" />
                    <span className="text-white/90 text-sm font-semibold">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          4. LOCATIONS — Contact cards
         ═══════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF6EE] py-24 px-6 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-200/20 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section heading */}
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
                Locations
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-5 mx-auto" />
          </motion.div>

          {/* Location cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thrissur */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-white/90 to-[#FAF0DC]/90 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3A3225]">
                      Thrissur, Kerala
                    </h3>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      Head Office
                    </span>
                  </div>
                </div>

                <p className="text-[#4A3F2C] text-sm leading-relaxed font-medium">
                  SJS Gold Private Limited X/6-9, Shalimar, Ambakadan Junction,
                  Pallikulam Road, Thrissur 680 001, Kerala.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-amber-700 text-xs" />
                    </div>
                    <span className="font-medium">+91 487 2422 031, +91 487 2424 618</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-green-600 text-xs" />
                    </div>
                    <span className="font-medium">+91 96560 1770, +91 97445 10004</span>
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

            {/* Andheri */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.25}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-white/90 to-[#FAF0DC]/90 backdrop-blur-xl border border-amber-200/50 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#3A3225]">
                      Andheri, Maharashtra
                    </h3>
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      Mumbai Office
                    </span>
                  </div>
                </div>

                <p className="text-[#4A3F2C] text-sm leading-relaxed font-medium">
                  First Floor, B-107, Floral Deck Plaza, MIDC Central Road,
                  Opp. SEEPZ, Andheri East, Mumbai 400 093, Maharashtra.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-green-600 text-xs" />
                    </div>
                    <span className="font-medium">+91 86556 90210, +91 86556 90212</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#4A3F2C]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-blue-600 text-xs" />
                    </div>
                    <span className="font-medium">Mumbai@sjsgold.com</span>
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
      <div className="bg-[#FAF6EE] pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <GoBackButton onClick={onBack} />
        </div>
      </div>
    </section>
  );
};

export default GoldBullion;