import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TypeWriter from './TypeWriter';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rishikesh-20" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rishikeshregatter/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer" title="Download Resume"><ArticleIcon/></a>
          </div>
          <h1>Rishikesh Regatte</h1>
          <p className="tagline">
            <TypeWriter text="Data Engineer | ML Enthusiast" charSpeed={55} startDelay={400} />
          </p>
          <p>Graduate Student at University of North Carolina at Charlotte</p>
          <p className="bio">
            Passionate about building modern data systems that move clean, reliable data from source to insight. Focused on data engineering, cloud infrastructure, and applied machine learning, with experience designing scalable pipelines and optimizing workflows for real world use cases. Actively leverage modern AI tools to prototype faster, improve productivity, and strengthen analytics driven solutions.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rishikesh-20" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rishikeshregatter/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer" title="Download Resume"><ArticleIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;