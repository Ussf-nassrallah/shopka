import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

// styles
import "./FilterProducts.scss";

// components
import SelectCategory from "../../SelectCategory/SelectCategory";

export default function FilterProducts({ select, setSelect }) {
    const { products } = useContext(GlobalContext);
    const allCategories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];
    const [categories, setCategories] = useState(allCategories);
    const conditions = ["condition", "option-2", "option-3", "option-4"];
    const deliveryOptions = [
        "delivery Options",
        "option-2",
        "option-3",
        "option-4",
    ];

    return (
        <>
            <div className="grid">
                <div className="slc-dropdown">
                    <SelectCategory
                        options={categories}
                        select={select}
                        setSelect={setSelect}
                    />
                </div>

                <div className="slc-dropdown">
                    <SelectCategory
                        options={conditions}
                        select={select}
                        setSelect={setSelect}
                    />
                </div>

                <div className="slc-dropdown">
                    <SelectCategory
                        options={deliveryOptions}
                        select={select}
                        setSelect={setSelect}
                    />
                </div>
            </div>
        </>
    );
}
