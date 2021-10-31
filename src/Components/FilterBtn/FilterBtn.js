import React from "react";
import "./FilterBtn.scss";

function FilterBtn({ id, buttonValue, index, toggleState, toggleActiveClass }) {
    return (
        <button
            className={
                id === toggleState + 1
                    ? "filter-btn active"
                    : "filter-btn inactive"
            }
            onClick={() => toggleActiveClass(index)}
        >
            {buttonValue}
        </button>
    );
}

export default FilterBtn;
