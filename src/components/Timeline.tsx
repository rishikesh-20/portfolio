import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Rows.scss";
import "../assets/styles/Timeline.scss";

const history = [
  {
    kind: "education",
    icon: faGraduationCap,
    title: "University of North Carolina at Charlotte",
    subtitle: "Master of Science in Computer Science",
    date: "January 2025 — December 2026",
    body: "Specializing in data engineering, machine learning, and analytics, with hands on coursework in Python, SQL, and large scale data systems. Maintaining a 4.0 GPA.",
  },
  {
    kind: "experience",
    icon: faBriefcase,
    title: "Data Engineering Intern",
    subtitle: "Kastech Technologies, Telangana, India",
    date: "August 2024 — November 2024",
    body: "Orchestrated client data ingestion workflows with Apache Airflow and Airbyte, and optimized ETL pipelines by replacing full-refresh loads with incremental ingestion, cutting runtime by over 50%. Modeled attendance and financial data into PostgreSQL schemas to power HR and P&L reporting dashboards, and standardized Python data quality checks across reporting pipelines.",
  },
  {
    kind: "education",
    icon: faGraduationCap,
    title: "Hyderabad Institute of Technology and Management",
    subtitle: "Bachelor of Technology in Computer Science",
    date: "August 2020 — August 2024",
    body: "Built a strong foundation in core computer science, programming, and data structures, and completed multiple academic projects in software development and analytics. Graduated with a 3.6 GPA.",
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <SectionHeading top="Education &" bottom="Experience" />

        <div className="section-rows">
          {history.map((item) => (
            <div className={`section-row is-static is-${item.kind}`} key={item.title + item.date}>
              <div className="history-icon" aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="section-row-body">
                <h2 className="section-row-title">{item.title}</h2>
                <p className="section-row-subtitle">{item.subtitle}</p>
                <p className="section-row-text">{item.body}</p>
                <div className="section-row-meta">
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
