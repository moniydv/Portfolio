import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-title">Monika</p>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/monikaydv/"
          className="footer-icon"
        >
          <LinkedInIcon />
        </a>
        <a href="#home" className="footer-icon">
          <TelegramIcon />
        </a>
        {/* <a href="https://twitter.com/monikaydv" className="footer-icon"><TwitterIcon/></a> */}
        <a href="https://github.com/moniydv" className="footer-icon">
          <GitHubIcon />
        </a>
      </div>
      <p className="footer-copyright">
        &#169; 2023 copyright all right reserved
      </p>
    </div>
  );
};

export default Footer;
