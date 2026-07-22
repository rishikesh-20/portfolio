import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education and Work History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="January 2025 to December 2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              University of North Carolina at Charlotte
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Master of Science in Computer Science
            </h4>
            <p>
              Specializing in data engineering, machine learning, and
              analytics, with hands on coursework in Python, SQL, and large
              scale data systems. Maintaining a 4.0 GPA.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 to November 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Engineering Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kastech Technologies, Telangana, India
            </h4>
            <p>
              Orchestrated client data ingestion workflows with Apache Airflow
              and Airbyte, and optimized ETL pipelines by replacing full-refresh
              loads with incremental ingestion, cutting runtime by over 50%.
              Modeled attendance and financial data into PostgreSQL schemas to
              power HR and P&amp;L reporting dashboards, and standardized Python
              data quality checks across reporting pipelines.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2020 to August 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Hyderabad Institute of Technology and Management
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Technology in Computer Science
            </h4>
            <p>
              Built a strong foundation in core computer science, programming,
              and data structures, and completed multiple academic projects in
              software development and analytics. Graduated with a 3.6 GPA.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
