import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComingSoon({ title }) {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center relative overflow-hidden py-32 px-6">
      {/* Soft elegant ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-amber-300/20 blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.span 
          className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-200/40 mb-6 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SJS Group
        </motion.span>
        
        <motion.h1 
          className="text-4xl lg:text-6xl font-black text-[#3A3225] uppercase tracking-wide mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.div 
          className="w-24 h-1 bg-amber-500 rounded-full mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        <motion.p 
          className="text-lg text-[#5A4F3D] leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          We are currently crafting this page to bring you a premium experience detailing SJS's operations, initiatives, and corporate features. Stay tuned for updates!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link 
            to="/"
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-black px-8 py-3 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-300 inline-block uppercase tracking-wider text-sm"
          >
            Back To Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
