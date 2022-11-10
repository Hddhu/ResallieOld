import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MakeAd from "../../components/makeAd/MakeAd";

const MakeAdpage = () => {
  return (
    <div>
      <Header headerChange="makeAd"/>
      <h1>Maak advertentie </h1>
      <div className="overviewpage">
        <MakeAd />
      </div>
      <Footer />
    </div>
  );
};

export default MakeAdpage;
