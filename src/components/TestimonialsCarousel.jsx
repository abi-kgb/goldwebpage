import React from "react";
import { motion } from "framer-motion";

// Import images for testimonials
import testimonialImg1 from "../assets/testimonial-1.jpg";
import testimonialImg2 from "../assets/testimonial-2.jpg";
import testimonialImg3 from "../assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    image: testimonialImg1,
    description:
      "“SJS Gold continues to exceed our expectations. Their purity standards are always accurate and reliable. The attention to detail reflects true craftsmanship. We proudly choose SJS Gold for every purchase.”",
  },
  {
    id: 2,
    image: testimonialImg2,
    description:
      "“SJS Gold blends tradition with advanced technology. Their craftsmanship reflects remarkable precision. Every product maintains exceptional consistency. This is why we trust SJS Gold without hesitation.”",
  },
  {
    id: 3,
    image: testimonialImg3,
    description:
      "“We trust SJS Gold for their unmatched purity levels. Their consistency gives us complete peace of mind. Every transaction is transparent and trustworthy. That’s why SJS Gold remains our preferred choice.”",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function TestimonialsCarousel() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-[#FAF3E0]/20 to-[#F4EAD4]/20 relative overflow-hidden border-t border-amber-200/40">
      {/* Soft elegant ambient background gold glows */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-amber-200/10 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-300/15 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#3A3225] uppercase">
            WHAT OUR <span className="text-amber-600">CUSTOMERS</span> SAY
          </h2>
          <motion.div 
            className="w-24 h-1 bg-amber-500 rounded-full mt-4 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* 3 Cards Side-by-Side */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(217, 119, 6, 0.2)",
                borderColor: "rgba(245, 158, 11, 0.5)"
              }}
              className="bg-[#FAF3E0]/70 backdrop-blur-sm border border-amber-200/40 rounded-3xl p-8 flex flex-col justify-between shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Quote & Description */}
              <div className="flex flex-col mb-8">
                {/* Gold Quote Icon with rotate hover animation */}
                <motion.span 
                  className="text-6xl text-amber-500/25 font-serif leading-none h-4 mb-4 select-none block origin-left"
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  “
                </motion.span>
                <p className="text-[#4A3F2C] text-base md:text-lg italic leading-relaxed font-serif transition-colors duration-300 group-hover:text-[#2c2419]">
                  {test.description}
                </p>
              </div>

              {/* Card Footer: Rating Stars and Circular Avatar */}
              <div className="flex items-center justify-between border-t border-amber-200/40 pt-6 mt-auto">
                <div className="flex flex-col gap-1">
                  {/* Stagger-like scale animation for stars on card hover */}
                  <div className="text-amber-500 text-sm tracking-wider font-semibold flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.3, y: -2 }}
                        className="inline-block cursor-default"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-xs text-[#6B5A43] font-bold tracking-wider uppercase">Verified Customer</span>
                </div>
                <motion.div 
                  className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/30 shadow-md flex-shrink-0"
                  whileHover={{ borderColor: "rgba(245, 158, 11, 0.8)", scale: 1.1 }}
                >
                  <img
                    src={test.image}
                    alt={`Customer testimonial ${test.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
