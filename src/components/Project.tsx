import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          <h2>Modern Data Stack Analytics Platform</h2>
          <p>
            Built an end to end ELT analytics platform that transforms raw data
            into decision ready insights using a modern data stack.
            Implemented orchestration, warehouse modeling, and interactive
            dashboards.
            Tools used include Python, SQL, DuckDB, dbt, Dagster, AWS, and
            Streamlit.
          </p>
          <div className="project-links">
            <span>Links:</span>
            <span className="link-placeholder">Coming soon</span>
          </div>
        </div>

        <div className="project">
          <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          <h2>Medbot. AI Powered Medical Question Answering</h2>
          <p>
            Developed a retrieval augmented generation system to provide
            context grounded medical answers and reduce hallucinations.
            Delivered through an interactive application.
            Built using Python, LangChain, Pinecone, NLP techniques, and
            Streamlit.
          </p>
          <div className="project-links">
            <span>Links:</span>
            <span className="link-placeholder">Coming soon</span>
          </div>
        </div>

        <div className="project">
          <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          <h2>Semiconductor Wafer Fault Detection</h2>
          <p>
            Created a machine learning pipeline for cleaning sensor data,
            engineering features, and classifying wafer faults.
            Focused on robustness and model performance.
            Implemented using Python, Pandas, Random Forest, XGBoost, and
            machine learning workflows.
          </p>
          <div className="project-links">
            <span>Links:</span>
            <span className="link-placeholder">Coming soon</span>
          </div>
        </div>

        <div className="project">
          <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          <h2>Gait Recognition Pipeline</h2>
          <p>
            Built a computer vision pipeline to extract gait embeddings from
            video with improved detection and tracking stability under
            challenging conditions.
            Tools used include Python, PyTorch, YOLOX, ByteTrack, and OpenGait.
          </p>
          <div className="project-links">
            <span>Links:</span>
            <span className="link-placeholder">Coming soon</span>
          </div>
        </div>

        <div className="project">
          <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          <h2>Customized AI Assistant</h2>
          <p>
            Designed a configurable AI assistant to automate tasks and support
            information retrieval using both speech and text interfaces.
            Implemented with Python, OpenAI APIs, NLP, prompt engineering, and
            speech processing.
          </p>
          <div className="project-links">
            <span>Links:</span>
            <span className="link-placeholder">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
