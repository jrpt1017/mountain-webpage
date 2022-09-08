import React, { useState, useEffect } from "react";
import "./index.scss";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Sort from "./Sort";
import { mockData } from "../../mockData";
const MainContent = () => {
  const filterOptions = ["Sort a A-Z", "Sort a Z-A"];
  const [cards, setCards] = useState(mockData);
  const [searchTerm, setsearchTerm] = useState("");

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

  const handleSearchMountain = (e) => {
    setsearchTerm(e.target.value);
  };

  // Upon component is mounted, sort it alphabetically -- by default.
  useEffect(() => {
    const cardCopy = [...cards];
    cardCopy.sort((firstItem, secondItem) => {
      return firstItem.title.localeCompare(secondItem.title);
    });
    setCards(cardCopy);
  }, []);

  useEffect(() => {
    const cardsCopy = [...cards];
    const items = cardsCopy.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    console.log(items.map((i) => i.title));
  }, [searchTerm]);

  return (
    <div className="main-content-wrapper">
      <div className="sub-header">
        <SearchBar handleSearch={handleSearchMountain} value={searchTerm} />
        <Sort options={filterOptions} handleSort={handleSortItems} />
      </div>
      <CardList mountains={cards} />
    </div>
  );
};

export default MainContent;
