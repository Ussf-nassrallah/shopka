import React, { useState } from "react";
import "./OptionsList.scss";

// Icons
import { AiOutlineBars } from "react-icons/ai";
import { RiLayoutGridFill } from "react-icons/ri";

function OptionsList({ value, setValue }) {
    const list = ["show all", "auction", "buy now"];
    const icons = [
        <RiLayoutGridFill className="gridIcon" />,
        <AiOutlineBars className="gridIcon" />,
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIconIndex, setActiveIconIndex] = useState(0);

    // toggle active class in list-item
    const toggleActiveClass = (index) => setActiveIndex(index);

    // change grid style of products
    const handleChanges = (index) => {
        setActiveIconIndex(index);
        let activeIconIndex = icons.indexOf(icons[index]);
        if (activeIconIndex === 1) {
            return setValue(true);
        } else {
            return setValue(false);
        }
    };

    return (
        <div className="flex-f__btns hide-for-mobile">
            <ul>
                {list.map((ele, id) => (
                    <li
                        key={id}
                        onClick={() => toggleActiveClass(id)}
                        className={
                            activeIndex === id
                                ? "active list-item"
                                : "list-item"
                        }
                    >
                        {ele}
                    </li>
                ))}
            </ul>
            <ul>
                {icons.map((icon, id) => (
                    <li
                        key={id}
                        onClick={() => handleChanges(id)}
                        className={
                            activeIconIndex === id
                                ? "list-item__icon active"
                                : "list-item"
                        }
                    >
                        {icon}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OptionsList;
