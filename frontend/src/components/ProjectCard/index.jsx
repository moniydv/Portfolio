import React from "react";
import "./style.scss";

const ProjectCard = ({ image, demolink, codelink, description }) => {
  return (
    <div className="projectcard-container">
      <img src={image} alt="" className="image" />
      <div className="card-info">
        <div className="text">
          <div className="project-description">{description}</div>
          <div className="buttons">
            <button
              onClick={() => {
                window.open(`${codelink}`, "_blank")
              }}
            >
              Code
            </button>
            {/* <button
              onClick={() => {
                window.location.href = `${demolink}`;
              }}
            >
              Demo
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
