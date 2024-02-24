import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="menu">
    <NavLink exact activeClassName="active" to='/covid-tracker'>Country </NavLink>
    <NavLink exact activeClassName="active" to='/covid-tracker/state'>States </NavLink>
    </div>
    </>
  )
}

export default Navbar;