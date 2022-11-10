import React, { useState } from "react";
import "./Header.css";
import wishlist_solid from "../../assets/header/Liked_Solid.png";
import wishlist_outline from "../../assets/header/Liked_Outline.png";
import profile_solid from "../../assets/header/Profile_Solid.png";
import profile_outline from "../../assets/header/Profile_Outline.png";
import beeldlogo from "../../assets/logo's/Beeldmerk_Resallie.png";
import chat_outline from "../../assets/header/Chat_Outline.png";
import chat_solid from "../../assets/header/Chat_Solid.png";
import { Link } from "react-router-dom";
import AddAdButton from "../addAdButton/AddAdButton";

interface DoesHeaderChange {
  headerChange: string;
}

const Header = ({ headerChange }: DoesHeaderChange ) => {
  const chat: string = "chat";
  const wishlist: string = "wishlist";
  const profile: string = "profile";
  console.log(headerChange);

  const [hoverWishlist, setWishlist] = useState(false);
  const [hoverChat, setChat] = useState(false);
  const [hoverProfile, setProfile] = useState(false);

  // const [isWishlist, setWishlistPage] = useState(false);
  // const [isChatPage, setChatPage] = useState(false);

  const img_Profile = hoverProfile ? profile_outline : profile_solid;
  const img_Wishlist = hoverWishlist ? wishlist_outline : wishlist_solid;
  const img_ChatPage = hoverChat ? chat_outline : chat_solid;

  function setTrue(page: string) {
    if (page === wishlist) {
      setWishlist(true);
    } else if (page === chat) {
      setChat(true);
    } else if (page === profile) {
      setProfile(true);
    }
  }

  function setFalse(page: string) {
    if (page === wishlist) {
      setWishlist(false);
    } else if (page === chat) {
      setChat(false);
    } else if (page === profile) {
      setProfile(false);
    }
  }

  if (headerChange === "wishlist") {
    const change = document.getElementById('wishlist');
    if (change !== null) {
      change.style.setProperty("display", "none");
    }
  } else if (headerChange === "chat") {
    const change = document.getElementById('chat');
    if (change !== null) {
      change.style.setProperty("display", "none");
    }
  }

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
          id={wishlist}
          to={{
            pathname: `/verlanglijstje`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt={wishlist}
            src={img_Wishlist}
            onMouseOver={() => setTrue(wishlist)}
            onMouseLeave={() => setFalse(wishlist)}
            referrerPolicy="no-referrer"
          />
        </Link>        
        <Link
          id={chat}
          to={{
            pathname: `/chats`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt={chat}
            src={img_ChatPage}
            onMouseOver={() => setTrue(chat)}
            onMouseLeave={() => setFalse(chat)}
            referrerPolicy="no-referrer"
          />
        </Link> 

        <div className="navbar">
          <div className="dropdown">
            <div className="account">
              <img
                className="icon"
                alt={profile}
                src={img_Profile}
                onMouseOver={() => setTrue(profile)}
                onMouseLeave={() => setFalse(profile)}
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
