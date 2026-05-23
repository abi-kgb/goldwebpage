import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hallmarking() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl lg:text-4xl font-black mb-6">Hall Marking</h1>

      <p className="mb-4">"BOMBAY ASSAY COMPANY (BAC)", a sister concern of SJS Gold Private Limited, is a recognized assaying and hallmarking center from Bureau of Indian Standards (BIS) creating new milestones in the field of assaying and hallmarking of precious metal items in India. BAC aims to set a benchmark in the Indian jewellery quality control and inspection field. The process and facility of BAC matches and exceeds all the renowned global standards for precious metal assessment.</p>

      <p className="mb-4">Being chosen as an exclusive hallmarking center by TITAN COMPANY LIMITED, machineries used in the BAC facilities, the highly skilled resources to handle the process, strict adherence to standards, flexibility for the exigencies of the industry and the guidance & backing of top notch think tanks of the industry, keeps the BAC an edge above the others.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Core Values</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>We will be fair, honest, transparent and ethical in our conduct; everything we do must stand the test of public scrutiny.</li>
        <li>We will be passionate about achieving the highest standards of quality, always promoting meritocracy.</li>
        <li>We will be bold and agile, courageously taking on challenges, using deep customer insight to develop innovative solutions for jewellery QC.</li>
      </ul>

      <p className="mb-4">Read More about Bombay Assay Company: <a href="https://bombayassay.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">https://bombayassay.com/</a></p>

      <h3 className="mt-6">Address</h3>
      <p className="mb-2">"BOMBAY ASSAY COMPANY",<br/>No 750, First Floor, 33rd A Cross, 9th Main, Jayanagar 4th Block, Bengaluru - 560011 (Landmark: Café Coffee Day)</p>
      <p>Call :+91 96068 03916<br/>Email :admin@bombayassay.com</p>

      <button onClick={() => navigate(-1)} className="mt-8 inline-block px-5 py-2 rounded-full bg-amber-600 text-white font-bold">← Go Back</button>
    </motion.div>
  );
}
