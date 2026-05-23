import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaHandHoldingHeart, FaUtensils, FaUsers, FaCheckCircle, FaLeaf } from "react-icons/fa";

// Import Foundation asset
import foundationHeroBg from "../assets/sjs foundations.JPG";
import footerBg from "../assets/background.jpg";
import missionBg from "../assets/SJSWAVY.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Foundation() {
  const missions = [
    {
      icon: <FaGraduationCap />,
      title: "Education & Scholarships",
      desc: "Supporting education for children from underprivileged families."
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare Assistance",
      desc: "Providing healthcare access to those who cannot afford it."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Skill Development",
      desc: "Empowering communities through vocational training and skill development."
    },
    {
      icon: <FaUtensils />,
      title: "Humanitarian Relief",
      desc: "Feeding programs and humanitarian relief efforts."
    },
    {
      icon: <FaUsers />,
      title: "Women & Youth",
      desc: "Women and youth development initiatives that inspire independence and confidence."
    }
  ];

  return (
    <div className="relative pt-24 pb-0 bg-[#FAF6EE] text-[#3A3225] overflow-hidden min-h-screen">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${foundationHeroBg}")` }}
          initial={{ scale: 1.15, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium dark-gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/95 via-[#261E14]/85 to-[#FAF6EE]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-955/60 mb-6 inline-block shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            A Legacy of Compassion and Service
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SJS Foundations
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-amber-200 font-serif italic mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Established by Our Chairman, Late Mr. Jaihind Mahadev Salunkhe
          </motion.p>
          <motion.div 
            className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </div>
      </section>

      {/* 2. NARRATIVE INTRODUCTION */}
      <section className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl lg:text-2xl text-[#5A4F3D] leading-relaxed font-serif italic">
            "SJS Foundations is more than a charitable trust—it is a living legacy of the compassion, integrity, and vision of our beloved Chairman, Late Mr. Jaihind Mahadev Salunkhe. Built on his lifelong belief in uplifting the underserved and creating equal opportunities for all, SJS Foundations continues to carry forward the values he championed: humanity, dignity, and hope."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Legacy Born from Compassion */}
          <motion.div 
            className="bg-white rounded-[2rem] p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <h3 className="text-xl font-black text-amber-955 uppercase tracking-wide mb-4">A Legacy Born from Compassion</h3>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-6"></div>
            <p className="text-[#5A4F3D] text-sm leading-relaxed mb-4 font-medium flex-grow">
              Late Mr. Salunkhe founded SJS Foundations with a deep desire to bring hope and support to individuals who face hardship. His values—humility, generosity, and dedication—became the pillars of the trust’s initiatives.
            </p>
            <p className="text-[#5A4F3D] text-sm leading-relaxed font-medium">
              Whether it was supporting education, addressing health needs, or assisting families during crises, his heart was always with the community.
            </p>
          </motion.div>

          {/* Vision Rooted in Humanity */}
          <motion.div 
            className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] rounded-[2rem] p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full lg:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="text-xl font-black text-amber-955 uppercase tracking-wide mb-4">A Vision Rooted in Humanity</h3>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-6"></div>
            <p className="text-[#5A4F3D] text-sm leading-relaxed mb-6 font-medium flex-grow">
              Late Mr. Salunkhe believed that true success is measured not by wealth, but by the positive impact one creates in the lives of others. Guided by this principle, he founded SJS Foundations to support individuals and communities in need.
            </p>
            <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-4 italic text-center text-sm text-amber-800 shadow-inner">
              “No one should be left behind. Everyone deserves a chance to live with dignity.”
            </div>
          </motion.div>

          {/* Strengthened by Next Gen */}
          <motion.div 
            className="bg-amber-50 rounded-[2rem] p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400/50 transition-all duration-500 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-black text-amber-955 uppercase tracking-wide mb-4">Strengthened by the Next Gen</h3>
            <div className="w-12 h-1 bg-amber-500 rounded-full mb-6"></div>
            <p className="text-[#5A4F3D] text-sm leading-relaxed font-medium mb-4 flex-grow">
              Following his father’s footsteps, Mr. Sunil Jaihind Salunkhe has taken up the mantle with pride and responsibility. With his leadership, the foundation is continuing to grow stronger, expanding its programs and increasing its reach.
            </p>
            <p className="text-[#5A4F3D] text-sm leading-relaxed font-medium">
              He brings a modern approach while preserving core values, ensuring the foundation remains a force of positive change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <section className="w-full py-28 px-6 relative border-t border-amber-500/30 bg-[#0A0806] overflow-hidden">
        {/* Ambient Dark Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-amber-900/10 blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full bg-amber-600/10 blur-[150px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#0A0806]/50 to-[#0A0806] pointer-events-none"></div>
        </div>

        {/* Floating Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.9)]"
              style={{
                width: Math.random() * 5 + 2 + 'px',
                height: Math.random() * 5 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, Math.random() * 0.6 + 0.4, 0],
                y: - (Math.random() * 200 + 100) 
              }}
              transition={{
                duration: Math.random() * 12 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs border border-amber-500/30 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">SJS Foundations is committed to</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-wide mt-6 drop-shadow-md">
              Our Mission
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mt-4 mx-auto" />
          </div>

          <motion.div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-center mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Connecting line behind badges (desktop only) */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[15%] right-[15%] h-0.5 bg-amber-500/20 z-0"></div>

            {missions.map((mission, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 pt-16 shadow-lg border border-amber-500/20 hover:border-amber-400/60 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group z-10"
              >
                {/* Overlapping Badge */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#1A1610] border-4 border-[#0A0806] ring-1 ring-amber-500/40 text-amber-500 text-3xl flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {mission.title}
                </h3>
                <p className="text-[#D1C6B4] text-sm leading-relaxed font-medium">
                  {mission.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20 text-center max-w-3xl mx-auto bg-[#1A1610]/60 backdrop-blur-md p-8 rounded-3xl border border-amber-500/20 shadow-xl">
            <p className="text-lg md:text-xl text-amber-200 font-serif italic">
              "Every initiative is guided by compassion, transparency, and a deep sense of responsibility—values instilled by Late Mr. Salunkhe himself."
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONCLUDING SECTIONS */}
      <section className="w-full py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto space-y-20">
          
          <motion.div 
            className="flex flex-col md:flex-row items-stretch gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-amber-955 uppercase tracking-wide mb-6">Continuing the Journey of Giving</h3>
              <div className="w-16 h-1 bg-amber-500 rounded-full mb-6"></div>
              <p className="text-[#5A4F3D] leading-relaxed font-medium mb-4">
                Under the stewardship of Mr. Sunil Jaihind Salunkhe, SJS Foundations continues to evolve—reaching more communities, developing stronger programs, and carrying forward the noble vision of Late Mr. Salunkhe.
              </p>
              <p className="text-[#5A4F3D] leading-relaxed font-medium">
                Together, father and son have created not just a charitable trust, but a movement of kindness that inspires all who encounter it.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 bg-amber-50 rounded-[2rem] p-10 border border-amber-200/50 shadow-lg relative overflow-hidden flex flex-col justify-center">
               <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
               <h3 className="text-2xl font-black text-amber-955 uppercase tracking-wide mb-4">A Promise for Tomorrow</h3>
               <div className="w-16 h-1 bg-amber-400 rounded-full mb-6"></div>
               <p className="text-[#5A4F3D] leading-relaxed font-medium mb-4">
                 SJS Foundations remains firmly committed to its mission: to uplift, empower, and bring hope where it is needed most.
               </p>
               <p className="text-[#5A4F3D] leading-relaxed font-medium relative z-10">
                 As we carry this legacy forward, we invite supporters, partners, and well-wishers to join us in transforming lives—honoring the visionary founder, Late Mr. Salunkhe, and celebrating the leadership of Mr. Sunil Jaihind Salunkhe as he guides the trust into a brighter tomorrow.
               </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. FOOTER BANNER */}
      <section className="relative w-full py-24 px-6 flex items-center justify-center overflow-hidden border-t border-amber-900/30">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url("${footerBg}")` }}
        />
        <div className="absolute inset-0 bg-[#0A0806]/85 backdrop-blur-sm pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-transparent to-[#0A0806]/80 pointer-events-none"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="w-16 h-16 mx-auto rounded-full bg-[#1A1610] border border-amber-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.15)] mb-6">
              <FaHandHoldingHeart className="text-2xl text-amber-500" />
            </div>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 font-serif leading-relaxed px-4 md:px-12"
            variants={fadeInUp}
            style={{ textShadow: "0 4px 20px rgba(245,158,11,0.1)" }}
          >
            "SJS Foundations honours the legacy of Late Mr. Salunkhe by continuing to uplift communities through compassionate service and sustainable initiatives. Guided today by Mr. Sunil Jaihind Salunkhe, the trust remains committed to creating positive change and carrying its mission of hope forward."
          </motion.p>
          
          <motion.div variants={fadeInUp} className="pt-6 flex justify-center">
             <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
