import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faAws } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skillsCategoryOne = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Machine learning fundamentals",
  "Data visualization"
];

const skillsCategoryTwo = [
  "Apache Airflow",
  "dbt",
  "Dagster",
  "DuckDB",
  "AWS",
  "ETL and ELT pipelines"
];

const skillsCategoryThree = [
  "Streamlit",
  "Python scripting",
  "API integration",
  "Git version control",
  "Dashboard development",
  "Basic web development"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Technical Skills</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science and Analytics</h3>
            <p>
              Strong foundation in data analysis, machine learning concepts,
              and visualization using Python based tools.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {skillsCategoryOne.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Data Engineering and Cloud</h3>
            <p>
              Experience building and orchestrating data pipelines using modern
              data engineering frameworks and cloud services.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {skillsCategoryTwo.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>Software Development and Data Applications</h3>
            <p>
              Hands on experience developing data driven applications,
              dashboards, and automation scripts.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Technologies:</span>
              {skillsCategoryThree.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
