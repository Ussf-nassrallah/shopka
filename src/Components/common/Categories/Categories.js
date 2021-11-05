import { React, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Category from "../../Category/Category";
import "./Categories.scss";

export default function Catygories() {
    const { categories } = useContext(GlobalContext);
    const [activeCategory, setActiveCategory] = useState(0);
    const setActiveCategoryClass = (index) => setActiveCategory(index);

    return (
        <div className="container">
            <div className="categories">
                {categories.map((category, index) => (
                    <Category
                        key={category.id}
                        index={index}
                        id={category.id}
                        iconSrc={category.iconSrc}
                        name={category.name}
                        activeCategory={activeCategory}
                        setActiveCategoryClass={setActiveCategoryClass}
                    />
                ))}
            </div>
        </div>
    );
}
