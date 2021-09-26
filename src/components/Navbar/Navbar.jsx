import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import nav from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <div>
        <NavLink activeClassName={nav.active} className={nav.item} to="/profile">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName={nav.active} className={nav.item} to="/dialogs">
        Messages
        </NavLink>
      </div>
      <div>
        <a className={nav.item} href="/news">
          News
        </a>
      </div>
      <div>
        <a className={nav.item} href="/music">
          Music
        </a>
      </div>
      <div>
        <a className={nav.item} href="/settings">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
