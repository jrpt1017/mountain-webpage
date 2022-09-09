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
  const [filterValue, setFilterValue] = useState(filterOptions[0]);

  // Upon component is mounted, sort it alphabetically -- by default.
  useEffect(() => {
    const cardCopy = [...cards];
    cardCopy.sort((firstItem, secondItem) => {
      return firstItem.title.localeCompare(secondItem.title);
    });
    setCards(cardCopy);
  }, []);

  const sortToAZ = (cardCopy) => {
    cardCopy.sort((firstItem, secondItem) => {
      return firstItem.title.localeCompare(secondItem.title);
    });
  };

  const sortToZA = (cardCopy) => {
    cardCopy
      .sort((firstItem, secondItem) => {
        return firstItem.title.localeCompare(secondItem.title);
      })
      .reverse();
  };

  const handleSortItems = (e) => {
    const sortValue = e.target.value;
    setFilterValue(sortValue);
    const cardCopy = [...cards];
    if (sortValue === filterOptions[0]) {
      sortToAZ(cardCopy);
    } else {
      sortToZA(cardCopy);
    }
    setCards(cardCopy);
  };

  const handleSearchMountain = (e) => {
    const term = e.target.value;
    setsearchTerm(term);

    if (term !== "") {
      const items = cards.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setCards(items);
    } else {
      const originalData = mockData;
      if (filterValue === filterOptions[0]) {
        sortToAZ(originalData);
      } else {
        sortToZA(originalData);
      }
      setCards(originalData);
    }
  };

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
