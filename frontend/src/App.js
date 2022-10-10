import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import OverviewPage from "./views/overviewPage/OverviewPage";
import Login from "./views/login/Login";
import Chat from "./views/chat/Chat";
import Wishlist from "./views/wishlist/Wishlist";
import MijnAccount from "./views/mijnAccount/MijnAccount";
import EigenAdvertenties from "./views/eigenAdvertenties/EigenAdvertenties";
import FAQ from "./views/faq/FAQ";

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
          <Route path="/eigenadvertenties" element={<EigenAdvertenties />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
