import React from "react";
import { useNavigate } from "react-router-dom";
import PageMotion from "../components/PageMotion";
import refineryLogo from "../assets/2ref.jpg";

export default function SJSPrecious() {
  const navigate = useNavigate();

  return (
    <PageMotion className="">
      <div className="text-center mb-6">
        <img src={refineryLogo} alt="SJS Precious Metals LLP" className="w-full max-w-2xl mx-auto mb-6 rounded-lg object-cover shadow-md" />
        <h1 className="text-3xl lg:text-4xl font-black mb-4">SJS Precious Metals LLP – Gold Testing &amp; Refining Excellence</h1>
      </div>

      <p className="mb-4">With over 75 years of experience of Promoters, SJS Precious Metals LLP is formed as a specialized firm engaged in Gold Testing and Gold Refining, delivering reliable, accurate, and professional services to jewellers, traders, manufacturers, and investors. Built on principles of integrity, precision, and transparency, the company aims to support the precious metals industry with trustworthy analytical and “BIS Approved” refining solutions.</p>

      <p className="mb-4">With a focus on quality and customer confidence, SJS Precious Metals LLP uses established industry practices and modern equipment to ensure that clients receive dependable results and refined metal that meets required standards.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Our Core Services</h2>
      <h3 className="font-semibold mt-3">1. Gold Testing (Assaying Services)</h3>
      <p className="mb-3">Accurate gold testing is the foundation of fair and transparent trade. SJS Precious Metals LLP provides professional testing services designed to determine the purity and composition of gold with precision.</p>
      <p className="mb-3 font-semibold">Our testing solutions include:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Non-destructive testing methods</li>
        <li>Fire assay (if applicable)</li>
        <li>Purity verification for jewellery, scrap gold, and bullion</li>
        <li>Detailed purity and weight assessment reports</li>
      </ul>
      <p className="mb-4">These services help clients make informed decisions, maintain trust with customers, and ensure transparency in every transaction.</p>

      <h3 className="font-semibold mt-3">2. Gold Refining Services</h3>
      <p className="mb-3">SJS Precious Metals LLP offers efficient and standardized gold refining services designed to recover and refine precious metal from various sources, including:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Scrap gold</li>
        <li>Jewellery manufacturing residue</li>
        <li>Gold filings and dust</li>
        <li>Bullion-grade material</li>
      </ul>
      <p className="mb-4">Our refining process follows accepted industry procedures that focus on maximizing recovery while maintaining consistent quality. Clients receive refined gold of verified purity as per the agreed specifications.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Why Choose SJS Precious Metals LLP?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Precision &amp; Reliability: Each test and refining process is conducted with attention to detail, ensuring consistent and dependable results.</li>
        <li>Transparency in Every Step: We maintain clear communication, accurate documentation, and honest practices throughout the entire process.</li>
        <li>Industry Knowledge: Our team is trained and experienced in understanding the technical aspects of gold testing and refining.</li>
        <li>Customer-Focused Approach: We provide timely service, professional guidance, and solutions tailored to the needs of jewellers, traders, and wholesalers.</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-3">Our Commitment</h2>
      <p className="mb-4">SJS Precious Metals LLP is committed to supporting the gold ecosystem with services rooted in:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Ethical practices</li>
        <li>Quality standards</li>
        <li>Professional work culture</li>
        <li>Respect for client confidentiality</li>
      </ul>
      <p className="mb-4">Our goal is to be recognized as a dependable partner for businesses that require accurate gold purity assessment and efficient refining solutions.</p>

      <h2 className="text-xl font-bold mt-6 mb-3">Get in Touch</h2>
      <p className="mb-4">If you are seeking a trusted partner for gold testing or gold refining, SJS Precious Metals LLP is here to provide reliable, transparent, and value-driven services tailored to your requirements.</p>

      <p className="mb-4 font-semibold">SJS Precious Metals LLP is certified by BIS &amp; NAPL for REFINERY and TESTING</p>

      <div className="mt-6 bg-white/50 p-6 rounded-lg border border-amber-200">
        <h3 className="font-bold mb-2">Get In Touch With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Kerala</h4>
            <p>X/6-9, Shalimar, Ambakadan Junction,<br/>Pallikulam Road, Thrissur 680001, Kerala.</p>
            <p className="mt-2">+91 999 503 0995<br/>trade@sjsgold.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Mumbai</h4>
            <p>First Floor, Unit No. 22, Shreenath Industrial Estate, Andheri Sainath Premises Co. Op Society Ltd,<br/>Mahakali Caves Road, Andheri East, Mumbai 400 093, Maharashtra.</p>
            <p className="mt-2">+91 86556 90212<br/>mumbai@sjsgold.com</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button onClick={() => navigate(-1)} className="inline-block px-5 py-2 rounded-full bg-amber-600 text-white font-bold">← Go Back</button>
      </div>
    </PageMotion>
  );
}
