import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Wishlist = () => {
  const isWishlist = "isWishlist";
  return (
    <div>
      <Header headerChange={isWishlist}/>
      <h1>Resallie wishlist</h1>
      <Footer />
    </div>
  );
};

export default Wishlist;
