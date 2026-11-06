
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import GraphicDesigning from "./pages/GraphicDesigning";
import VideoEditing from "./pages/VideoEditing";
import DigitalMarketing from "./pages/DigitalMarketing";

import LegalPolicy from "./pages/LegalPolicy";
import LegalTerms from "./pages/LegalTerms";

const MyRoute = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

      {/* Individual Services */}
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
      <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
      <Route path="/services/video-editing" element={<VideoEditing />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

      {/* Legal Pages */}
      <Route path="/privacy-policy" element={<LegalPolicy />} />
      <Route path="/terms-and-conditions" element={<LegalTerms />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MyRoute;
