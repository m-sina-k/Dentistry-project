import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

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
          <li key={uuidv4()}>
            <NavLink
              to={url}
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
