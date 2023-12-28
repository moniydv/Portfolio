import { React } from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

import "./style.scss";

function Home() {
  return (
    <div className="home" id="home">
      <p className="gif" align="center">
        <a href="https://github.com/moniydv">
          <img
            src="https://user-images.githubusercontent.com/41234408/101987297-4473fb00-3cb9-11eb-9675-289ada4eef7e.gif"
            alt="Animated footer bars"
            width="100%"
            max-width="1024px"
          />
        </a>
      </p>
      <div className="home-data">
        <div>
          <h1 className="home-title">
            Hey!,
            <img
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
              alt=""
              width="50px"
            ></img>
            <br />
            I'am <span>Monika Yadav</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="about-text">
            from North Carolina, USA with proven track record of delivering
            large scale web applications in Web application security, Telecom
            and Biotech domains. Created this portfolio using React and Django (work-in-progress).
          </p>
        </div>
        <div className="home-img">
          <img src="assets/home.jpeg" alt=""></img>
        </div>
      </div>

      <div className="home-social">
        <a
          href="https://www.linkedin.com/in/monikaydv/"
          className="home-social-icon"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/moniydv" className="home-social-icon">
          <GitHubIcon className="icon" />
        </a>
        <a href="#home" className="home-social-icon">
          <TelegramIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
