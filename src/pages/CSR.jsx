import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLeaf, FaHeartbeat, FaHandHoldingHeart, FaHandshake, FaCheckCircle } from "react-icons/fa";

// Import CSR asset
import csrHeroBg from "../assets/csrnew.JPG";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function CSR() {
  const pillars = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Community Welfare & Social Support",
      desc: "SJS Group is actively involved in initiatives that uplift local communities and support vulnerable groups. We believe in building strong, resilient communities through compassion and collective action.",
      points: [
        "Providing assistance to underprivileged families",
        "Supporting community-based programs and welfare drives",
        "Extending help during emergencies and natural calamities",
        "Encouraging employees to participate in social service activities"
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: "Education & Skill Development",
      desc: "Education and skill enhancement form a core pillar of our CSR philosophy. By investing in education, we help create opportunities for a brighter, more empowered future.",
      points: [
        "Supporting education for underprivileged children",
        "Funding scholarships and academic programs",
        "Promoting skill development in refining, testing, and hallmarking",
        "Organizing vocational training and industry-related workshops for youth"
      ]
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Well-being Initiatives",
      desc: "Ensuring good health within the community is a priority. We remain committed to promoting healthier communities through continuous support and awareness.",
      points: [
        "Medical camps and free health check-ups",
        "Awareness programs on nutrition, hygiene, and preventive healthcare",
        "Assistance for medical emergencies and critical care needs"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Responsibility",
      desc: "Environmental care is integrated into our operational philosophy. We believe in conducting business with minimal environmental impact and maximum responsibility.",
      points: [
        "Implementing eco-friendly refining and testing methods",
        "Ensuring responsible waste management and pollution control",
        "Promoting recycling and energy-efficient technologies",
        "Encouraging employees to adopt environmentally conscious habits"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "Ethical Business Practices",
      desc: "As a group deeply rooted in legacy and trust, our commitment to integrity remains at the core of every business decision.",
      points: [
        "Fair and transparent business operations",
        "Responsible sourcing of precious metals",
        "Strict adherence to industry regulations and standards",
        "A safe, healthy, and ethical workplace environment"
      ]
    }
  ];

  return (
    <div className="relative pt-24 pb-32 bg-[#FAF6EE] text-[#3A3225] overflow-hidden min-h-screen">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${csrHeroBg})` }}
          initial={{ scale: 1.15, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium dark-gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/95 via-[#261E14]/85 to-[#FAF6EE]" />

        <div className="relative z-10 text-center px-6">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-955/60 mb-4 inline-block shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SJS Cares
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md">
            Corporate Social Responsibility
          </h1>
          <div className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-4"></div>
        </div>
      </section>

      {/* 2. CORPORATE CORE INTRO */}
      <section className="max-w-6xl mx-auto py-24 px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Our Promise</span>
            <h2 className="text-3xl lg:text-4xl font-black text-amber-955 uppercase tracking-wide leading-tight">
              Empowering Communities & Sustainable Growth
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mt-2"></div>
            <p className="text-base lg:text-lg text-[#5A4F3D] leading-relaxed font-serif text-justify pt-2">
              At SJS, Corporate Social Responsibility (CSR) is deeply rooted in our culture, values, and legacy. Guided by a commitment to ethical practices, community development, and sustainable growth, the Group believes that true success lies not only in business achievements but also in the positive impact we create for society.
            </p>
            <p className="text-base lg:text-lg text-[#5A4F3D] leading-relaxed font-serif text-justify">
              Our CSR initiatives reflect our dedication to empowering communities, protecting the environment, and supporting the well-being of those around us. Across all our business verticals—bullion trading, gold refining, testing, hallmarking, and allied services—we strive to operate responsibly and contribute meaningfully to the world beyond our organization.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 bg-gradient-to-b from-[#FAF6ED] to-[#EFE2C6] border-2 border-amber-300/40 rounded-3xl p-8 md:p-10 shadow-lg flex flex-col h-full hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-black text-amber-955 uppercase tracking-wider pb-4 border-b border-amber-300/30">Our Core Philosophy</h3>
              <p className="text-[#4A3F2C] text-base leading-relaxed font-semibold">
                At SJS, CSR is not a program—it is a promise. A promise to uplift communities, foster sustainability, and contribute to a better world as we continue to grow as a trusted leader in the gold and precious metals industry.
              </p>
            </div>
            
            <div className="flex-grow flex items-center justify-center border-t border-amber-300/30 pt-8 mt-8">
              <div className="text-2xl md:text-3xl font-black text-amber-900 leading-relaxed font-serif text-center uppercase tracking-wide drop-shadow-sm">
                "Growing responsibly,<br/>giving back consistently."
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CSR PILLARS GRID - Dynamic Animated Cards Layout */}
      <section className="w-full py-28 px-6 bg-[#1A1610] text-[#FAF6EE] relative overflow-hidden">
        {/* Abstract animated background elements & Gold Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full bg-amber-600/10 blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-0 w-[800px] h-[800px] rounded-full bg-amber-500/10 blur-[150px]"></div>
          
          {/* Floating Gold Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.9)]"
              style={{
                width: Math.random() * 5 + 2 + 'px',
                height: Math.random() * 5 + 2 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100 + 10}%`,
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, Math.random() * 0.6 + 0.4, 0],
                y: - (Math.random() * 300 + 150) 
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
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-amber-500 font-extrabold uppercase tracking-widest text-[11px] bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">Pillars of Impact</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-wide mt-6 drop-shadow-xl">
              Areas of Focus
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-6 mx-auto" />
          </motion.div>

          {/* Dynamic Grid Layout (2 cols top, 3 cols bottom) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pillars.map((pillar, idx) => {
              // Make the first two cards span 3 columns each (half width on large screens)
              // Make the last three cards span 2 columns each (one third width on large screens)
              const colSpanClass = idx < 2 ? "lg:col-span-3" : "lg:col-span-2";
              
              return (
                <motion.div
                  key={idx}
                  className={`relative group h-full ${colSpanClass}`}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: 10 },
                    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
                  }}
                  whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Glassmorphism Card */}
                  <div className="relative h-full bg-[#241E15]/80 backdrop-blur-xl border border-amber-500/20 group-hover:border-amber-400/50 rounded-[2rem] p-8 md:p-10 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden z-10 transition-colors duration-500">
                    
                    {/* Animated geometric overlay */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/20 group-hover:scale-150 transition-all duration-700"></div>

                    {/* Icon Header */}
                    <div className="flex items-center gap-6 mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1610] to-[#2B2317] border border-amber-500/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] group-hover:border-amber-400 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                        <div className="text-3xl text-amber-500 group-hover:text-amber-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                          {pillar.icon}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide flex-1 group-hover:text-amber-400 transition-colors duration-500">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#D1C6B4] text-sm md:text-base leading-relaxed font-serif mb-8 group-hover:text-[#FAF6EE] transition-colors duration-500 relative z-10">
                      {pillar.desc}
                    </p>

                    {/* Animated Points List */}
                    <ul className="space-y-4 mt-auto relative z-10">
                      {pillar.points.map((point, pIdx) => (
                        <li 
                          key={pIdx} 
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="mt-1">
                            <FaCheckCircle className="text-amber-600/70 text-xs md:text-sm group-hover/item:text-amber-400 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all duration-300" />
                          </div>
                          <span className="text-xs md:text-sm text-[#A89F91] font-semibold leading-snug group-hover/item:text-white transition-colors duration-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. POWERFUL CONCLUDING SECTION */}
      <section className="relative w-full py-32 px-6 bg-white flex items-center justify-center overflow-hidden border-t border-amber-200/50">
        {/* Soft light ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/60 via-white to-white pointer-events-none"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="w-20 h-20 mx-auto rounded-full bg-amber-50 border border-amber-300/60 flex items-center justify-center shadow-md mb-6">
              <FaLeaf className="text-3xl text-amber-600" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 uppercase tracking-widest leading-tight drop-shadow-sm"
            variants={fadeInUp}
          >
            A Promise Beyond Profit
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="py-2">
            <p className="text-xl md:text-3xl text-[#5A4F3D] font-serif italic leading-relaxed px-4 md:px-12">
              "True wealth is not measured by the gold we refine, but by the lives we touch and the legacy of trust we leave behind."
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="pt-6 flex justify-center">
             <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
