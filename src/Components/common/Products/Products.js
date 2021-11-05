import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Product from "../../Product/Product";
import "./Products.scss";

function Products({
    list,
    setList,
    select,
    setSelect,
    filterItems,
    value,
    setValue,
}) {
    const { products } = useContext(GlobalContext);

    useEffect(() => {
        list =
            // eslint-disable-next-line react-hooks/exhaustive-deps
            select === "all" ? setList(products) : setList(filterItems(select));
    }, [select]);

    return (
        <section className={value ? "products col-1" : "products"}>
            {list.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    );
}

export default Products;
