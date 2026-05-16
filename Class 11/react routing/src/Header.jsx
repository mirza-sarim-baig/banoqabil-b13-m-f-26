import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <nav className="nav">
        <NavLink
          to="home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
