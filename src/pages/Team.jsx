import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaChevronRight, 
  FaTimes, 
  FaAward, 
  FaBuilding,
  FaHandHoldingUsd
} from "react-icons/fa";

// Import leadership and team assets
import chairmanImg from "../assets/Chairman.jpg";
import sunilSirImg from "../assets/sunil sir pict.jpg";
import reenaMadamImg from "../assets/Reena madam.jpg";
import anilCaImg from "../assets/anil_ca.png";
import vijayShindeImg from "../assets/vijay_shinde.png";
import sjsGroupImg from "../assets/background.jpg";
import sjsLogisticsImg from "../assets/SJSLA.jpg";
import sjsFinanceImg from "../assets/SJSIND.jpg";

// Import Team page assets
import teamHeroBg from "../assets/group.jpg";



export default function Team() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
    {
      id: "chairman",
      name: "Late Mr. Jaihind M. Salunkhe",
      role: "Founder Chairman (1959 - 2025)",
      category: "board",
      img: chairmanImg,
      badge: "Legacy Visionary",
      bio: "Our Founder Chairman, Mr. Jaihind Mahadev Salunkhe, was a pioneering entrepreneur and philanthropist who laid the cornerstone of SJS Group in 1969 with a single jewellery shop in Kochi, Kerala. His transition to Thrissur in the 1970s birthed SJS Enterprises, fundamentally shaping gold refining and bullion trade in the region. His uncompromising stance on purity and deep customer respect remains our guiding light.",
      highlights: ["Founded Shalimar Jewellers in 1969", "Pivoted to Thrissur and established SJS Enterprises", "Pioneered early Gold Refining in Kerala"]
    },
    {
      id: "sunil",
      name: "Mr. Sunil Jaihind Salunkhe",
      role: "Managing Director",
      category: "board",
      img: sunilSirImg,
      badge: "Managing Director",
      bio: "Mr. Sunil Jaihind Salunkhe began his journey in the bullion industry in 1998, inheriting decades of deep gold refining and trading wisdom from his father. In 2007, he transformed SJS Enterprises into SJS Gold Private Limited, expanding operations into modern bullion, high-output refining, and pan-India gold assaying. A visionary strategist and highly sought-after industry speaker, Sunil Sir drives the group's continuous modernization and geographical expansion.",
      highlights: ["Established SJS Gold Private Limited in 2007", "Founded SJS Precious Metals LLP & Bombay Assay Company", "Key speaker at national bullion and assaying forums"]
    },
    {
      id: "reena",
      name: "Mrs. Reena Sunil Salunkhe",
      role: "Director",
      category: "board",
      img: reenaMadamImg,
      badge: "Financial & Administrative Director",
      bio: "Mrs. Reena Sunil Salunkhe is an inspiring entrepreneur and a Director for SJS Group of Companies and EMMA Trading House India Private Limited. Reena Madam took command of SJS's critical administrative and financial operations, establishing a robust costing structure that stabilized the group's rapid expansion. Beyond administration, she is passionately committed to corporate governance and women's empowerment initiatives.",
      highlights: ["Director of SJS Group & EMMA Trading House", "Heads Cost & Administrative Administration", "Active advocate for young entrepreneurs"]
    },
    {
      id: "anil",
      name: "Mr. C A Anil",
      role: "General Manager – SJS Group of Companies",
      category: "operations",
      img: anilCaImg,
      badge: "General Manager",
      bio: "Mr. Anil is a highly accomplished professional with over 25 years of experience in the commercial and international business landscape. His career reflects steady growth, strategic depth, and strong leadership across multiple global markets.\n\nHe began his professional journey as a Commercial Manager, where he developed a strong foundation in commercial operations, financial processes, and stakeholder management. His exceptional performance and ability to optimize business functions led to his promotion as Commercial Director, where he took on broader responsibilities across commercial strategy, process improvement, and team leadership.\n\nDemonstrating sustained excellence, Mr. Anil progressed to the role of Group Commercial Director, overseeing commercial operations across multiple international markets.\n\nIn this senior global capacity, he successfully managed multi-country commercial frameworks, addressed diverse regulatory and market challenges, and ensured operational alignment across regions. His international exposure strengthened his expertise in leading multicultural teams and driving sustainable growth in varied business environments. In addition to his executive roles, Mr. Anil has served as a Board Member of a multinational organization, contributing to corporate governance, strategic oversight, risk management, and long-term business planning. This experience reflects his deep understanding of corporate structures and high-level decision-making. Mr. Anil brings extensive expertise in banking operations, people management, foreign exchange (Forex), import–export operations, financial costings, fund management, and a wide range of financial investments. He is also widely recognized for building and maintaining long-term relationships with customers and suppliers across India and global markets, earning a reputation as a trusted commercial leader within international business networks. Currently, he applies his comprehensive experience in his capacity as General Manager, contributing to the SJS Group’s strategic and operational objectives.",
      highlights: [
        "25+ years of commercial and global market leadership",
        "Former Group Commercial Director and MNC Board Member",
        "Expert in banking, Forex, imports, and fund management",
        "Trusted relationships with global commercial networks"
      ]
    },

    {
      id: "vijay",
      name: "Mr. Vijay Shinde",
      role: "Pioneer – Gold Bullion Trading Department",
      category: "operations",
      img: vijayShindeImg,
      badge: "Founding Pioneer",
      bio: "From the early stages of the department’s formation, Mr. Vijay Shinde was one of the key players who contributed to laying a strong and reliable foundation. His involvement during the initial phase was instrumental in establishing trading processes, market linkages, operational discipline and customer – supplier relations required for a successful bullion trading business. Mr. Vijay brought valuable insight into gold market dynamics, pricing mechanisms, and risk management practices. He actively supported relationship-building with banks, bullion suppliers, and industry participants, helping the department gain credibility and trust in a highly competitive and regulated market. His commitment, hands-on approach, and deep understanding of bullion trading operations played an important role in shaping the department’s early success. The strong groundwork laid during this phase enabled the Gold Bullion Trading Department to grow steadily and evolve into a dependable and well-structured business vertical within SJS Gold Private Limited. From the inception of the department, Mr. Shinde played a key role in establishing a strong and dependable foundation under the guidance of our Chairman, Mr. Jaihind Mahadev Salunkhe and his son Mr. Sunil Jaihind Salunkhe. His contributions during the formative years remain an integral part of the department’s journey and success story.",
      highlights: [
        "Key builder of the department's foundational processes",
        "Formulated critical bank, supplier, & market linkages",
        "Expert in pricing risk management & market dynamics",
        "Guided by Mr. Jaihind Salunkhe & Mr. Sunil Salunkhe"
      ]
    }
  ];

  const filteredTeam = activeTab === "all" 
    ? teamData 
    : teamData.filter(member => member.category === activeTab);

  const renderMemberCard = (member) => {
    return (
      <motion.div
        key={member.id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-b from-[#FAF6ED]/90 to-[#EFE2C6]/90 backdrop-blur-md border border-[#E9D5B5]/60 rounded-3xl p-4 shadow-md hover:shadow-2xl hover:border-amber-500/60 transition-all duration-500 cursor-pointer flex flex-col group relative overflow-hidden shimmer-sweep-container w-full sm:w-[280px]"
        onClick={() => setSelectedMember(member)}
      >
        {/* Image Wrap */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-amber-50 shadow-inner">
          {/* Pulsing glow border overlay on card hover */}
          <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-500 group-hover:border-amber-500/70 group-hover:animate-border-pulse pointer-events-none z-20" />

          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
        </div>

        {/* Info block */}
        <div className="mt-5 text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-black text-amber-955 uppercase tracking-wide group-hover:text-amber-900 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-amber-800 text-[11px] font-bold tracking-widest uppercase mt-1">
              {member.role}
            </p>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-amber-600 font-extrabold group-hover:gap-3 transition-all duration-300">
            <span>View Bio</span>
            <FaChevronRight className="text-[10px]" />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative pb-32 overflow-hidden bg-[#FAF6EE] text-[#3A3225] min-h-screen">
      {/* Soft elegant ambient background gold glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${teamHeroBg})` }}
          initial={{ scale: 1.15, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Premium dark-gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1610]/95 via-[#261E14]/85 to-[#FAF6EE]" />

        <div className="relative z-10 text-center px-6">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 mb-4 inline-block shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SJS Leadership & Team
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-md">
            Meet Our Team
          </h1>
          <div className="w-36 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mx-auto mt-4"></div>
        </div>
      </section>

      {/* Team Cards Grid — always show all, grouped by category */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mt-16">
        <div className="space-y-16">
          {/* Row 1: Board of Directors */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-[10px]">Governance</span>
              <h2 className="text-xl font-black uppercase tracking-wider text-amber-955 mt-1">Board of Directors</h2>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2 mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {teamData.filter(m => m.category === "board").map(renderMemberCard)}
            </div>
          </div>

          {/* Row 2: Leadership & Operations */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-[10px]">Operations</span>
              <h2 className="text-xl font-black uppercase tracking-wider text-amber-955 mt-1">Leadership &amp; Operations</h2>
              <div className="w-12 h-0.5 bg-amber-500 rounded-full mt-2 mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {teamData.filter(m => m.category === "operations").map(renderMemberCard)}
            </div>
          </div>
        </div>
      </section>

      {/* Core Departments Section */}
      <section className="mt-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#1A1610] to-[#2B2317] text-[#FAF6EE] rounded-[40px] border border-amber-500/25 p-8 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Animated Liquid Gold SVG Background Waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06] z-0">
            <svg className="absolute -bottom-10 left-0 w-[150%] h-[300px] liquid-gold-wave" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,96L120,112C240,128,480,160,720,160C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" fill="url(#liquid-gold-grad-1)"></path>
              <defs>
                <linearGradient id="liquid-gold-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-amber-500 font-extrabold uppercase tracking-widest text-[11px]">SJS Operations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide mt-2">
              Key Corporate Departments
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mt-4 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-10 relative z-10 mb-12">
            {/* Logistics Department */}
            <div className="bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-3xl overflow-hidden flex flex-col hover:border-amber-400/50 transition-all duration-500 group shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={sjsLogisticsImg} 
                  alt="SJS Logistics &amp; Assaying" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610] via-[#1A1610]/40 to-transparent" />
                <span className="absolute bottom-4 left-6 text-amber-500 font-extrabold uppercase tracking-widest text-[11px] flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/20">
                  <FaBuilding className="text-[10px]" />
                  Logistics &amp; Supply Chain
                </span>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                    Logistics Department
                  </h3>
                  <p className="text-amber-100/80 text-sm md:text-base leading-relaxed font-serif text-justify font-semibold">
                    The Logistics Department of SJS Group is a core operational pillar that ensures the secure, compliant, and seamless movement of gold bullion across every stage of the supply chain. In an industry where precision, security, and trust are paramount, the department manages all logistics related to bullion transport, refinery processing, assaying, and storage with the highest standards of professionalism and accuracy.
                    <p className="text-amber-100/80 text-sm md:text-base leading-relaxed font-serif text-justify font-semibold">Additional operational insights, milestones, and achievements can be showcased here to enrich the page content.</p>
                  </p>
                </div>
              </div>
            </div>

            {/* Finance Department */}
            <div className="bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-3xl overflow-hidden flex flex-col hover:border-amber-400/50 transition-all duration-500 group shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={sjsFinanceImg} 
                  alt="SJS Industrial &amp; Finance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610] via-[#1A1610]/40 to-transparent" />
                <span className="absolute bottom-4 left-6 text-amber-500 font-extrabold uppercase tracking-widest text-[11px] flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/20">
                  <FaHandHoldingUsd className="text-[10px]" />
                  Treasury &amp; Compliance
                </span>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide">
                    Finance Department
                  </h3>
                  <p className="text-amber-100/80 text-sm md:text-base leading-relaxed font-serif text-justify font-semibold">
                    The Finance Department is one of the most critical functions in a gold bullion trading company because the business deals with high-value transactions, volatile markets, and strict regulatory requirements. Finance ensures that all money and metal movements are accurate, secure, and fully compliant, making it central to the company’s credibility and operational integrity. We earn the trust through credibility, transparency, and robust security.
                    <p className="text-amber-100/80 text-sm md:text-base leading-relaxed font-serif text-justify font-semibold">Further details about financial stewardship, risk management practices, and compliance achievements can be added here to fill the page.</p>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Banner Image removed as per request */}
          {/* Banner image intentionally omitted */}
          
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="w-full py-24 px-6 bg-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-50/50 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber-600 font-extrabold uppercase tracking-widest text-[11px]">Words of Wisdom</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-amber-955 uppercase tracking-wide mt-2">
              Guiding Principles
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full mt-4 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quote 1 - Left Border */}
            <motion.div
              className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] rounded-3xl p-8 md:p-10 border-l-4 border-l-amber-500 border-y border-r border-amber-100/60 shadow-[0_8px_30px_rgba(217,119,6,0.06)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-500 relative group"
              initial={{ opacity: 0, scale: 0.9, rotateX: -15, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0 }}
            >
              <div className="absolute top-6 left-8 text-amber-200/40 text-7xl font-serif leading-none pointer-events-none group-hover:text-amber-300/50 transition-colors duration-500">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-[#3A3225] text-base md:text-lg leading-relaxed font-serif italic">
                  The strength of the company is the strength of its employees. When we grow together, we build something that lasts beyond generations.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-px bg-amber-400"></div>
                  <p className="text-amber-800 text-xs font-black uppercase tracking-widest">Late Mr. Jaihind M. Salunkhe</p>
                </div>
                <p className="text-amber-600/70 text-[10px] font-bold uppercase tracking-wider mt-1 ml-[52px]">Founder Chairman</p>
              </div>
            </motion.div>

            {/* Quote 2 - Top Border */}
            <motion.div
              className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] rounded-3xl p-8 md:p-10 border-t-4 border-t-amber-500 border-x border-b border-amber-100/60 shadow-[0_8px_30px_rgba(217,119,6,0.06)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-500 relative group"
              initial={{ opacity: 0, scale: 0.9, rotateX: 15, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.15 }}
            >
              <div className="absolute top-6 left-8 text-amber-200/40 text-7xl font-serif leading-none pointer-events-none group-hover:text-amber-300/50 transition-colors duration-500">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-[#3A3225] text-base md:text-lg leading-relaxed font-serif italic">
                  Trust is our ultimate currency. Every gram of gold we handle carries the weight of our reputation, and we treat it with unwavering integrity.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-px bg-amber-400"></div>
                  <p className="text-amber-800 text-xs font-black uppercase tracking-widest">Mr. Sunil J. Salunkhe</p>
                </div>
                <p className="text-amber-600/70 text-[10px] font-bold uppercase tracking-wider mt-1 ml-[52px]">Managing Director</p>
              </div>
            </motion.div>

            {/* Quote 3 - Bottom Border */}
            <motion.div
              className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] rounded-3xl p-8 md:p-10 border-b-4 border-b-amber-500 border-x border-t border-amber-100/60 shadow-[0_8px_30px_rgba(217,119,6,0.06)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-500 relative group"
              initial={{ opacity: 0, scale: 0.9, rotateX: -15, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
            >
              <div className="absolute top-6 left-8 text-amber-200/40 text-7xl font-serif leading-none pointer-events-none group-hover:text-amber-300/50 transition-colors duration-500">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-[#3A3225] text-base md:text-lg leading-relaxed font-serif italic">
                  Excellence is not a destination but a continuous journey. Every process we refine and every standard we raise brings us closer to perfection.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-px bg-amber-400"></div>
                  <p className="text-amber-800 text-xs font-black uppercase tracking-widest">SJS Group Philosophy</p>
                </div>
                <p className="text-amber-600/70 text-[10px] font-bold uppercase tracking-wider mt-1 ml-[52px]">Core Belief</p>
              </div>
            </motion.div>

            {/* Quote 4 - Right Border */}
            <motion.div
              className="bg-gradient-to-br from-[#FFFDF8] to-[#FFF9EE] rounded-3xl p-8 md:p-10 border-r-4 border-r-amber-500 border-y border-l border-amber-100/60 shadow-[0_8px_30px_rgba(217,119,6,0.06)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.12)] hover:-translate-y-2 transition-all duration-500 relative group"
              initial={{ opacity: 0, scale: 0.9, rotateX: 15, y: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.25 }}
            >
              <div className="absolute top-6 left-8 text-amber-200/40 text-7xl font-serif leading-none pointer-events-none group-hover:text-amber-300/50 transition-colors duration-500">"</div>
              <div className="relative z-10 pt-8">
                <p className="text-[#3A3225] text-base md:text-lg leading-relaxed font-serif italic">
                  Precision in every assay, transparency in every transaction, and dedication in every partnership — these are the pillars upon which our legacy stands.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-px bg-amber-400"></div>
                  <p className="text-amber-800 text-xs font-black uppercase tracking-widest">Mrs. Reena S. Salunkhe</p>
                </div>
                <p className="text-amber-600/70 text-[10px] font-bold uppercase tracking-wider mt-1 ml-[52px]">Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Centered Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1610]/70 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="bg-[#FAF6EE] gold-mesh-bg border-2 border-amber-300/40 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 z-20 bg-amber-955 hover:bg-amber-900 border border-amber-500/20 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaTimes />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 h-full max-h-[90vh] overflow-y-auto">
                {/* Left Image Pane (5 cols) — sticky */}
                <div className="md:col-span-5 relative min-h-[300px] h-full bg-amber-50 border-r border-amber-200/30 overflow-hidden md:sticky md:top-0 md:self-start md:max-h-[90vh]">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full h-auto object-contain max-h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Badge overlay on image */}
                  <span className="absolute bottom-6 left-6 bg-amber-955/90 backdrop-blur-md text-amber-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-amber-500/30">
                    {selectedMember.badge}
                  </span>
                </div>

                {/* Right Info Pane (7 cols) — scrollable */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col h-full overflow-y-auto">
                  <div className="space-y-6">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <span className="text-amber-600 font-bold uppercase tracking-widest text-xs flex items-center gap-1.5">
                        <FaBuilding className="text-[10px]" />
                        SJS Group
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-amber-955 uppercase tracking-wide mt-1">
                        {selectedMember.name}
                      </h2>
                      <p className="text-amber-800 text-xs font-black tracking-widest uppercase mt-1 border-b border-amber-200/50 pb-4">
                        {selectedMember.role}
                      </p>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="text-[#4A3F2C] leading-relaxed text-sm font-serif text-justify whitespace-pre-line"
                    >
                      {selectedMember.bio}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="space-y-3 pt-2"
                    >
                      <h4 className="text-xs font-black text-amber-955 uppercase tracking-widest flex items-center gap-2">
                        <FaAward className="text-amber-600" />
                        Key Credentials &amp; Accomplishments
                      </h4>
                      <ul className="space-y-2">
                        {selectedMember.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5A4F3D] font-bold">
                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0 shadow-[0_0_6px_#f59e0b]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Footer Social Connect */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="mt-8 border-t border-amber-200/40 pt-6 flex items-center justify-between"
                  >
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Connect with our Office</span>
                    <div className="flex gap-3">
                      <a href="mailto:info@sjsgold.com" className="w-10 h-10 rounded-full bg-white border border-amber-200/50 text-amber-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 hover:scale-105 shadow-sm">
                        <FaEnvelope className="text-sm" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-amber-200/50 text-amber-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 hover:scale-105 shadow-sm">
                        <FaLinkedin className="text-sm" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
