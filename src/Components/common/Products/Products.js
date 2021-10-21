import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Product from "../../Product/Product";
import "./Products.scss";

function Products() {
  const { products } = useContext(GlobalContext);
  const [List, setList] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const applyFilter = () => {
    let updatedList = products;

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
  };

  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
