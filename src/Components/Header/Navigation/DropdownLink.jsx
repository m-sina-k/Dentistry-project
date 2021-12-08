/* -------------------------------- component ------------------------------- */
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import useWindowDimensions from "./../../../hooks/useWindowDimensions";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
/* ---------------------------------- style --------------------------------- */
import { MdKeyboardArrowDown } from "react-icons/md";

function DropdownLink({ text, subMenuId, subMenus, url, id }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDropdownBg, setShowDropdownBg] = useState(false);

  const openDropDown = (e, subMenuId) => {
    e.preventDefault();
    setShowDropdownBg(true);
    setActiveDropdown(subMenuId);
  };

  const closeDropDown = () => {
    setShowDropdownBg(false);
    setActiveDropdown(null);
  };

  // close the dropdown when click outside of it (on the dropdownBg overlay)
  const dropdownRef = useRef();
  useClickOutside(dropdownRef, closeDropDown);

  // close the dropdown on small screen's
  const { width } = useWindowDimensions();
  if (width < 992 && activeDropdown) {
    closeDropDown();
  }

  return (
    <div className="link-container">
      {showDropdownBg && <div className="dropdown-bg"></div>}
      <NavLink
        to={url}
        key={id}
        exact
        className="header__nav__link"
        activeClassName="header__nav__link--active"
        onClick={(e) => openDropDown(e, subMenuId)}
      >
        {text}

        <MdKeyboardArrowDown
          className={`dropdown-icon ${
            activeDropdown === subMenuId ? "dropdown-icon--rotated" : ""
          }`}
        />
      </NavLink>

      <DropDownMenu
        subMenuId={subMenuId}
        links={subMenus}
        activeDropdown={activeDropdown}
        closeDropdown={closeDropDown}
        ref={dropdownRef}
        closeDropDown={closeDropDown}
      />
    </div>
  );
}

export default DropdownLink;
