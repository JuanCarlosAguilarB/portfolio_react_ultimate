import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar_container">
        <h3>
          {" "}
          <span>JuanC.dev</span>{" "}
        </h3>

        <ul className="navbar_container-list">
          <Link className="navbar_container-list-link" to="/home">Home</Link>
          <Link className="navbar_container-list-link" to="/About">About</Link>
          <Link className="navbar_container-list-link" to="/Projects">Projects</Link>
          <Link className="navbar_container-list-link" to="/Contact">Contact</Link>
          <Link className="navbar_container-list-link" to="/CV">CV</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
