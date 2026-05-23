import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function GoldTesting() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl lg:text-4xl font-black mb-6">NABL Accredited Gold Testing Laboratory</h1>

      <p className="mb-4">At our NABL Accredited Gold Testing Laboratory, we ensure accuracy, transparency, and trust across every transaction. Equipped with advanced testing technology and operated by experienced professionals, the department is committed to delivering precise purity analysis for gold in all forms.</p>

      <p className="mb-4">We test a wide range of materials, including scrap gold, bullion, dore bars, jewelry, and industrial gold. Each sample is handled under strict security and quality-control procedures to maintain integrity throughout the testing process.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Advanced Testing Methods</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>XRF (X-Ray Fluorescence) Analysis:</strong> A fast, non-destructive method that identifies metal composition and provides accurate purity readings.</li>
        <li><strong>Fire Assay (Cupellation):</strong> Recognized as the most precise gold testing technique, used when maximum accuracy is required.</li>
        <li><strong>Density & Physical Testing:</strong> Supporting tests to validate results and detect inconsistencies.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">Accuracy & Transparency</h2>
      <p className="mb-4">At SJS Precious Metals LLP, every test is conducted with complete transparency. Sampling, analysis, and reporting are performed using controlled procedures to ensure fairness and confidence for our clients. Detailed reports are provided, clearly outlining purity levels and assay results.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Why Choose Our Gold Testing Department</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>High-precision testing standards</li>
        <li>Qualified and experienced assayers</li>
        <li>Secure handling of materials</li>
        <li>Reliable and timely reporting</li>
        <li>Compliance with industry best practices</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">Testing Process Flow</h2>
      <ol className="list-decimal pl-6 mb-4">
        <li>Customer brings the sample for testing to SJS Precious Metals LLP.</li>
        <li>Customer Service weighs the gold in the presence of the customer and records it in the ERP system.</li>
        <li>Package is transferred to NABL Accredited Testing Department for testing.</li>
        <li>Testing completed in 3 hours maximum and results entered in the ERP system.</li>
        <li>Customer collects the sample and receives the Test Report; report is also sent to registered mobile number.</li>
      </ol>

      <h2 className="text-xl font-bold mt-6 mb-3">Addresses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Kerala</h4>
          <p className="mb-2">SJS Precious Metals LLP,<br/>35/1318/12, ONE SHALIMAR, Koppan Lane,<br/>Thrissur 680 001, Kerala</p>
          <p>Phone: +91 75588 34422<br/>Email: sjspm@sjsgold.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Mumbai</h4>
          <p className="mb-2">First Floor, B-107, Floral Deck Plaza,<br/>MIDC Central Road, Opp. SEEPZ,<br/>Andheri East, Mumbai 400 093, Maharashtra</p>
          <p>Phone: +91 89211 56668<br/>Email: mumbai@sjsgold.com</p>
        </div>
      </div>

      <button onClick={() => navigate(-1)} className="mt-8 inline-block px-5 py-2 rounded-full bg-amber-600 text-white font-bold">← Go Back</button>
    </motion.div>
  );
}
