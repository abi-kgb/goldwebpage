import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="team" element={<ComingSoon title="Our Team" />} />
          <Route path="csr" element={<ComingSoon title="CSR" />} />
          <Route path="foundation" element={<ComingSoon title="SJS Foundation" />} />
          <Route path="join" element={<ComingSoon title="Join Our Team" />} />
          <Route path="contact" element={<ComingSoon title="Contact Us" />} />
        </Route>
      </Routes>
    </Router>
  );
}