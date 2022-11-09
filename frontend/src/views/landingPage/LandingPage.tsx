import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./LandingPage.css";

const LandingPage = () => {
  const isLandingPage = "isLandingPage";
  return (
    <div className="page-container">
      <Header headerChange={isLandingPage}/>
      <h1>Resallie landingpagina</h1>
      <Footer />
    </div>
  );
};

export default LandingPage;
