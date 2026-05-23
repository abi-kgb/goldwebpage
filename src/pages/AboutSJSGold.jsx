import React from "react";
import { useNavigate } from "react-router-dom";
import PageMotion from "../components/PageMotion";

export default function AboutSJSGold() {
  const navigate = useNavigate();

  return (
    <PageMotion>
      <h1 className="text-3xl lg:text-4xl font-black mb-6">About SJS Gold Private Limited</h1>

      <p className="mb-4">SJS Gold Private Limited is a professionally managed company engaged in the trade of high-quality gold bullion, offering clients a reliable and transparent platform for buying and selling physical gold. Built on a foundation of trust, integrity, and customer-first values, the company aims to make gold investment simple, secure, and accessible.</p>

      <p className="mb-4">With a commitment to service excellence, SJS Gold Private Limited provides fair pricing, smooth transactions, and a dedicated team that ensures clarity at every stage.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">At SJS Gold Private Limited, we focus on:</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Quality Assurance — We deal in bullion that meets industry standards for purity and authenticity.</li>
        <li>Transparent Pricing — Real-time market-based pricing ensures fully transparent buying and selling.</li>
        <li>Secure and Professional Handling — We ensure safe handling, confidentiality, and efficient processing for all transactions.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">Why Choose SJS Gold Private Limited?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Reliability: Ethical, professional, and consistent service.</li>
        <li>Market Expertise: Experienced in bullion trading and market trends.</li>
        <li>Customer Focus: Personalized support for investors and jewelers.</li>
        <li>Efficiency: Faster processing aligned with market demands.</li>
        <li>Stock Availability: Large inventory ready for customer needs.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">Our Vision</h2>
      <p className="mb-4">To be recognized as the most trusted and preferred partner in gold bullion trading by delivering value, transparency, and unmatched customer experiences.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Get in Touch</h2>
      <p className="mb-4">Whether you're a jeweller or investor, we are committed to helping you trade gold with confidence and clarity.</p>

      <div className="mt-6 bg-white/50 p-6 rounded-lg border border-amber-200">
        <h3 className="font-bold mb-2">Get In Touch With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Kerala</h4>
            <p>X/6-9, Shalimar, Ambakadan Junction,<br/>Pallikulam Road, Thrissur 680001, Kerala</p>
            <p className="mt-2">+91 999 5030 995<br/>admin@sjsgold.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Mumbai</h4>
            <p>First Floor, B-107, Floral Deck Plaza,<br/>MIDC Central Road, Opp. SEEPZ,<br/>Andheri East, Mumbai 400093, Maharashtra</p>
            <p className="mt-2">+91 892 1156 668<br/>admin@sjsgold.com</p>
          </div>
        </div>
      </div>

      <button onClick={() => navigate(-1)} className="mt-8 inline-block px-5 py-2 rounded-full bg-amber-600 text-white font-bold">← Go Back</button>
    </PageMotion>
  );
}
