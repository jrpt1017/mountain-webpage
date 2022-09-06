import React from "react";
import Header from "../Header";
import MainContent from "../MainContent";
import "./index.scss";
const MainComponent = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <MainContent />
    </div>
  );
};

export default MainComponent;
