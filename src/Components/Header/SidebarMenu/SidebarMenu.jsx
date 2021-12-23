/* ------------------------------- components ------------------------------- */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../../../Context/context";
import useWindowDimensions from "./../../../hooks/useWindowDimensions";
import OnClickOutside from "react-onclickoutside";
import { v4 as uuidv4 } from "uuid";
import SidebarDropdownLink from "../DropDownMenu/SidebarDrowdownLink";
/* --------------------------------- styles --------------------------------- */
import logo from "../../../Assets/Images/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import "./SidebarMenu.scss";

/* ---------------------------------- data ---------------------------------- */
import { links } from "../../../Assets/Data/links";

function SidebarMenu() {
  const { showSidebarMenu, setShowSidebarMenu, setShowBackdrop } =
    useGlobalContext();

  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeSidebarMenu = () => {
    setShowSidebarMenu(false);
    setShowBackdrop(false);
    setActiveDropdown(null);
  };

  const toggleDropDown = (e, subMenuId) => {
    e.preventDefault();
    const dropdownStatus = subMenuId === activeDropdown ? null : subMenuId;
    setActiveDropdown(dropdownStatus);
  };

  // close sidebar menu on large screen's
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width > 992 && showSidebarMenu) {
      closeSidebarMenu();
    }
  }, [width]);

  // close sidebar menu on click outside
  SidebarMenu.handleClickOutside = () => {
    closeSidebarMenu();
  };

  return (
    <aside
      className={`sidebar-menu ${
        showSidebarMenu ? "sidebar-menu--active" : ""
      }`}
    >
      <section className="sidebar-menu__heading">
        <figure className="sidebar-menu__logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="header-logo" className="logo-link__image" />
            <figcaption className="logo-link__text">دندانپزشکی</figcaption>
          </Link>
        </figure>
        <span className="sidebar-menu__close-button" onClick={closeSidebarMenu}>
          <IoMdClose className="close-icon" />
        </span>
      </section>

      <section className="sidebar-menu__links-container">
        {links.map((link) => {
          const { id, text, url, subMenus, subMenuId } = link;
          return subMenus ? (
            <SidebarDropdownLink
              key={id}
              link={link}
              activeDropdown={activeDropdown}
              toggleDropDown={toggleDropDown}
              closeSidebarMenu={closeSidebarMenu}
            />
          ) : (
            <div className="sidebar-link-container" key={uuidv4()}>
              <NavLink
                className="sidebar-link"
                activeClassName="sidebar-link--active"
                exact
                to={url}
                onClick={closeSidebarMenu}
              >
                {text}
              </NavLink>
            </div>
          );
        })}
      </section>

      <section className="sidebar-menu__widgets">
        <a
          href="tel:(021-78543901)"
          className="button button--secondary sidebar-widget"
        >
          021-78543901
          <FaPhoneAlt className="sidebar-icon" />
        </a>
        <Link to="/booking" className="button button--primary sidebar-widget">
          رزور ویزیت
        </Link>
      </section>
    </aside>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SidebarMenu.handleClickOutside,
};

export default OnClickOutside(SidebarMenu, clickOutsideConfig);
