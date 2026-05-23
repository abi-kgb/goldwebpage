import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import CSR from "./pages/CSR";
import Foundation from "./pages/Foundation";
import JoinTeam from "./pages/JoinTeam";
import Contact from "./pages/Contact";
import GoldBullionPage from "./pages/GoldBullionPage";
import "./App.css";
import AboutSJSGold from "./pages/AboutSJSGold";
import SJSPrecious from "./pages/SJSPrecious";
import GoldTesting from "./pages/GoldTesting";
import Hallmarking from "./pages/Hallmarking";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="team" element={<Team />} />
          <Route path="csr" element={<CSR />} />
          <Route path="foundation" element={<Foundation />} />
          <Route path="join" element={<JoinTeam />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gold-bullion" element={<GoldBullionPage />} />
          <Route path="about-sjs-gold" element={<AboutSJSGold />} />
          <Route path="sjs-precious" element={<SJSPrecious />} />
          <Route path="gold-testing" element={<GoldTesting />} />
          <Route path="hallmarking" element={<Hallmarking />} />
        </Route>
      </Routes>
    </Router>
  );
}