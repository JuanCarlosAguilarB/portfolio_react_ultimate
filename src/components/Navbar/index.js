import React from 'react'
// import "./index.css";
import { Link } from "react-router-dom";
import cv from "../../assets/cv_Juan_Aguilar.pdf"

const Navbar = () => {
  return (
    <nav className="navbar">

    <ul className="navbar-list">

      <li className="navbar-item">
        <button className="navbar-link  active" data-nav-link> <Link   to={"/"} className="navbar-link"> About</Link> </button>
      </li>

      <li className="navbar-item">
      <button className="navbar-link  active" data-nav-link> <a href={cv} target="_blank" rel="noopener noreferrer" download="CV_JuanAguilar" className="navbar-link active">Resume</a> </button>
      {/* <a href={cv} target="_blank" rel="noopener noreferrer" download="CV_JuanAguilar" className="navbar-link">Resume</a> */}
      </li>
{/* 
      <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Portfolio</button>
      </li> */}

  

      {/* <li className="navbar-item">
        <button className="navbar-link" data-nav-link>Contact</button>
      </li> */}

    </ul>

  </nav>


  )
}

export default Navbar
