import React from "react";
import "./SortAndFilter.css"
const SortAndFilter = ({ title, optionsArr, onChange}) => {
  return (
    <div className="collection-sort">
      <label>{title}</label>
      <select onChange={(event) => onChange(event.target.value)}>
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
