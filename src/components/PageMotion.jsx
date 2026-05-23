import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
};

export default function PageMotion({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className={`max-w-4xl mx-auto py-20 px-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
