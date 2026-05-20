import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaHandshake, FaGlobe, FaClock, FaCheckCircle } from "react-icons/fa";

import chairmanImg from "../assets/Chairman.jpg";
import sunilSirImg from "../assets/sunil sir pict.jpg";
import reenaMadamImg from "../assets/Reena madam.jpg";
import aboutHeroBg from "../assets/Our Legacy in Gold.jpg"; // A premium heritage gold image

export default function AboutUs() {
  return (
    <div className="relative pt-24 overflow-hidden">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${aboutHeroBg})`,
            backgroundAttachment: "scroll"
          }}
        />
        {/* Dark gold gradient overlay for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1610]/90 via-[#261E14]/80 to-[#1A1610]/95" />

        <div className="relative z-10 text-center px-6">
          <motion.span 
            className="text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 mb-4 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SJS Heritage &amp; Trust
          </motion.span>
          <motion.h1 
            className="text-4xl lg:text-6xl font-black text-white uppercase tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Story
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-amber-500 rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>
      </section>

      {/* 2. CHAIRMAN TRIBUTE SECTION */}
      <section className="w-full py-24 px-6 bg-gradient-to-b from-[#FAF3E0] to-[#F5EBD5] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Chairman Image Column (Left 5 cols) */}
            <motion.div 
              className="lg:col-span-5 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Picture Container with Gold Frame styling */}
              <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E6C687] p-2 bg-white group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <img 
                    src={chairmanImg} 
                    alt="Chairman Mr. Jaihind Mahadev Salunkhe" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette on the picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              
              <div className="mt-6 text-center lg:text-left">
                <h4 className="text-xl font-black text-amber-950">Mr. Jaihind Mahadev Salunkhe</h4>
                <p className="text-amber-800 text-sm font-bold tracking-wider uppercase mt-1">Founder Chairman (1959 - 2025)</p>
                <div className="w-16 h-1 bg-amber-500 rounded-full mt-3 mx-auto lg:mx-0" />
              </div>
            </motion.div>

            {/* Chairman Tribute Text Column (Right 7 cols) */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            >
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Legacy of Excellence</span>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-[#3A3225] mt-2 mb-6 uppercase leading-tight">
                A Tribute to a Visionary:<br/>
                <span className="text-amber-900">Chairman Mr. Jaihind Mahadev Salunkhe</span>
              </h2>

              <div className="space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif">
                <p>
                  Our Chairman, Mr. Jaihind Mahadev Salunkhe, an excellent entrepreneur and philanthropist, started his journey in 1969 in Kochi, Kerala with a jewellery shop in the name of SHALIMAR along with his own brother Mr. Prathap Rao.
                </p>
                <p>
                  From the company's inception in 1959 in the name of SHALIMAR, he instilled a culture of excellence. Under his and his brother's leadership, SHALIMAR Jewellery grew into excellence.
                </p>
                <p>
                  In the 1970s, he handed over the jewelry business to his brother and took the spearhead decision of shifting from Kochi to Thrissur, Kerala, a place that is a notable hub in India due to the presence of large gold-dealing corporates.
                </p>
                <p>
                  This decision fundamentally reshaped his entrepreneurship and gave birth to a new company, SJS Enterprises, which dealt with gold refinery and gold bullion.
                </p>
                <p>
                  More than his corporate achievements, Mr. Jaihind is renowned for the profound impact he had on individuals. He possessed a rare blend of stern professionalism, genuine warmth, and excellent customer relations and treated every employee and partner with equal respect.
                </p>
                <p>
                  Mr. Jaihind Mahadev Salunkhe, a mentor and a father figure to countless individuals, always ready to lend an ear and share his wisdom. He often said, <span className="font-bold italic text-amber-950">"The strength of the company is the strength of its employees,"</span> a belief he embodied by creating opportunities for generations of SHALIMAR Group employees.
                </p>
                <p>
                  Mr. Jaihind was an extraordinary visionary whose passion, integrity, and relentless drive were the bedrock of our company. On August 2025, he left us but his memory will forever inspire the path we follow.
                </p>
                <p className="border-l-4 border-amber-500 pl-4 italic bg-[#FAF3E0]/60 py-3 pr-2 rounded-r-xl">
                  The Board of Directors and the entire leadership team are committed to honouring Mr. Jaihind's legacy by upholding the core values he established: Integrity, Innovation, and Service. We will continue to pursue the ambitious vision he set forth, ensuring that SJS Gold Private Limited remains a testament to his life's work.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CURRENT LEADERSHIP TEAM */}
      <section className="w-full py-24 px-6 bg-[#FAF3E0]/30 border-t border-amber-200/40 relative">
        {/* Ambient Gold Glow circles */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Driving Growth &amp; Trust</span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-2">
              SJS Leadership Board
            </h2>
            <div className="w-24 h-1 bg-amber-500 rounded-full mt-4 mx-auto" />
          </div>

          <div className="space-y-28">
            
            {/* Leader 1 - Sunil Sir (Image Left, Bio Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Image Container */}
              <motion.div 
                className="lg:col-span-5 flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E6C687] p-2 bg-white group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                    <img 
                      src={sunilSirImg} 
                      alt="Mr. Sunil Jaihind Salunkhe" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-amber-950/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-3 text-center">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Bullion &amp; Refining Pioneer</p>
                      <p className="text-amber-300 text-xs mt-0.5">Est. SJS Gold in 2007</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center lg:text-left w-full max-w-[380px]">
                  <h3 className="text-2xl font-bold text-amber-955 uppercase tracking-wide">Mr. Sunil Jaihind Salunkhe</h3>
                  <p className="text-amber-800 text-xs font-bold tracking-wider uppercase mt-1">Managing Director – SJS Group of Companies and EMMA Trading House INDIA Private Limited</p>
                </div>
              </motion.div>

              {/* Bio Container */}
              <motion.div 
                className="lg:col-span-7 space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
              >
                <p>
                  Mr. Sunil Jaihind Salunkhe began his professional journey in the bullion and precious metals industry in 1998, after completing his post-graduation, by joining his father’s gold trading business. Backed by the strong legacy of his father, Mr. Jaihind Mahadev Salunkhe, he inherited decades of deep-rooted knowledge in gold bullion, refining, and purity testing—an enduring foundation that continues to guide his leadership and vision.
                </p>
                <p>
                  An astute and forward-thinking entrepreneur, Mr. Salunkhe gained extensive hands-on experience across gold bullion operations, refining processes, and advanced purity testing methodologies. This strong technical and operational grounding, combined with his entrepreneurial acumen, enabled him to envision and build a modern, integrated gold enterprise aligned with global standards.
                </p>
                <p>
                  Driven by this vision, he established SJS Gold Private Limited in 2007, a company dedicated to excellence in three core verticals: Gold Bullion, Gold Refinery and Gold Testing.
                </p>
                <p>
                  Under his leadership, the company quickly evolved into a trusted and respected name in the precious metals ecosystem, known for ethical business practices, technological advancement, and a strong customer-centric approach.
                </p>
                <p>
                  To sharpen strategic focus and enable sustainable growth, Mr. Sunil Salunkhe reorganized and diversified business operations into specialized entities. This structured approach allowed each vertical to operate independently with enhanced efficiency, governance, and scalability—significantly strengthening the Group’s overall performance.
                </p>
                <p>
                  As part of this strategic expansion, SJS Precious Metals LLP was established to manage refining and testing operations with uncompromising precision and quality control, while SJS Gold Private Limited continued to focus exclusively on bullion trading, building a strong foothold in the precious metals market.
                </p>
                <p>
                  Further extending his vision, Mr. Salunkhe ventured into the hallmarking sector with the establishment of Bombay Assay Company, a dedicated entity offering reliable, accurate, and certified hallmarking services. Bombay Assay Company is an authorized hallmarking centre for TITAN COMPANY LIMITED, operating pan India, underscoring the Group’s credibility and compliance with the highest industry standards.
                </p>
                <div className="bg-[#FAF3E0]/70 border border-amber-200/50 rounded-2xl p-6 font-sans text-sm mt-4">
                  <h4 className="text-base font-bold text-amber-955 uppercase mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-amber-600" />
                    By creating specialized entities, Mr. Salunkhe successfully achieved:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#5A4F3D] font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Focused specialization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Enhanced operational efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Strengthened compliance and governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Stronger brand positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Scalable and sustainable growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Reduced risk and increased stability</span>
                    </li>
                    <li className="col-span-1 md:col-span-2 flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>Continuous innovation and modernization</span>
                    </li>
                  </ul>
                </div>
                <p>
                  In addition to his entrepreneurial achievements, Mr. Sunil Salunkhe is an accomplished and articulate speaker. He has been invited to speak at various industry conferences, forums, and professional gatherings, where he has shared insights on the bullion and precious metals sector, ethical business practices, regulatory compliance, and the future of gold refining and hallmarking in India. His practical experience, strategic vision, and clear communication style make him a respected voice among industry peers and emerging professionals alike.
                </p>
                <p>
                  Today, Mr. Sunil Salunkhe stands as a visionary leader who has transformed a family legacy into a diversified and thriving business group. His ability to innovate, build specialized enterprises, and drive excellence across every vertical has positioned the SJS Group as a powerhouse in the precious metals industry. His journey reflects resilience, foresight, and an unwavering commitment to excellence.
                </p>
              </motion.div>
            </div>

            {/* Leader 2 - Reena Madam (Bio Left, Image Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16 border-t border-amber-200/40">
              {/* Bio Container (Left 7 cols) */}
              <motion.div 
                className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-[#4A3F2C] text-base lg:text-lg leading-relaxed font-serif"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <p>
                  Mrs. Reena Sunil Salunkhe is an inspiring entrepreneur known for her determination, innovative mindset, and commitment to empowering others. With a strong belief in hard work and continuous learning, she has built a reputation as a visionary leader who turns challenges into opportunities.
                </p>
                <p>
                  Mrs Reena began her entrepreneurial journey in SJS Gold Private Limited with a clear mission—to create meaningful solutions that improve the lives of people around her. As an entrepreneur, Mrs. Reena played a vital role in strengthening the foundation of their business by taking charge of costing and administration. Her keen eye for detail, understanding of market dynamics, and ability to optimize expenses significantly contributed to the company’s stability and growth.
                </p>
                <p>
                  By effectively managing the financial framework, she ensured smooth operations and stood as a strong support to her husband, helping steer the business toward long-term success. Her dedication, teamwork, and strategic financial oversight have been instrumental in shaping their entrepreneurial achievements.
                </p>
                <p>
                  Through her dedication, she successfully established her business and transformed the SJS brand into one known for quality, trust, and customer satisfaction. Her ability to understand market needs, adapt to change, and lead with integrity has earned her the respect of clients and peers alike. She is currently serving as a Director for SJS Group of Companies and EMMA Trading House India Private Limited.
                </p>
                <p>
                  In 2021, Mrs. Reena Sunil Salunkhe stepped into a leadership role at EMMA Trading House India Pvt. Ltd., taking responsibility for cost analysis, and has been part of strategic business expansion. With her strong analytical skills and disciplined approach, she streamlined operational costs and improved efficiency, which contributed directly to the company’s steady growth. Her clear vision and commitment to excellence helped the organization strengthen to move towards long-term sustainability.
                </p>
                <p>
                  Beyond her business achievements, Mrs. Salunkhe is also passionate about uplifting women and young entrepreneurs. She often participates in community initiatives, training programs, and motivational events where she shares her experiences to inspire others to pursue their dreams fearlessly.
                </p>
                <p>
                  Driven by purpose and powered by discipline, Mrs. Reena Sunil Salunkhe continues to set new benchmarks in her field. Her entrepreneurial journey is a testament to the power of perseverance, positivity, and a strong vision for the future.
                </p>
                <p className="border-l-4 border-amber-500 pl-4 italic bg-[#FAF3E0]/60 py-3 pr-2 rounded-r-xl">
                  Her leadership reflects a remarkable blend of compassion and professionalism, making her a highly respected figure in the business she leads.
                </p>
              </motion.div>

              {/* Image Container (Right 5 cols) */}
              <motion.div 
                className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", delay: 0.15 }}
              >
                <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E6C687] p-2 bg-white group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                    <img 
                      src={reenaMadamImg} 
                      alt="Mrs. Reena Sunil Salunkhe" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    {/* Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-amber-950/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-3 text-center">
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Financial &amp; Cost Administration Leader</p>
                      <p className="text-amber-300 text-xs mt-0.5">Empowering Leadership</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center lg:text-right w-full max-w-[380px]">
                  <h3 className="text-2xl font-bold text-amber-955 uppercase tracking-wide">Mrs. Reena Sunil Salunkhe</h3>
                  <p className="text-amber-800 text-xs font-bold tracking-wider uppercase mt-1">Director – SJS Group of Companies and EMMA Trading House INDIA Private Limited</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DETAILED HERITAGE TIMELINE */}
      <section className="w-full py-24 px-6 bg-gradient-to-b from-[#F5EBD5] to-[#FAF3E0] relative border-t border-amber-200/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Chronicle of Trust</span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-2">
              Timeline of Milestones
            </h2>
            <div className="w-24 h-1 bg-amber-500 rounded-full mt-4 mx-auto" />
          </div>

          <div className="relative border-l-2 border-amber-300 ml-4 md:ml-32 py-4">
            
            {/* Timeline Item 1 */}
            <div className="mb-16 relative">
              {/* Year Bubble */}
              <div className="absolute -left-[11px] md:-left-[143px] top-1.5 flex items-center justify-end w-6 md:w-32">
                <span className="hidden md:inline-block text-amber-900 font-black text-xl mr-4">1959 / 1969</span>
                <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md"></div>
              </div>
              
              <div className="ml-8 md:ml-12 bg-white/65 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-6 shadow-sm">
                <span className="inline-block md:hidden bg-amber-100 text-amber-900 font-black text-xs px-3 py-1 rounded-full mb-3 border border-amber-200">1959 / 1969</span>
                <h3 className="text-lg font-bold text-amber-950 uppercase mb-2">The Shalimar Inception</h3>
                <p className="text-sm text-[#4A3F2C] leading-relaxed">
                  Founded by Late Chairman Mr. Jaihind Mahadev Salunkhe alongside his brother Mr. Prathap Rao in Kochi, Kerala. The single shop, named SHALIMAR, laid the bedrock for SJS Group by instilling a culture of absolute purity and customer goodwill.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-16 relative">
              {/* Year Bubble */}
              <div className="absolute -left-[11px] md:-left-[143px] top-1.5 flex items-center justify-end w-6 md:w-32">
                <span className="hidden md:inline-block text-amber-900 font-black text-xl mr-4">1970s</span>
                <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md"></div>
              </div>
              
              <div className="ml-8 md:ml-12 bg-white/65 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-6 shadow-sm">
                <span className="inline-block md:hidden bg-amber-100 text-amber-900 font-black text-xs px-3 py-1 rounded-full mb-3 border border-amber-200">1970s</span>
                <h3 className="text-lg font-bold text-amber-950 uppercase mb-2">Pivot to Thrissur &amp; Bullion</h3>
                <p className="text-sm text-[#4A3F2C] leading-relaxed">
                  Mr. Jaihind made the strategic decision to shift from Kochi to Thrissur, Kerala. Recognizing Thrissur's rising role as a corporate gold hub, he founded SJS Enterprises, redirecting focus into wholesale gold refining and bullion trade.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-16 relative">
              {/* Year Bubble */}
              <div className="absolute -left-[11px] md:-left-[143px] top-1.5 flex items-center justify-end w-6 md:w-32">
                <span className="hidden md:inline-block text-amber-900 font-black text-xl mr-4">2007</span>
                <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md"></div>
              </div>
              
              <div className="ml-8 md:ml-12 bg-white/65 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-6 shadow-sm">
                <span className="inline-block md:hidden bg-amber-100 text-amber-900 font-black text-xs px-3 py-1 rounded-full mb-3 border border-amber-200">2007</span>
                <h3 className="text-lg font-bold text-amber-950 uppercase mb-2">Modern Bullion Expansion</h3>
                <p className="text-sm text-[#4A3F2C] leading-relaxed">
                  Leadership handed down to his son, Mr. Sunil Jaihind Salunkhe, who established SJS Gold Private Limited. He catalyzed major expansions in technology, scaling up refining services, and becoming a leading bullion supplier across South India.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative">
              {/* Year Bubble */}
              <div className="absolute -left-[11px] md:-left-[143px] top-1.5 flex items-center justify-end w-6 md:w-32">
                <span className="hidden md:inline-block text-amber-900 font-black text-xl mr-4">Present</span>
                <div className="w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-md"></div>
              </div>
              
              <div className="ml-8 md:ml-12 bg-white/65 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-6 shadow-sm">
                <span className="inline-block md:hidden bg-amber-100 text-amber-900 font-black text-xs px-3 py-1 rounded-full mb-3 border border-amber-200">Present</span>
                <h3 className="text-lg font-bold text-amber-950 uppercase mb-2">Refinery Restructuring &amp; Assay Assurances</h3>
                <p className="text-sm text-[#4A3F2C] leading-relaxed">
                  SJS restructured its operations, placing refining and high-standard quality testing under SJS Precious Metals LLP. The group also entered into a strategic investment partnership with the Bombay Assay Company (BAC), solidifying its BIS-certified testing supremacy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE VALUES SECTION */}
      <section className="w-full py-24 px-6 bg-gradient-to-b from-[#FAF3E0] to-[#F4EAD4] border-t border-amber-200/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Upholding Legacy</span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#3A3225] uppercase tracking-wide mt-2">
              Our Core Pillars
            </h2>
            <div className="w-24 h-1 bg-amber-500 rounded-full mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrity Card */}
            <motion.div 
              className="bg-[#FAF3E0]/70 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-2xl mb-6">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-amber-950 uppercase mb-3">Integrity</h3>
              <p className="text-sm text-[#5A4F3D] leading-relaxed">
                Upholding absolute purity, transparent business practices, and honesty in every bullion transaction and refinery operation. Trust is our ultimate currency.
              </p>
            </motion.div>

            {/* Innovation Card */}
            <motion.div 
              className="bg-[#FAF3E0]/70 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-2xl mb-6">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-amber-950 uppercase mb-3">Innovation</h3>
              <p className="text-sm text-[#5A4F3D] leading-relaxed">
                Utilizing advanced assaying technologies, highly optimized refining methods, and real-time live-rate digital solutions to serve our partners effectively.
              </p>
            </motion.div>

            {/* Service Card */}
            <motion.div 
              className="bg-[#FAF3E0]/70 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 text-center flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-2xl mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-amber-950 uppercase mb-3">Service</h3>
              <p className="text-sm text-[#5A4F3D] leading-relaxed">
                Treating every employee, dealer, and customer with equal dignity. Lending continuous guidance, support, and cultivating shared economic opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
