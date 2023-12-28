import React from "react";
import SkillsCard from "../SkillsCard";
import "./style.scss";

const About = () => {
  const FrontendItems = [
    "React/Redux/Angular/EmberJS",
    "Javascript/Typescript",
    "Webpack/Gulp/Grunt",
    "HTML/CSS/SASS/LESS",
  ];
  const BackendItems = [
    "Python/Pyramid/Django",
    "PHP/PERL",
    "SQL/SQLAlchemy/ElasticSearch",
    "REST/gRPC/SOAP",
  ];
  const OtherItems = [
    "Docker/CI-CD",
    "Git/GitHub/GitLab",
    "Microservices/Distributed Systems",
    "AWS Lambda/EC2/S3/GCP",
  ];
  return (
    <div id="about">
      <div className="about-data">
        <div className="skills-section">
          <p>Skills Overview</p>
          <div className="section-intro">
            I have more than 8 years' experience specialized in frontend and
            backend development for complex scalable web apps. Below is a quick
            overview of my main technical skill sets and tools I use. Want to
            find out more about my experience?{" "}
            <a className="text-link" href="resume.html">
              Check out my online resume
            </a>
            .
          </div>
          <div className="row">
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <SkillsCard title="Frontend" items={FrontendItems} />
              <SkillsCard title="Backend" items={BackendItems} />
              <SkillsCard title="Other" items={OtherItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
