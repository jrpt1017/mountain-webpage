import React from "react";
import "./index.scss";
const CardItem = ({ title, description }) => {
  return (
    <div className="card-item">
      <div className="image-container" />
      <div className="text-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default CardItem;
