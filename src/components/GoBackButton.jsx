import React from "react";
import { motion } from "framer-motion";

export default function GoBackButton({ onClick, label = "← Go Back" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex justify-center mt-12 mb-8"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="go-back-cta inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-600 text-white font-bold shadow-2xl hover:bg-amber-500 transition-all duration-200"
      >
        <span className="text-lg">{label}</span>
      </motion.button>
    </motion.div>
  );
}
