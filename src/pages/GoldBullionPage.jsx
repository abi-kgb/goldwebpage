import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GoldBullion from "../components/GoldBullion";

export default function GoldBullionPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <GoldBullion onBack={() => navigate(-1)} />
    </motion.div>
  );
}
