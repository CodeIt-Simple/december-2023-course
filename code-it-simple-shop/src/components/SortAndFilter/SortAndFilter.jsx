import React from "react";
import "./SortAndFilter.css"
const SortAndFilter = ({ title, optionsArr }) => {
  return (
    <div className="collection-sort">
      <label>{title}</label>
      <select>
        {optionsArr.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortAndFilter;
