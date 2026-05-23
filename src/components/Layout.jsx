import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

import sjsLogo from "../assets/logo.png";
import coin from "../assets/Gold Coin.jpeg";
import appleStoreImg from "../assets/Website Apple Store Image.jpg";
import playStoreImg from "../assets/Website Google Play IMage.jpg";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Helper to generate link classes with active state styling
  const navLinkClass = (path) => {
  const base = "relative py-1 hover:text-amber-700 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left";
  const active = "text-amber-900 after:scale-x-100";
  // Determine active if pathname starts with the target path (handles sub-routes) and ensure exact match for root
  const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
  return isActive ? `${base} ${active}` : base;
};

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
        <nav className="bg-[#FAF3E0]/85 backdrop-blur-md border-t border-amber-200/40 p-3 flex justify-between items-center px-4 md:px-6 shadow-sm">
          {/* LOGO SLOT (Top Left) */}
          <div className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-14 md:h-16 lg:h-20 xl:h-24 flex-shrink-0 flex items-center justify-start">
            {showStickyHeader && (
              <motion.img
                layoutId="company-logo"
                src={sjsLogo}
                className="h-full w-auto object-contain cursor-pointer brightness-[0.85] contrast-[1.05]"
                onClick={scrollToTopOrHome}
              />
            )}
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden xl:flex flex-1 justify-end items-center gap-6 xl:gap-8 text-md font-semibold text-[#4A3F2C]">
            <Link to="/" className={navLinkClass("/")}>Home</Link>
            <Link to="/about" className={navLinkClass("/about")}>About Us</Link>
            <Link to="/team" className={navLinkClass("/team")}>Our Team</Link>
            <Link to="/csr" className={navLinkClass("/csr")}>CSR</Link>
            <Link to="/foundation" className={navLinkClass("/foundation")}>SJS Foundation</Link>
            <Link to="/join" className={navLinkClass("/join")}>Join Our Team</Link>
            <Link to="/contact" className={navLinkClass("/contact")}>Contact Us</Link>
            
            {/* HIGHLIGHTED LIVE RATE BUTTON */}
            <a href="https://www.sjsgold.in/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-black px-5 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300 flex items-center gap-2 uppercase tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-100 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Live Rate
            </a>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            className="xl:hidden text-2xl text-[#4A3F2C] focus:outline-none ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-[#FAF3E0] border-b border-amber-200 shadow-lg overflow-hidden flex flex-col"
            >
              <div className="flex flex-col px-6 py-4 gap-4 text-lg font-semibold text-[#4A3F2C]">
                <Link to="/" className="hover:text-amber-700">Home</Link>
                <Link to="/about" className="hover:text-amber-700">About Us</Link>
                <Link to="/team" className="hover:text-amber-700">Our Team</Link>
                <Link to="/csr" className="hover:text-amber-700">CSR</Link>
                <Link to="/foundation" className="hover:text-amber-700">SJS Foundation</Link>
                <Link to="/join" className="hover:text-amber-700">Join Our Team</Link>
                <Link to="/contact" className="hover:text-amber-700">Contact Us</Link>
                
                <a href="https://www.sjsgold.in/" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-amber-950 font-black px-5 py-3 rounded-xl text-center uppercase tracking-wide mt-2 shadow-md">
                  Live Rate
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TOP CONTACT BAR (BELOW NAVBAR) */}
        <div className="bg-[#FAF3E0]/85 backdrop-blur-md px-4 py-2.5 flex justify-center md:justify-end items-center text-[11px] sm:text-xs md:text-sm text-amber-800 font-semibold border-b border-amber-200/40 w-full overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 sm:gap-6 w-max">
            <div className="flex items-center gap-1.5"><FaPhoneAlt className="text-amber-600" /><p>+91 99616 40004</p></div>
            <div className="flex items-center gap-1.5"><FaEnvelope className="text-amber-600" /><p>admin@sjsgold.com</p></div>
            
            <div className="flex items-center gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.sjsgoldprivatelimited" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                <img src={playStoreImg} alt="Get it on Google Play" className="h-6 md:h-8 w-auto rounded object-contain" />
              </a>
              <a href="https://apps.apple.com/us/app/sjs-gold/id6744094691" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
                <img src={appleStoreImg} alt="Download on the App Store" className="h-6 md:h-8 w-auto rounded object-contain" />
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/sjs-gold-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl cursor-pointer hover:text-amber-950 transition-all">
                <FaLinkedin />
              </a>
              <FaTwitter className="text-lg md:text-xl cursor-pointer hover:text-amber-950 transition-all" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN VIEW CONTENT */}
      <main className="flex-grow pt-24">
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
