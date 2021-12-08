import React from "react";
import { NavLink } from "react-router-dom";

function SidebarDropDown({ link, links, activeDropdown,closeSidebarMenu }) {
  return (
    <ul
      className={`sidebar-menu__dropdown ${
        activeDropdown === link.subMenuId
          ? "sidebar-menu__dropdown--active"
          : ""
      }`}
    >
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li>
            <NavLink
              to={url}
              key={id}
              className="dropdown__link"
              activeClassName="dropdown__link--active"
              exact
              onClick={closeSidebarMenu}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarDropDown;
