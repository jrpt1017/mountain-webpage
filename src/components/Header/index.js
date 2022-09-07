import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <div className="header-wrapper">
      <img
        className="adrenalin-title-container"
        src="/adrenalin_title.svg"
        alt="adrenalin-title"
        align="left"
      />
      <div className="title-container">
        <p className="header-title">Mountains</p>
        <p className="header-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="triangle-container">
        <img
          className="violet-triangle"
          src="/violet-triangle.svg"
          alt="violet-triangle"
        />
        <img
          className="green-triangle"
          src="/green-triangle.svg"
          alt="green-triangle"
        />
        <img
          className="blue-triangle"
          src="/blue-triangle.svg"
          alt="blue-triangle"
        />
      </div>
    </div>
  );
};

export default Header;
