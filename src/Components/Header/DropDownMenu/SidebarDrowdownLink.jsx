import React from 'react'
import { NavLink } from 'react-router-dom';
import SidebarDropDown from "./SidebarDropDown";
import { MdKeyboardArrowDown } from "react-icons/md";

function SidebarDrowdownLink({toggleDropDown,closeSidebarMenu,activeDropdown,link}) {
  const { text, url, subMenus, subMenuId } = link;
    return (
        <React.Fragment>
            <NavLink
                className="sidebar-link"
                to={url}
                onClick={(e) => toggleDropDown(e, subMenuId)}
              >
                {text}
                <MdKeyboardArrowDown
                  className={`dropdown-icon ${
                    subMenuId === activeDropdown ? "dropdown-icon--rotated" : ""
                  }`}
                />
              </NavLink>
              <SidebarDropDown
                link={link}
                links={subMenus}
                activeDropdown={activeDropdown}
                closeSidebarMenu={closeSidebarMenu}
              />
        </React.Fragment>
    )
}

export default SidebarDrowdownLink
