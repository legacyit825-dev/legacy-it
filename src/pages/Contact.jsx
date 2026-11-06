import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact_form from "../components/Contact_form";

const Contact = () => {
  return (
    <div className="w-full bg-[#070913] text-white min-h-screen overflow-hidden">
      <Header />
      <Contact_form />
      <Footer />
    </div>
  );
};

export default Contact;
