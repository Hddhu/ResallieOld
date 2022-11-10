import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./OwnAds.css";

const OwnAds = () => {
  return (
    <div className="page-container">
      <Header headerChange="ownads"/>
      <h1>Resallie eigen advertenties</h1>
      <Footer />
    </div>
  );
};

export default OwnAds;
