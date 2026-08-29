import React from "react";
import SectionHeading from "./SectionHeading";
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

const groups = [
  {
    icon: faPython,
    title: "AI and Machine Learning",
    desc: "Building AI and machine learning systems, including retrieval-augmented generation, LLM applications, and predictive modeling with the Python data science stack.",
    chipTitle: "Skills:",
    items: skillsCategoryOne,
  },
  {
    icon: faAws,
    title: "Data Engineering and Cloud",
    desc: "Experience building and orchestrating data pipelines using modern data engineering frameworks and cloud services.",
    chipTitle: "Tools:",
    items: skillsCategoryTwo,
  },
  {
    icon: faCode,
    title: "Languages and Development",
    desc: "Comfortable across multiple programming languages and full stack tooling, building data driven applications, dashboards, and APIs.",
    chipTitle: "Technologies:",
    items: skillsCategoryThree,
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <SectionHeading top="Technical" bottom="Skills" />

        <div className="skill-rows">
          {groups.map((group) => (
            <div className="skill-row" key={group.title}>
              <div className="skill-row-head">
                <span className="skill-row-icon">
                  <FontAwesomeIcon icon={group.icon} />
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
              </div>
              <div className="skill-row-chips">
                {group.items.map((label) => (
                  <Chip key={label} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
