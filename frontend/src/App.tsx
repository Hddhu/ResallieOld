import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import OverviewPage from "./views/overviewPage/OverviewPage";
import Login from "./views/login/Login";
import Chat from "./views/chat/Chat";
import Wishlist from "./views/wishlist/Wishlist";
import MijnAccount from "./views/myAccount/MyAccount";
import OwnAds from "./views/ownAds/OwnAds";
import FAQ from "./views/faq/FAQ";
import MakeAdpage from "./views/makeAdPage/MakeAdPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/overzichtspagina" element={<OverviewPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/verlanglijstje" element={<Wishlist />} />
          <Route path="/mijnaccount" element={<MijnAccount />} />
          <Route path="/eigenadvertenties" element={<OwnAds />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/maakadvertentie" element={<MakeAdpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
