import React from "react";
import { NavLink } from "react-router-dom";

function DropDownMenu({ links, activeDropdown, subMenuId,setActiveDropdown }) {
  return (
    <div
      className={`header__dropdown-menu ${
        activeDropdown === subMenuId ? "header__dropdown-menu--active" : ""
      }`}
    >
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <NavLink
            key={id}
            to={url}
            exact
            className="dropdown-link"
            activeClassName="dropdown-link--active"
            onClick={()=>setActiveDropdown(null)}
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default DropDownMenu;
