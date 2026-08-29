import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TypeWriter from './TypeWriter';
import profile from '../assets/images/profile.jpeg';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div
        className="image-wrapper"
        style={{ backgroundImage: `url(${profile})` }}
      >
        <img src={profile} alt="Rishikesh Regatte" />
      </div>
      <h2 className="profile-name">Rishikesh Regatte</h2>
      <p className="profile-role">
        <TypeWriter text="Data Engineer | ML Enthusiast" charSpeed={55} startDelay={1100} />
      </p>
      <p className="profile-blurb">
        Graduate Student at the University of North Carolina at Charlotte.
      </p>
      <div className="social_icons">
        <a href="https://github.com/rishikesh-20" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rishikeshregatter/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer" aria-label="Resume" title="Download Resume"><ArticleIcon/></a>
      </div>
    </div>
  );
}

export default ProfileCard;
