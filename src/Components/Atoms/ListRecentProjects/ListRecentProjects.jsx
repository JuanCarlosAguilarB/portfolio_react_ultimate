import React from "react";
import { Link } from "react-router-dom";
import "./ListRecentProjects.css";

export const ListRecentProjects = (props) => {
  return (
    <>
      <section className="recent_projects-container">
        <h2 className="recent_projects-title">Recet projects</h2>
        <ol className="alternating-colors">
          <li>
            <Link>
              <strong>projecto 1 subtitle</strong>
            </Link>
            <p>Fight aliens, wear an AI, learn about screen peeking siblings</p>
          </li>
          <li>
            <Link>
              <strong>projecto 1 subtitle</strong>
            </Link>
            <p>Fight aliens, wear an AI, learn about screen peeking siblings</p>
          </li>
          <li>
            <Link>
              <strong>projecto 1 subtitle</strong>
            </Link>
            <p>Fight aliens, wear an AI, learn about screen peeking siblings</p>
          </li>
          <li>
            <Link>
              <strong>projecto 1 subtitle</strong>
            </Link>
            <p>Fight aliens, wear an AI, learn about screen peeking siblings</p>
          </li>
        </ol>
      </section>
      {/* <div class="box box1">
  <div class="oddboxinner"> bangers?</div>
</div> */}
      {/* <div class="box box2">
  <div class="evenboxinner"> bangers!</div>
</div> */}
      {/* <div class="box box3">
  <div class="oddboxinner"></div>
</div> */}
    </>
  );
};
