import React from "react";
import "./sidebar.scss";
import { NavLink, useLocation } from "react-router-dom";
const SideBar = () => {
  const locations = useLocation()?.pathname;
  console.log(locations, "sidebar");

  const active =
    locations === "/categories"
      ? "sidebar__menu-item--active"
      : locations === "/faqs"
      ? "sidebar__menu-item--active"
      : locations === "/news"
      ? "sidebar__menu-item--active"
      : "";
  return (
    <div>
      <div class="sidebar">
        <div class="sidebar__logo">Admin Dashboard</div>
        <ul class="sidebar__menu">
          <NavLink to={"/categories"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">Categories</span>
            </li>
          </NavLink>
          <NavLink to={"/faqs"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">Faqs</span>
            </li>
          </NavLink>
          <NavLink to={"/news"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">News</span>
            </li>
          </NavLink>{" "}
          <NavLink to={"/blogs"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">Blogs</span>
            </li>
          </NavLink>{" "}
          <NavLink to={"/services"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">Services</span>
            </li>
          </NavLink>
          <NavLink to={"/sources"} className={"nav-link"}>
            <li class="sidebar__menu-item ">
              <span class="sidebar__menu-item__icon">🏠</span>
              <span class="sidebar__menu-item__text">Sources</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
