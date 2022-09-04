import React from "react";
import "./index.scss";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
const MainContent = () => {
  return (
    <div className="main-content">
      <div className="sub-header">
        <SearchBar />
        <Filter />
      </div>
      <CardList />
    </div>
  );
};

export default MainContent;
