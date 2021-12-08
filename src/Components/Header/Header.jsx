/* ------------------------------- components ------------------------------- */
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

/* ---------------------------------- icons --------------------------------- */
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useGlobalContext } from "../../Context/context";

/* ---------------------------------- style --------------------------------- */
import logo from "../../Assets/Images/logo.png";
import "./Header.scss";

function Header() {
  const { setShowSidebarMenu, setShowBackdrop } = useGlobalContext();

  const openSidebarMenu = () => {
    setShowSidebarMenu(true);
    setShowBackdrop(true);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__block--right">
          <figure className="header__logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="header-logo" className="logo-link__image" />
              <figcaption className="logo-link__text">دندانپزشکی</figcaption>
            </Link>
          </figure>
        </div>

        <div className="header__block--left">
          
          <Navigation />

          <section className="header__widgets">
            <a
              href="tel:(021-78543901)"
              className="button button--secondary header-widget"
            >
              021-78543901
              <FaPhoneAlt className="header-icon" />
            </a>
            <Link
              to="/booking"
              className="button button--primary header-widget"
            >
              رزور ویزیت
            </Link>
            <span className="sidebar-menu__button" onClick={openSidebarMenu}>
              <HiMenu className="menu-icon" />
            </span>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Header;
