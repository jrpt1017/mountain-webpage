import React from "react";
import "./index.scss";

const SearchBar = ({ handleSearch, value }) => {
  return (
    <>
      <input
        placeholder="Search for mountains"
        className="search-field"
        onChange={handleSearch}
        value={value}
      />
    </>
  );
};

export default SearchBar;
