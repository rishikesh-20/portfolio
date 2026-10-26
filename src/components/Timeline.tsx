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
    title: "Data Engineer I",
    subtitle: "Kastech Technologies, Telangana, India",
    date: "January 2024 — December 2024",
    body: "Built an Airbyte and Python REST API ingestion framework loading 5M+ records from 12 HR, finance, and sales sources into Amazon S3 and PostgreSQL via daily Airflow DAGs. Drove the migration of 15+ legacy SQL scripts to dbt Core with incremental models that cut runtime by over 50%, and owned 17K+ Airflow task runs at 99.5% SLA attainment backed by 40+ dbt tests. Developed star-schema dbt marts powering Metabase dashboards for 40+ stakeholders, accelerating reporting by 82% and cutting ad hoc requests by about 60%.",
  },
  {
    kind: "experience",
    icon: faBriefcase,
    title: "Data Engineering Intern",
    subtitle: "Kastech Technologies, Telangana, India",
    date: "September 2023 — December 2023",
    body: "Replaced manual CSV exports of client financial data with a Python ingestion script loading Amazon S3 and PostgreSQL, cutting monthly finance reporting prep by 75% (2 days to 4 hours). Built a 120-query SQL validation suite in DBeaver that flagged 30+ duplicate-key anomalies across 45K+ monthly attendance records in its first week.",
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
