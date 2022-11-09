import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import instalogo from "../../assets/socials/Insta_wit.png";
import email from "../../assets/socials/Mail_wit.png";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">©{new Date().getFullYear()} Resallie</p>
      <div className="links">
        <p>
          <Link
            to={{
              pathname: `/`,
            }}
            target="_self"
            className="link"
          >
            Landingpagina
          </Link>
          -
          <Link
            to={{
              pathname: `/overzichtspagina`,
            }}
            target="_self"
            className="link"
          >
            Overzichtspagina
          </Link>
          -
          <Link
            to={{
              pathname: `/verlanglijstje`,
            }}
            target="_self"
            className="link"
          >
            Wishlist
          </Link>
          -
          <Link
            to={{
              pathname: `/chats`,
            }}
            target="_self"
            className="link"
          >
            Chatpagina
          </Link>
          -
          <Link
            to={{
              pathname: `/mijnaccount`,
            }}
            target="_self"
            className="link"
          >
            Mijn account
          </Link>
          -
          <Link
            to={{
              pathname: `/eigenadvertenties`,
            }}
            target="_self"
            className="link"
          >
            Eigen advertenties
          </Link>
          -
          <Link
            to={{
              pathname: `/faq`,
            }}
            target="_self"
            className="link"
          >
            FAQ
          </Link>
        </p>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/resallie/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" alt="Instagram" src={instalogo} />
        </a>
        <a
          href="mailto:resallie2022@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" alt="Email" src={email} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
