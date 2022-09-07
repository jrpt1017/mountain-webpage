import React, { useState, useEffect } from "react";
import "./index.scss";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import { mockData } from "../../mockData";
const MainContent = () => {
  const filterOptions = ["A-Z", "Z-A"];
  const [cards, setCards] = useState(mockData);

  const handleSortItems = (e) => {
    const sortValue = e.target.value;
    const cardCopy = [...cards];
    if (sortValue === filterOptions[0]) {
      cardCopy.sort((firstItem, secondItem) => {
        return firstItem.title.localeCompare(secondItem.title);
      });
    } else {
      cardCopy
        .sort((firstItem, secondItem) => {
          return firstItem.title.localeCompare(secondItem.title);
        })
        .reverse();
    }
    setCards(cardCopy);
  };

  // Upon component is mounted, sort it alphabetically -- by default.
  useEffect(() => {
    const cardCopy = [...cards];
    cardCopy.sort((firstItem, secondItem) => {
      return firstItem.title.localeCompare(secondItem.title);
    });
    setCards(cardCopy);
  }, []);

  return (
    <div className="main-content-wrapper">
      <div className="sub-header">
        <SearchBar />
        <Sort options={filterOptions} handleSort={handleSortItems} />
      </div>
      {/* <CardList mountains={cards} /> */}
    </div>
  );
};

export default MainContent;
