import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import logo from "../../assets/logo's/Logo_Resallie.png";
import "./OverviewPage.css";

const OverviewPage = () => {
  return (
    <div>
      <Header headerChange="isOverviewPage" />
      <img
        className="logo"
        alt="Resallie"
        src={logo}
        referrerPolicy="no-referrer"
      />
      <div className="overviewpage"></div>
      <Footer />
    </div>
  );
};

export default OverviewPage;
