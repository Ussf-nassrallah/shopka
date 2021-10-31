import React from "react";
import "./SelectCategory.scss";

function SelectCategory({ options, select, setSelect }) {
    return (
        <select
            className="btn btn-slc"
            onChange={(e) => setSelect(e.target.value)}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default SelectCategory;
