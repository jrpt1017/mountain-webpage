import React from "react";
import "./index.scss";
import CircleIcon from "./CircleIcon";
const CardItem = ({ title, description, imageName }) => {
  return (
    <div className="card-item">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(images/${imageName})`,
          backgroundSize: "100% 100%",
        }}
      >
        <CircleIcon />
      </div>
      <div className="text-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default CardItem;
