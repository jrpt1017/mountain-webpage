import React from "react";
import "./index.scss";

const Sort = ({ options, handleSort, value }) => {
  return (
    <div className="custom-select">
      <select className="form-control" onChange={handleSort}>
        {options.map((optionItem) => {
          return (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sort;
