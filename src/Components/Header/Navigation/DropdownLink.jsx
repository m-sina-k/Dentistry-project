/* -------------------------------- component ------------------------------- */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./../../../hooks/useWindowDimensions";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import OnClickOutside from 'react-onclickoutside'
/* ---------------------------------- style --------------------------------- */
import { MdKeyboardArrowDown } from "react-icons/md";

function DropdownLink({ text, subMenuId, subMenus, url}) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const openDropDown = (e, subMenuId) => {
    e.preventDefault();
    
    activeDropdown ? setActiveDropdown(null) : setActiveDropdown(subMenuId);
  };


  // close the dropdown on small screen's
  const { width } = useWindowDimensions();
  if (width < 992 && activeDropdown) {
    setActiveDropdown(null)
  }

 // close the dropdown when click outside of it
  DropdownLink.handleClickOutside = ()=>setActiveDropdown(null);

  return (
    <div className="link-container">
      <NavLink
        to={url}
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
        setActiveDropdown={setActiveDropdown}
      />
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside : ()=>DropdownLink.handleClickOutside
}

export default OnClickOutside(DropdownLink,clickOutsideConfig);
