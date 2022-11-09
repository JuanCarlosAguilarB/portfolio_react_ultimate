import React from 'react'

// import "./index.css";
// icons
import { CiLinkedin } from 'react-icons/ci';
import { IoMdPhonePortrait } from 'react-icons/io';
import { AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';

import profile_image from "../../assets/images/bakend.png";


const Sidebar = () => {
  return (
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
                <AiOutlineMail />
              </div>

              <div className="contact-info">
                <p className="contact-title" >Email</p>
                <p className="contact-link" >abjuancarlos.12@gmail.com</p>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <IoMdPhonePortrait />
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <p className="contact-link" >+573194038589</p>
              </div>
            </li>

            <li className="contact-item">

              <div className="icon-box">
                <CiLinkedin />
              </div>

              <div className="contact-info">
                <p className="contact-title">Linkedin</p>
                <a href="https://www.linkedin.com/in/juan-carlos-aguilar-bosiga-41b067192/" className=" contact-link social-link" target="_blank" rel="noreferrer"> Juan Carlos Aguilar Bosiga </a>
              </div>

            </li>

            <li className="contact-item">

              <div className="icon-box">
                <AiOutlineGithub />
              </div>


              <div className="contact-info">
                <p className="contact-title">github</p>
                <p className="contact-link" >JuanCarlosAguilarB  <a href="https://github.com/JuanCarlosAguilarB" className=" contact-link social-link" target="_blank" rel="noreferrer" > <TbExternalLink /> </a>

                </p>


              </div>

            </li>

          </ul>
        </div>
      </aside>
  )
}

export default Sidebar
