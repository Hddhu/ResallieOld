import React from "react";
import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import Header from "../../components/header/Header";

const Chat = () => {
  const isChatPage: string = "isChatPage";
  return (
    <div>
      <Header headerChange={isChatPage}/>
      <h1>Chatten met resellers</h1>
      <Footer />
    </div>
  );
};

export default Chat;
