import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faAws } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skillsCategoryOne = [
  "XGBoost",
  "Scikit-learn",
  "LangChain",
  "Retrieval-Augmented Generation",
  "Prompt Engineering",
  "Pandas",
  "NumPy",
  "Matplotlib"
];

const skillsCategoryTwo = [
  "Databricks",
  "Delta Lake",
  "Apache Airflow",
  "Airbyte",
  "DuckDB",
  "ETL Pipelines",
  "Data Warehousing",
  "MLflow",
  "Unity Catalog",
  "AWS"
];

const skillsCategoryThree = [
  "Python",
  "SQL",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Streamlit",
  "Node.js",
  "REST APIs",
  "Power BI",
  "Git"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Technical Skills</h1>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI and Machine Learning</h3>
            <p>
              Building AI and machine learning systems, including
              retrieval-augmented generation, LLM applications, and predictive
              modeling with the Python data science stack.
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
            <h3>Languages and Development</h3>
            <p>
              Comfortable across multiple programming languages and full stack
              tooling, building data driven applications, dashboards, and APIs.
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
