import React, { useState } from "react";
import "./Header.css";
import wishlist_solid from "../../assets/header/Liked_Solid.png";
import wishlist_outline from "../../assets/header/Liked_Outline.png";
import login_solid from "../../assets/header/Login_Solid.png";
import login_outline from "../../assets/header/Login_Outline.png";
import beeldlogo from "../../assets/logo's/Beeldmerk_Resallie.png";
import chat_outline from "../../assets/header/Chat_Outline.png";
import chat_solid from "../../assets/header/Chat_Solid.png";
import { Link } from "react-router-dom";
import AddAdButton from "../addAdButton/AddAdButton";

interface DoesHeaderChange {
  headerChange: string;
}

const Header = ({ headerChange }: DoesHeaderChange ) => {
  // var isChatPage: boolean = false;
  // var isWishlist: boolean = false;
  // var isLandingPage: boolean = false;
  console.log(headerChange);

  const [isWishlist, setWishlist] = useState(false);
  const img_Wishlist = isWishlist ? wishlist_outline : wishlist_solid;
  const [isChatPage, setChatPage] = useState(false);
  const img_ChatPage = isChatPage ? chat_outline : chat_solid;
  const [isProfile, setProfile] = useState(false);
  const img_Profile = isProfile ? login_outline : login_solid;

  function wishlistTrue() {
    setWishlist(true);
  }
  function wishlistFalse() {
    setWishlist(false);
  }

  function chatTrue() {
    setChatPage(true);
  }
  function chatFalse() {
    setChatPage(false);
  }
  function profileTrue() {
    setProfile(true);
  }
  function profileFalse() {
    setProfile(false);
  }

  function setTrue() {
    setWishlist(true);
  }

  // if (headerChange === "isWishlist") 
  // {setWishlist(true);
  // }

  // if (headerChange === "isChatPage") 
  // {isChatPage = true
  // console.log(isChatPage);
  // }  else if (headerChange === "isWishlist") {
  //   isWishlist = true
  //   console.log(isWishlist);
  //     } else if (headerChange === "isLandigPage") {
  //   isLandingPage = true
  //   console.log(isLandingPage);
  // }

  return (
    <div className="header">
      <div className="header_left">
        <Link
          to={{
            pathname: `/overzichtspagina`,
          }}
          target="_self"
        >
          <img
            className="beeldlogo"
            alt="Resallie"
            src={beeldlogo}
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
      <div className="header_right">
        <AddAdButton />
        <Link
          to={{
            pathname: `/verlanglijstje`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt="Wishlist"
            src={img_Wishlist}
            onMouseOver={wishlistTrue}
            onMouseLeave={wishlistFalse}
            referrerPolicy="no-referrer"
          />
        </Link>        
        <Link
          to={{
            pathname: `/chats`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt="Chat"
            src={img_ChatPage}
            onMouseOver={chatTrue}
            onMouseLeave={chatFalse}
            referrerPolicy="no-referrer"
          />
        </Link> 

        <div className="navbar">
          <div className="dropdown">
            <div className="account">
              <img
                className="icon"
                alt="Login"
                src={img_Profile}
                onMouseOver={profileTrue}
                onMouseLeave={profileFalse}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="dropdown-content">
              <Link
                to={{
                  pathname: `/login`,
                }}
                target="_self"
              >
                Inloggen
              </Link>
              <Link
                to={{
                  pathname: `/mijnaccount`,
                }}
                target="_self"
              >
                Mijn account
              </Link>
              <Link
                to={{
                  pathname: `/eigenadvertenties`,
                }}
                target="_self"
              >
                Eigen advertenties
              </Link>
              <Link
                to={{
                  pathname: `/faq`,
                }}
                target="_self"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
