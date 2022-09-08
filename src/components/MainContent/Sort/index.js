import React from "react";
import "./index.scss";

const Sort = ({ options, handleSort, value }) => {
  return (
    <div style={{ height: "100%" }}>
      <select class="form-control" onChange={handleSort}>
        {options.map((optionItem) => {
          return <option value={optionItem}>{optionItem}</option>;
        })}
      </select>
    </div>
  );
};

export default Sort;
