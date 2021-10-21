import React from "react";
import "./SelectCategory.scss";

function SelectCategory({ options }) {
  return (
    <select className="btn btn-slc">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectCategory;
