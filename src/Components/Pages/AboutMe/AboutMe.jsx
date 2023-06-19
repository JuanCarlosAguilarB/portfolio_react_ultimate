import React from "react";

import "./AboutMe.css";

import { Link } from "react-router-dom";
import { ListRecentProjects } from "../../Atoms";

import { LinkedinIcon, GithubIcon, officeDesktop } from "../../../Resources";

export const AboutMe = () => {
  return (
    <>
      <div className="about-screen">
        <section className="about-screen__header">
          <span className="about-title-1">About</span>
          <span className="about-title-2">Me </span>
        </section>

        <section className="about-container">
          <article>
            Collaboration is at the core of my work. As a team player, I thrive
            in cross-functional environments, working with diverse groups to
            produce exceptional web applications.
          </article>
          <article>
            I consider myself as an avid learner, always looking for new
            challenges to further improve my skills. With a passion for backend
            and frontend development and a range of technical skills such as a
            solid foundation in Python, I have built scalable, high quality
            software solutions.
          </article>
          <section className="about-container__footer">
            <article className="about-container__footer-text">
              My experience extends to working with frameworks such as Django
              and Flask to create RESTful APIs and relational and non-relational
              databases. I am well versed in version control tools and
              implementing unit and functional tests.
            </article>
            <figure>
              <img
                src={officeDesktop}
                alt="office-img"
                className="about-container__footer-img"
              />
            </figure>
          </section>
        </section>
      </div>
    </>
  );
};
