import React, { useState } from "react";
import FilterBtn from "../../FilterBtn/FilterBtn";
import "./FilterButtons.scss";

function FilterButtons() {
    const [buttons, setButtons] = useState([
        { id: 1, value: "Related" },
        { id: 2, value: "worldwide shipping" },
        { id: 3, value: "under $50" },
        { id: 4, value: "kitten" },
        { id: 5, value: "plastic plugs" },
        { id: 6, value: "pucker shoes" },
        { id: 7, value: "vintage typewriter" },
    ]);
    const [toggleState, setToggleState] = useState(0);

    const toggleActiveClass = (index) => {
        setToggleState(index);
    };

    console.log(toggleState);

    return (
        <div className="btns">
            {buttons.map((button, index) => (
                <FilterBtn
                    key={button.id}
                    id={button.id}
                    buttonValue={button.value}
                    index={index}
                    toggleState={toggleState}
                    toggleActiveClass={toggleActiveClass}
                />
            ))}
        </div>
    );
}

export default FilterButtons;
