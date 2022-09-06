import React from "react";
import "./index.scss";

const Sort = ({ options, handleSort, value }) => {
  return (
    <>
      <select class="form-control" onChange={handleSort}>
        {options.map((optionItem) => {
          return <option value={optionItem}>{optionItem}</option>;
        })}
      </select>
    </>
  );
};

export default Sort;
