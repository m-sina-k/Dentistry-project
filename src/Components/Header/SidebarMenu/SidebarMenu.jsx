/* ------------------------------- components ------------------------------- */
import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarDropDown from "../DropDownMenu/SidebarDropDown";
import { useGlobalContext } from "../../../Context/context";
import useWindowDimensions from "./../../../hooks/useWindowDimensions";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { v4 as uuidv4 } from 'uuid';
/* --------------------------------- styles --------------------------------- */
import logo from "../../../Assets/Images/logo.png";
import { IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./SidebarMenu.scss";

/* ---------------------------------- data ---------------------------------- */
import { links } from "../../../Assets/Data/links";

function SidebarMenu() {
  const { showSidebarMenu, setShowSidebarMenu, setShowBackdrop } =
    useGlobalContext();

  const [activeDropdown, setActiveDropdown] = useState(null);

    const closeSidebarMenu = ()=>{
        setShowSidebarMenu(false);
        setShowBackdrop(false);
        setActiveDropdown(null)
    }

  const toggleDropDown = (e, subMenuId) => {
    e.preventDefault();
    const dropdownStatus = subMenuId === activeDropdown ? null : subMenuId;
    setActiveDropdown(dropdownStatus);
  };

  // close sidebar menu on large screen's
  const { width } = useWindowDimensions();
  if (width > 992 && showSidebarMenu) {
    closeSidebarMenu();
  }
  // close sidebar menu on click outside
  const sidebarRef = useRef();
  useClickOutside(sidebarRef, closeSidebarMenu);

  return (
    <aside
      className={`sidebar-menu ${
        showSidebarMenu ? "sidebar-menu--active" : ""
      }`}
      ref={sidebarRef}
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
          const { text, url, subMenus, subMenuId } = link;
          return (
            <div className="sidebar-link-container" key={uuidv4()}>
              <NavLink
                className="sidebar-link"
                activeClassName="sidebar-link--active"
                exact
                to={url}
                onClick={
                  subMenus
                    ? (e) => toggleDropDown(e, subMenuId)
                    : closeSidebarMenu
                }
              >
                {text}
                {subMenus ? (
                  <MdKeyboardArrowDown
                    className={`dropdown-icon ${
                      activeDropdown === subMenuId ? "dropdown-icon--rotated" : ""
                    }`}
                  />
                ) : null}
              </NavLink>
              {subMenus ? (
                <SidebarDropDown
                  link={link}
                  links={subMenus}
                  activeDropdown={activeDropdown}
                  closeSidebarMenu={closeSidebarMenu}
                  key={uuidv4()}
                />
              ) : null}
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

export default SidebarMenu;
