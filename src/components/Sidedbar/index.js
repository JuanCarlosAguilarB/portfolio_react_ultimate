import React from 'react'

// import "./index.css";

import profile_image from "../../assets/images/bakend.png";

const Sidebar = () => {
  return (
    <div>
         <aside className="sidebar" data-sidebar>

<div className="sidebar-info">
  <figure className="avatar-box">
    <img src={profile_image} alt="profile_image" />
  </figure>
 
  <div className="info-content">
    <h1 className="name" title="Richard hanrick">Juan Carlos Aguilar</h1>

    <p className="title">Backend developer and junior Frontend developer </p>
  </div>

  <button className="info_more-btn" data-sidebar-btn>
    <span>Show Contacts</span>

    <ion-icon name="chevron-down"></ion-icon>
  </button>

</div>

<div className="sidebar-info_more">

  <div className="separator"></div>

  <ul className="contacts-list">

    <li className="contact-item">

      <div className="icon-box">
        <ion-icon name="mail-outline"></ion-icon>
      </div>

      <div className="contact-info">
        <p className="contact-title" >Email</p>
        <p className="contact-link" >abjuancarlos.12@gmail.com</p>
      </div>

    </li>

    <li className="contact-item">

      <div className="icon-box">
        <ion-icon name="phone-portrait-outline"></ion-icon>
      </div>

      <div className="contact-info">
        <p className="contact-title">Phone</p>
        <p className="contact-link" >+573194038589</p>
      </div>
    </li>

    <li className="contact-item">

      <div className="icon-box">
        <ion-icon name="calendar-outline"></ion-icon>
      </div>

      <div className="contact-info">
        <p className="contact-title">Birthday</p>

        <time datetime="1982-06-23">June 23, 1982</time>
      </div>

    </li>

    <li className="contact-item">

      <div className="icon-box">
        <ion-icon name="location-outline"></ion-icon>
      </div>

      <div className="contact-info">
        <p className="contact-title">Location</p>

        <address>Sacramento, California, USA</address>
      </div>

    </li>

  </ul>

  <div className="separator"></div>

  <ul className="social-list">

    <li className="social-item">
      <a href="#" className="social-link">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
    </li>

    <li className="social-item">
      <a href="#" className="social-link">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
    </li>

    <li className="social-item">
      <a href="#" className="social-link">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>

  </ul>

</div>

</aside>
    </div>
  )
}

export default Sidebar
