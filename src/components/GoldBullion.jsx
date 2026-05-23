// GoldBullion.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

// IMPORT YOUR IMAGES
import goldBarImg from "../assets/Gold Bar.jpeg";
import googlePlayImg from "../assets/Website Google Play IMage.jpg";
import appStoreImg from "../assets/Website Apple Store Image.jpg";
import appBannerImg from "../assets/sjspic1.png";
import appScreensImg from "../assets/sjssm3.png";

const GoldBullion = ({ onBack }) => {

  const [isGoldContentExpanded, setGoldContentExpanded] =
    useState(false);

  return (

    <section className="w-full bg-[#FAF6EE] relative overflow-hidden border-t border-amber-200/30 pt-28 md:pt-32 lg:pt-36">

      {/* ─── GOLD BULLION SECTION ─── */}

      {/* ── 1. INTRO BANNER: Bullion Bars ── */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="w-full h-[340px] md:h-[420px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${goldBarImg})` }}
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1208]/90 via-[#1A1208]/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-amber-400 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 mb-4 inline-block w-fit"
            >
              SJS Gold Private Limited · Est. 2007
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide leading-tight mb-4 drop-shadow-lg"
            >
              Gold <span className="text-amber-400">Bullion</span>
            </motion.h2>

            <div className="space-y-4">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-white/85 text-sm md:text-base leading-relaxed font-medium max-w-xl"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp:
                    isGoldContentExpanded ? "none" : 3,
                  overflow: "hidden",
                }}
              >
                SJS Gold Private Limited, pioneers in Bullion Sales in India, established in 2007 and located in Thrissur District, Kerala — a significant hub of the gold industry. We provide premium quality, trust, and integrity to our customers, leveraging decades of experience so clients can make profitable and confident decisions.
              </motion.p>

              {!isGoldContentExpanded && (
                <button
                  onClick={() =>
                    setGoldContentExpanded(true)
                  }
                  className="text-amber-400 font-semibold text-sm hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  Read more
                  <FaChevronDown className="text-xs" />
                </button>
              )}

              {isGoldContentExpanded && (
                <div className="prose text-white/90 max-w-xl">
                  <p>
                    Download SJS APP — SJS Group proudly introduces a modern, seamless, and secure way to buy gold bullion directly through our mobile app. Designed for convenience, transparency, and real-time accessibility, the app brings the bullion market right to your fingertips. App is available in both Google Play and Apple Store.
                  </p>

                  <h3>SJS APP — Key features</h3>
                  <ul>
                    <li>Real Time Bullion Rates</li>
                    <li>Easy and Secure Purchase</li>
                    <li>Hassle-Free Transactions</li>
                    <li>Order Tracking & Notifications</li>
                    <li>Trusted Quality & Purity</li>
                    <li>Customer Support On-the-Go</li>
                  </ul>

                  <h3 className="mt-4">Locations</h3>
                  <p>
                    <strong>Thrissur, Kerala</strong><br />
                    SJS Gold Private Limited X/6-9, Shalimar, Ambakadan Junction, Pallikulam Road, Thrissur 680 001, Kerala.<br />
                    Call : +91 487 2422 031, +91 487 2424 618<br />
                    WhatsApp/Call : +91 96560 1770, +91 97445 10004<br />
                    Email : trade@sjsgold.com
                  </p>

                  <p>
                    <strong>Andheri, Maharashtra</strong><br />
                    First Floor, B-107, Floral Deck Plaza, MIDC Central Road, Opp. SEEPZ, Andheri East, Mumbai 400 093, Maharashtra.<br />
                    WhatsApp/Call : +91 86556 90210, +91 86556 90212<br />
                    Email : Mumbai@sjsgold.com
                  </p>

                  <p className="mt-4 font-medium">By installing SJS APP you agree to Privacy Policy.</p>
                </div>
              )}

              {/* BACK BUTTON */}
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold tracking-wide shadow-lg transition-all duration-300 w-fit"
              >
                ← Back
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>

      {/* ── 2. DOWNLOAD SJS APP ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div>
              <span className="text-amber-600 font-black uppercase tracking-widest text-xs">
                SJS Mobile App
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-[#3A3225] uppercase tracking-wide mt-2 leading-tight">
                Download
                <span className="text-amber-600">
                  {" "}
                  SJS App
                </span>
              </h2>

              <div className="w-16 h-1 bg-amber-500 rounded-full mt-3" />
            </div>

            <p className="text-[#4A3F2C] text-base leading-relaxed font-medium">
              SJS Group proudly introduces a modern, seamless,
              and secure way to buy gold bullion directly
              through our mobile app.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              {[
                "Real Time Bullion Rates",
                "Easy and Secure Purchase",
                "Hassle-Free Transactions",
                "Order Tracking & Notifications",
                "Trusted Quality & Purity",
                "Customer Support On-the-Go",
              ].map((feature, idx) => (

                <motion.div
                  key={idx}
                  className="flex items-center gap-2.5"
                >
                  <FaCheckCircle className="text-amber-600 flex-shrink-0 text-sm" />

                  <span className="text-[#3A3225] text-sm font-semibold">
                    {feature}
                  </span>
                </motion.div>

              ))}

            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.sjsgoldprivatelimited"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <img
                  src={googlePlayImg}
                  alt="Get it on Google Play"
                  className="h-12 object-contain rounded-lg shadow-md"
                />
              </motion.a>

              <motion.a
                href="https://apps.apple.com/us/app/sjs-gold/id6744094691"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <img
                  src={appStoreImg}
                  alt="Download on the App Store"
                  className="h-12 object-contain rounded-lg shadow-md"
                />
              </motion.a>

            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >

            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(217,119,6,0.2)] border border-amber-200/40">

              <img
                src={appBannerImg}
                alt="SJS App Download Banner"
                className="w-full h-auto object-cover"
              />

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── 3. APP SCREENS SHOWCASE ── */}
      <div className="bg-gradient-to-b from-[#1A1208] to-[#0E0B07] py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <img
                src={appScreensImg}
                alt="SJS App Screens"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />

            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >

              <span className="text-amber-400 font-black uppercase tracking-widest text-xs">
                App Illustration
              </span>

              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide leading-tight">
                Trade Gold
                <span className="text-amber-400">
                  {" "}
                  Smarter & Faster
                </span>
              </h3>

            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
export default GoldBullion;