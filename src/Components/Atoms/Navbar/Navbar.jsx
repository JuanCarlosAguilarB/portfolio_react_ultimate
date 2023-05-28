import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "../../../Core/Hooks";

const Navbar = () => {
  const [widthWindowNavigator, heightWindowNavigator] = useMediaQuery();

  const [isShowOptionsMenuHamburguer, setIsShowOptionsMenuHamburguer] =
    useState(false);

  const handleShowOptionsMenuHamburguer = () => {
    setIsShowOptionsMenuHamburguer(!isShowOptionsMenuHamburguer);
  };

  return (
    <>
      <nav className="navbar_container">
        <h3 style={{ width: "40px" }}>
          {" "}
          <span>JuanC.dev</span>{" "}
        </h3>

        <FontAwesomeIcon
          icon={faBarsStaggered}
          style={{
            paddingRight: "12px",
            display: widthWindowNavigator > 768 ? "none" : null,
            width: "40px",
          }}
          onClick={handleShowOptionsMenuHamburguer}
        />
        <ul
          className={
            isShowOptionsMenuHamburguer
              ? "display_none navbar_container-list"
              : "navbar_container-list"
          }
          style={{ dysplay: "none" }}
        >
          <Link className="navbar_container-list-link" to="/home">
            Home
          </Link>
          <Link className="navbar_container-list-link" to="/About">
            About
          </Link>
          <Link className="navbar_container-list-link" to="/Projects">
            Projects
          </Link>
          <Link className="navbar_container-list-link" to="/Contact">
            Contact
          </Link>
          <Link className="navbar_container-list-link" to="/CV">
            CV
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
