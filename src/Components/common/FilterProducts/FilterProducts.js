import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import "./FilterProducts.scss";

export default function FilterProducts() {
    const { products } = useContext(GlobalContext);
    const allCategories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];
    const [categories, setCategories] = useState(allCategories);

    return (
    <div className="slc-dropdown">
        <select className="btn btn-slc">
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
    </div>
    );
}
