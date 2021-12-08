/* ------------------------------- components ------------------------------- */
import React from "react";
import DropdownLink from "./DropdownLink";
import { NavLink } from 'react-router-dom';
/* ---------------------------------- data ---------------------------------- */
import { links } from "../../../Assets/Data/links";

function Navigation() {
  return (
    <nav className="header__nav">
      {links.map((link) => {
        const { id, text, url, subMenus, subMenuId } = link;
        return subMenus ? (
          <DropdownLink
            key={id}
            text={text}
            url={url}
            subMenuId={subMenuId}
            subMenus={subMenus}
            id={id}
          />
        ) : (
          <div className="link-container">
            <NavLink
              to={url}
              key={id}
              exact
              className="header__nav__link "
              activeClassName="header__nav__link--active"
            >
              {text}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}

export default Navigation;
