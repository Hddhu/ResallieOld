import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MyAccount.css";

const Mijnaccount = () => {
  return (
    <div className="page-container">
      <Header headerChange="myaccount" />
      <h1>Resallie mijn account</h1>
      <Footer />
    </div>
  );
};

export default Mijnaccount;
