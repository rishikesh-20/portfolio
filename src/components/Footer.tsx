import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rishikesh-20" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/rishikeshregatter/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p><a href="https://github.com/rishikesh-20/portfolio" target="_blank" rel="noreferrer">Rishikesh Reddy Regatte © 2026</a></p>
    </footer>
  );
}

export default Footer;