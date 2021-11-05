import React from "react";

const Category = ({
    id,
    iconSrc,
    name,
    activeCategory,
    setActiveCategoryClass,
    index,
}) => {
    return (
        <div
            className={
                id === activeCategory + 1 ? "category active" : "category"
            }
            onClick={() => setActiveCategoryClass(index)}
        >
            <img src={iconSrc} className="category__icon" alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Category;
