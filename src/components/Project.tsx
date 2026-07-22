import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
          <div className="img-mask">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div className="project-heading">
            <h2>LLM Prompt Benchmark</h2>
            <a
              href="https://github.com/rishikesh-20/llm-prompt-benchmark"
              target="_blank"
              rel="noreferrer"
              aria-label="LLM Prompt Benchmark GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>
            Built a local LLM evaluation harness benchmarking 5 prompting
            strategies across 150 RAGBench samples (750 Qwen3-14B generations),
            scored by a Gemini RAGAS-style judge for faithfulness, relevancy,
            and hallucination rate. Retrieval-augmented prompting cut
            hallucination from 68.7% to 10.5% versus zero-shot, and structured
            RAG reached 91.2% faithfulness. Engineered a resumable runner with
            atomic JSON checkpoints, a Streamlit dashboard, and optional export
            to BigQuery and Cloud Storage. Built with Python, Qwen3-14B, Gemini,
            RAGBench, and BigQuery.
          </p>
        </div>

        <div className="project">
          <div className="img-mask">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div className="project-heading">
            <h2>SEC Filing Intelligence Lakehouse</h2>
            <a
              href="https://github.com/rishikesh-20/SEC-Filing-Intelligence"
              target="_blank"
              rel="noreferrer"
              aria-label="SEC Filing Intelligence Lakehouse GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>
            Architected a production-style Lakehouse and MLOps platform on
            Databricks to ingest, transform, and model SEC financial data for
            S&amp;P 500 companies using Delta Lake, Unity Catalog, and
            Databricks Asset Bundles. Designed leakage-safe feature pipelines
            and a calibrated XGBoost model achieving 0.663 ROC-AUC and 62%
            accuracy through chronological validation and MLflow experiment
            tracking. Operationalized batch scoring, champion model versioning,
            BI dashboards, and peer clustering (Silhouette Score 0.75). Built
            with Databricks, Delta Lake, SQL, XGBoost, and MLflow.
          </p>
        </div>

        <div className="project">
          <div className="img-mask">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div className="project-heading">
            <h2>Medbot. AI Powered Medical Question Answering</h2>
            <a
              href="https://github.com/rishikesh-20/GenerativeAI-Medical-Chatbot-"
              target="_blank"
              rel="noreferrer"
              aria-label="Medbot GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>
            Designed an AI-powered medical chatbot delivering context-aware
            health information using LangChain and Retrieval-Augmented
            Generation. Integrated a Pinecone vector database for semantic
            search, reducing irrelevant responses by over 40%, and delivered it
            through an interactive Streamlit interface with secure API
            integration for real-time querying. Built with Python, LangChain,
            Pinecone, and LLMs.
          </p>
        </div>

        <div className="project">
          <div className="img-mask">
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div className="project-heading">
            <h2>Conversational Deductive Query Assistant</h2>
            <a
              href="https://github.com/manik192/Conversational-Deductive-Query-Assistant"
              target="_blank"
              rel="noreferrer"
              aria-label="Conversational Deductive Query Assistant GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>
            Developed a natural language to SQL application enabling dynamic
            querying of relational databases through AI-generated queries.
            Improved query generation accuracy by 35% using schema validation
            and structured prompt refinement, and built interactive Streamlit
            dashboards with tabular and visual outputs to accelerate exploratory
            data analysis. Built with Python, SQL, and Streamlit.
          </p>
        </div>

        <div className="project">
          <div className="img-mask">
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div className="project-heading">
            <h2>Gait Recognition Pipeline</h2>
            <a
              href="https://github.com/rishikesh-20/All-in-One-Gait"
              target="_blank"
              rel="noreferrer"
              aria-label="Gait Recognition Pipeline GitHub repository"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>
            Forked and implemented an open-source gait recognition pipeline as
            part of a graduate course project, extracting gait embeddings from
            video through an end-to-end detection, tracking, and recognition
            workflow. Adapted the pipeline for improved detection and tracking
            stability under challenging conditions. Built with Python, PyTorch,
            YOLOX, ByteTrack, and OpenGait.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
