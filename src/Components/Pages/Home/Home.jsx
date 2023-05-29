import React from "react";

import "./Home.css";

import { Link } from "react-router-dom";
import { LinkedinIcon, GithubIcon } from "../../../Resources";

export const Home = () => {
  return (
    <>
      <div className="home-screen">
        <div className="home-container__header">
          <article className="home-container__header-left">
            <h1>Welcome.</h1>
            <h2>Full Stack Engineer 👋</h2>
            <p className="home-container__header-main-text">
              Hi, I'm{" "}
              <span className="home-container__header-sub-text">
                Juan Carlos A
              </span>
              passionate developer based in Bogota, Colombia. 📍 <br />I am
              focused on creating reusable, testable, and efficient code.
            </p>
          </article>

          <aside className="home-container__header-recent-projects">
            <h2>Recet projects</h2>
          </aside>
        </div>
        <footer className="home-container__footer">
          <p>Email: abjuancarlos.12@gmail.com</p>
          <div className="home-container__footer-social">
            <Link
              to="https://www.linkedin.com/in/juan-carlos-aguilar-bosiga-41b067192/"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
            <Link to="https://github.com/JuanCarlosAguilarB" target="_blank">
              <GithubIcon />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};
