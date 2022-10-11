import React from "react";
import "./Header.css";
import wishlist from "../../assets/Liked_groen.png";
import login_solid from "../../assets/Login_solid.png";
import login_outline from "../../assets/Login_outline.png";
import chat from "../../assets/Chat_groen.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Link
          to={{
            pathname: `/overzichtspagina`,
          }}
          target="_self"
        >
          Beeldlogo
        </Link>
      </div>
      <div className="header_right">
        <Link
          to={{
            pathname: `/verlanglijstje`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt="Wishlist"
            src={wishlist}
            referrerPolicy="no-referrer"
          />
        </Link>
        <Link
          to={{
            pathname: `/chat`,
          }}
          target="_self"
        >
          <img
            className="icon"
            alt="Chat"
            src={chat}
            referrerPolicy="no-referrer"
          />
        </Link>
        {/* <div className="dropdown">
          <div className="account">
            <img
              className="icon"
              alt="Login"
              src={login_solid}
              referrerPolicy="no-referrer"
            />
            <img
              className="icon"
              alt="Login"
              src={login_outline}
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
        </div> */}

        <div class="navbar">
          <div class="dropdown">
            <div className="account">
              <img
                className="icon"
                alt="Login"
                src={login_solid}
                referrerPolicy="no-referrer"
              />
              <img
                className="icon"
                alt="Login"
                src={login_outline}
                referrerPolicy="no-referrer"
              />
            </div>
            <div class="dropdown-content">
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
