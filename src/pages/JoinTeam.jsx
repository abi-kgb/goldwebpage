import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaLightbulb, FaHeartbeat, FaClock, FaUtensils, FaShieldAlt, FaBriefcaseMedical, FaEnvelope } from "react-icons/fa";

// Import Careers page assets
import joinHeroBg from "../assets/Our Commitment to Brilliance.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function JoinTeam() {
  const pillars = [
    {
      icon: <FaUsers />,
      title: "A Workplace Where You Belong",
      desc: "We strive to create an environment where every team member feels welcomed, respected, and valued. From day one, you’ll experience a culture built on trust, collaboration, and genuine support. We want you to feel at home—motivated to contribute, confident to innovate, and inspired to grow."
    },
    {
      icon: <FaChartLine />,
      title: "Opportunities to Grow and Excel",
      desc: "Whether you are starting your career or looking to advance to the next level, SJS Group offers diverse opportunities across our businesses. We encourage continuous learning and provide access to training, mentorship, and professional development programs designed to help you reach your full potential."
    },
    {
      icon: <FaLightbulb />,
      title: "Empowering You to Do More",
      desc: "Our philosophy is simple: when we empower our people, great things happen. We give our associates the freedom to take initiative, the resources to perform at their best, and the encouragement to bring ideas that move us forward. Your voice matters here—and your contributions make a real impact."
    },
    {
      icon: <FaHeartbeat />,
      title: "A Commitment to Your Well-being",
      desc: "We care deeply about the holistic well-being of our employees. From a supportive work environment to initiatives that promote health, balance, and career satisfaction, we are committed to helping you succeed both professionally and personally."
    }
  ];

  const facilities = [
    { icon: <FaClock />, label: "Flexible Working Hours*" },
    { icon: <FaUtensils />, label: "In-House Meals" },
    { icon: <FaShieldAlt />, label: "Provident Fund (PF)" },
    { icon: <FaBriefcaseMedical />, label: "Health Insurance" },
    { icon: <FaHeartbeat />, label: "Accidental Insurance" }
  ];

  return (
    <div className="relative pb-0 bg-[#FAF6EE] text-[#3A3225] overflow-hidden min-h-screen">
      {/* Soft elegant ambient background gold glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${joinHeroBg}")` }}
          initial={{ scale: 1.15, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium dark-gold overlay - Fixed visibility */}
        <div className="absolute inset-0 bg-[#1A1610]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-transparent to-[#1A1610]/80" />

        {/* Floating Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.9)]"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, Math.random() * 0.8 + 0.2, 0],
                y: - (Math.random() * 150 + 50) 
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-955/60 mb-4 inline-block shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Careers at SJS Group
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md">
            Join Our Team
          </h1>
          <div className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-4"></div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center relative z-10">
        <motion.p 
          className="text-lg lg:text-xl text-[#5A4F3D] leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          At SJS Group, we believe that our greatest strength lies in our people. Every individual who joins us becomes part of a culture where passion, purpose, and performance come together. We are personally invested in the growth and well-being of our associates—because when our people thrive, our organization thrives.
        </motion.p>
      </section>

      {/* 2. PILLARS OF OUR CULTURE */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-10 shadow-lg hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl bg-white border-2 border-amber-500/40 hover:border-amber-500"
            >
              {/* Subtle hover glow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-colors duration-500 pointer-events-none"></div>

              <div className="relative flex items-center justify-start text-amber-500 text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:text-amber-600 transition-all duration-500 z-10 origin-left">
                {pillar.icon}
              </div>
              <h3 className="relative text-2xl font-black text-amber-955 uppercase tracking-wide mb-4 z-10 group-hover:text-amber-600 transition-colors duration-300">{pillar.title}</h3>
              <p className="relative text-[#5A4F3D] leading-relaxed font-medium text-sm md:text-base z-10">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FACILITIES & BENEFITS */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-[#1A1610] to-[#2B2317] text-[#FAF6EE] relative z-10 mt-12">
        {/* Abstract animated background elements */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-amber-600/10 blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Employee Benefits</span>
          <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-wide mt-2 mb-16">
            World-Class Facilities
          </h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col items-center group w-32 md:w-40"
              >
                <div className="w-20 h-20 rounded-full bg-[#1A1610] border border-amber-500/40 flex items-center justify-center text-amber-500 text-3xl mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)] group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  {fac.icon}
                </div>
                <h4 className="text-xs md:text-sm font-bold text-amber-100 uppercase tracking-wider text-center group-hover:text-amber-400 transition-colors duration-300">
                  {fac.label}
                </h4>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-amber-500/60 text-[10px] mt-12 uppercase tracking-widest font-bold">* Flexible Working Hours depends on the department</p>
        </div>
      </section>

      {/* 4. JOIN US CTA */}
      <section className="w-full py-32 px-6 bg-white relative z-10 flex flex-col items-center justify-center border-t border-amber-200/50">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-955 uppercase tracking-wide">
              Join Us and Build Your Future
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 rounded-full mt-6 mx-auto"></div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-[#5A4F3D] font-medium leading-relaxed px-4 md:px-12"
            variants={fadeInUp}
          >
            At SJS Group, you don’t just build a career—you build a future shaped by opportunity, respect, and purpose. If you’re driven, passionate, and ready to grow, we invite you to explore a career with us.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="pt-8 pb-4">
            <a 
              href="mailto:jobs@sjsgold.com"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-5 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest font-bold text-amber-200">Send your resume to</div>
                <div className="text-xl md:text-2xl font-black tracking-wide">jobs@sjsgold.com</div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-xl md:text-3xl text-amber-700 font-serif italic leading-relaxed pt-10">
              "Grow with a company that believes in your strengths and empowers your ambitions!!"
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
