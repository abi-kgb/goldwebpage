import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, when: "beforeChildren" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
};

export default function PageMotion({ children, className = "" }) {
  return (
    <motion.div className="relative page-motion-root">
      <div className="page-background absolute inset-0 -z-10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={container}
        className={`max-w-4xl mx-auto py-20 px-6 ${className}`}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={item}>{child}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
