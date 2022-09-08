import React from "react";
import CardItem from "../CardItem";
import "./index.scss";
const CardList = ({ mountains }) => {
  return (
    <div className="cardlist-container">
      {mountains.map((item) => {
        return <CardItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default CardList;
