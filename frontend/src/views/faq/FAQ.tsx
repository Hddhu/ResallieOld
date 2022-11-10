import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="page-container">
      <Header headerChange="faq"/>
      <h1>Resallie FAQ</h1>
      <Footer />
    </div>
  );
};

export default FAQ;
