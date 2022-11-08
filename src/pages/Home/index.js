import logo from '../../logo.svg';
// import './style.css';
import { Link } from 'react-router-dom';

import drf from "../../assets/images/drf.jpeg";
import nodejs from "../../assets/images/nodejs.png";
import fastapi from "../../assets/images/fastapi.png";
import react_img from "../../assets/images/react.png";

// esto es propio de webpakc para inportar las imagenes de ofrma dinámica

import  Knowledge  from "./componets/Knowledges"


export function HomePage() {
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Electronic engineer focused on backend development with python and node js with more than two years working with python. I like to be responsible and I have teamwork skills; imagination and initiative to develop new ideas and make decisions.
      </p>

      <p>
      I am focused on creating reusable, testable, and efficient code that meets customer needs. </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing. </h3>

      <ul className="service-list">

        <li className="service-item">

          <div className="service-icon-box">
            <img src={drf} alt="design icon" width="90"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Backend services with DRF</h4>

            <p className="service-item-text">
            Develop, maintain and manage projects with django rest framework and postgreSQL. In addition, to develop projects with only django.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={nodejs} alt="Web development icon" width="100"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Backend services with node js</h4>

            <p className="service-item-text">
               Develop, maintain and manage projects with node js using clean architecture. In addition to handling microservices, redis and non-relational databases such as mongoDB.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={fastapi} alt="mobile app icon" width="90" height="50"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Backend services with Fastapi</h4>

            <p className="service-item-text">
            Develop, maintain and manage projects with FastAPI and postgreSQL. Oriented to both microservices and monoliths.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={react_img} alt="camera icon" width="100"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">React junior developer</h4>

            <p className="service-item-text">
            Development of frontend systems implementing clean architecture
            </p>
          </div>

        </li>

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>

            <figure className="testimonials-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar/>
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

            <div className="testimonials-text" data-testimonials-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>
        </li>

        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>

            <figure className="testimonials-avatar-box">
              <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar/>
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

            <div className="testimonials-text" data-testimonials-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>
        </li>

        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>

            <figure className="testimonials-avatar-box">
              <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar/>
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

            <div className="testimonials-text" data-testimonials-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>
        </li>

        <li className="testimonials-item">
          <div className="content-card" data-testimonials-item>

            <figure className="testimonials-avatar-box">
              <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar/>
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

            <div className="testimonials-text" data-testimonials-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>
        </li>

      </ul>

    </section> */}


    {/* <!--
      - testimonials modal
    --> */}

    <div className="modal-container" data-modal-container>

      <div className="overlay" data-overlay></div>

      <section className="testimonials-modal">

        <button className="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img/>
          </figure>

          <img src="./assets/images/icon-quote.svg" alt="quote icon"/>
        </div>

        <div className="modal-content">

          <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

          <time datetime="2021-06-14">14 June, 2021</time>

          <div data-modal-text>
            <p>
              Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>

        </div>

      </section>

    </div>


    {/* <!--
      - knowledges
    --> */}

    <Knowledge/>

  </article>
  );
}
