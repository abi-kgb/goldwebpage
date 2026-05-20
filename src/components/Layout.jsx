import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt
} from "react-icons/fa";

import sjsLogo from "../assets/logo.png";
import coin from "../assets/Gold Coin.jpeg";
import appleStoreImg from "../assets/Website Apple Store Image.jpg";
import playStoreImg from "../assets/Website Google Play IMage.jpg";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Track scroll position to trigger the logo transition
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Determine if we should show the sticky logo/compact navbar header
  // For the homepage, we trigger it based on scroll. For subpages, we always show it.
  const showStickyHeader = pathname !== "/" || isScrolled;

  const scrollToTopOrHome = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FAF3E0] via-[#F4EAD4] to-[#EBDCB9] text-[#3A3225] min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900 flex flex-col justify-between">
      
      {/* STICKY HEADER COMBINING TOP BAR & NAVBAR */}
      <motion.div 
        className="fixed top-0 z-50 w-full flex flex-col shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showStickyHeader ? 1 : 0, y: showStickyHeader ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ pointerEvents: showStickyHeader ? "auto" : "none" }}
      >
        {/* MAIN NAVBAR */}
        <nav className="bg-[#FAF3E0]/85 backdrop-blur-md border-t border-amber-200/40 p-3 flex items-center px-6 shadow-sm">
          {/* LOGO SLOT (Top Left) */}
          <div className="w-48 lg:w-64 h-12 flex-shrink-0 flex items-center justify-start">
            {showStickyHeader && (
              <motion.img
                layoutId="company-logo"
                src={sjsLogo}
                className="h-full w-auto object-contain cursor-pointer brightness-[0.85] contrast-[1.05]"
                onClick={scrollToTopOrHome}
              />
            )}
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex-1 flex flex-wrap justify-end items-center gap-8 text-md font-semibold text-[#4A3F2C]">
            <Link to="/" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Home</Link>
            <Link to="/about" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About Us</Link>
            <Link to="/team" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Our Team</Link>
            <Link to="/csr" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">CSR</Link>
            <Link to="/foundation" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">SJS Foundation</Link>
            <Link to="/join" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Join Our Team</Link>
            <Link to="/contact" className="relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Contact Us</Link>
            
            {/* HIGHLIGHTED LIVE RATE BUTTON */}
            <a href="#" className="bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-black px-5 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Live Rate
            </a>
          </div>
        </nav>

        {/* TOP CONTACT BAR */}
        <div className="bg-[#FAF3E0]/85 backdrop-blur-md px-6 py-2 flex justify-end items-center text-sm text-amber-800 font-semibold border-b border-amber-200/40">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2"><FaPhoneAlt className="text-amber-600" /><p>+91 99616 40004</p></div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-amber-600" /><p>admin@sjsgold.com</p></div>
            
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="hover:scale-105 transition-transform duration-300">
                <img src={playStoreImg} alt="Get it on Google Play" className="h-8 w-auto rounded object-contain" />
              </a>
              <a href="#" className="hover:scale-105 transition-transform duration-300">
                <img src={appleStoreImg} alt="Download on the App Store" className="h-8 w-auto rounded object-contain" />
              </a>
            </div>
            
            <FaLinkedin className="text-xl cursor-pointer hover:text-amber-950 transition-all" />
            <FaTwitter className="text-xl cursor-pointer hover:text-amber-950 transition-all" />
          </div>
        </div>
      </motion.div>

      {/* MAIN VIEW CONTENT */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER SECTION */}
      <footer className="w-full relative bg-[#1A1610] text-amber-50 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8 text-left">
            
            {/* Column 1: Bullion Sales */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Bullion Sales</h5>
              
              <div className="mb-6">
                <h6 className="text-sm font-bold text-white mb-3">Corporate Office</h6>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Gold Private Limited<br/>
                    X/6-9, Shalimar, Ambakadan Junction,<br/>
                    Pallikulam Road, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 487 2423 2031</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 487 2424 618</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">trade@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="text-sm font-bold text-white mb-3">Branch Office</h6>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    First Floor, B-107, Floral Deck Plaza,<br/>
                    MIDC Central Road, Opp. SEEPZ,<br/>
                    Andheri East, Mumbai 400 093, Maharashtra
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90210</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90211</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Refining Collection & Delivery */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Refining Collection &amp; Delivery</h5>
              
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Precious Metals LLP<br/>
                    35/642/5A, Shalimar, Ambakkadan Junction,<br/>
                    Pallikulam Road, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 999 5030 995</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    14/924-A, Parashakti Building,<br/>
                    Opposite Ganapati Temple,<br/>
                    Mullackal, Alappuzha 688 011, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">trade@sjsgold.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    First Floor, Unit No. 22, Shreenath Industrial Estate,<br/>
                    Andheri Sainath Premises Co. Op Society Ltd,<br/>
                    Mahakali Caves Road, Andheri East,<br/>
                    Mumbai 400 093, Maharashtra
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 86556 90212</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">mumbai@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Hallmarking */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Hallmarking</h5>
              
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-white font-semibold">BOMBAY ASSAY COMPANY</strong><br/>
                    No 750, First Floor, 33rd A Cross,<br/>
                    9th Main, Jayanagar 4th Block,<br/>
                    Bengaluru 560 011, Karnataka
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 96068 03916</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">admin@bombayassay.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Testing Collection & Delivery */}
            <div className="col-span-1">
              <h5 className="text-lg font-bold text-amber-500 mb-6 uppercase tracking-widest border-b border-amber-900/50 pb-3">Testing Collection &amp; Delivery</h5>
              
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">
                    SJS Precious Metals LLP<br/>
                    35/1318/12, ONE SHALIMAR,<br/>
                    Koppan Lane, Thrissur 680 001, Kerala
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-amber-500/80 hover:text-amber-500 transition-colors">+91 75588 34422</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-amber-500 flex-shrink-0" />
                    <p className="text-sm text-gray-400 hover:text-white transition-colors">sjspm@sjsgold.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">© 2026 SJS Gold. All rights reserved.</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Engineered with Precision &amp; Trust.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING COIN (Appears on bottom right when scrolled) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-8 right-8 z-40 w-16 h-16 cursor-pointer rounded-full overflow-visible shadow-[0_0_25px_rgba(217,119,6,0.4)] border border-amber-500 bg-[#FAF3E0] p-1"
            initial={{ scale: 0, opacity: 0, y: 50, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateY: 0 }}
            exit={{ scale: 0, opacity: 0, y: 50, rotateY: 180 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title="Scroll to Top"
            style={{ perspective: 1000 }}
          >
            <motion.img
              src={coin}
              className="w-full h-full object-contain rounded-full"
              animate={{ rotateY: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "linear"
              }}
              alt="Floating Coin"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
