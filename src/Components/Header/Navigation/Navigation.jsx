/* ------------------------------- components ------------------------------- */
import React from "react";
import DropdownLink from "./DropdownLink";
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
/* ---------------------------------- data ---------------------------------- */
import { links } from "../../../Assets/Data/links";

function Navigation() {
  return (
    <nav className="header__nav">
      {links.map((link) => {
        const { text, url, subMenus, subMenuId } = link;
        return subMenus ? (
          <DropdownLink
            key={uuidv4()}
            text={text}
            url={url}
            subMenuId={subMenuId}
            subMenus={subMenus}
          />
        ) : (
          <div className="link-container" key={uuidv4()}>
            <NavLink
              to={url}
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
