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
              Specialization in data engineering, machine learning, and analytics.
              Hands on coursework using Python and SQL across databases and
              large scale data systems. 
              GPA 4.0.
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
              Built and optimized ETL workflows using Python and Airflow.
              Validated and cleaned large datasets with automated quality checks.
              Supported end to end data pipelines for analytics and machine learning.
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
              Strong foundation in core computer science, programming,
              and data structures. Completed multiple academic projects
              in software development and analytics. GPA 3.6.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
