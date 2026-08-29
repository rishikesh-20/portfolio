import React from "react";
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="top">
      <div className="about-section">
        <div className="content">
          <h1 className="display-name">
            <span className="display-line">Rishikesh</span>
            <span className="display-line display-ghost">Regatte</span>
          </h1>

          <p className="bio">
            Passionate about building modern data systems that move clean, reliable data from
            source to insight. Focused on data engineering, cloud infrastructure, and applied
            machine learning, with experience designing scalable pipelines and optimizing
            workflows for real world use cases. Actively leverage modern AI tools to prototype
            faster, improve productivity, and strengthen analytics driven solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
