import React from "react";
import { mockData } from "../../../mockData";
import CardItem from "../CardItem";
import "./index.scss";
const CardList = () => {
  return (
    <div className="cardlist-container">
      {mockData.map((item) => {
        return <CardItem {...item} />;
      })}
    </div>
  );
};

export default CardList;
