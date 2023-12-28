// SkillsCard.jsx
import React from "react";
import "./style.scss";

const SkillsCard = ({ title, items }) => {
  return (
    <div className="list-item-card">
      <div className="card-header">{title}</div>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index}>
            <div className="list-item">
              <span className="tick-mark">&#10003;</span>
              <span className="item-text">{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
