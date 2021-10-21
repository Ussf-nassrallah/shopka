import React from "react";
import FilterBtn from "../../FilterBtn/FilterBtn";
import "./FilterButtons.scss";

function FilterButtons() {
  const buttons = [
    "Related",
    "worldwide shipping",
    "under $50",
    "kitten",
    "plastic plugs",
    "pucker shoes",
    "vintage typewriter",
  ];

  return (
    <div className="btns">
      {buttons.map((button, index) => (
        <FilterBtn key={index} buttonValue={button} />
      ))}
    </div>
  );
}

export default FilterButtons;
