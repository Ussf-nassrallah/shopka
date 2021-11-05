import React from "react";
import "./Product.scss";

function Product({ product }) {
    function productRating(num) {
        let stars = [];

        for (let index = 0; index < num; index++) {
            stars.push(index);
            stars[index] = "⭐";
        }

        if (stars.length > 5) {
            stars.length = 5;
        } else if (stars.length < 0) {
            stars.length = 0;
        }

        return stars.map((star, ind) => (
            <p key={ind} className="product__rating">
                {star}
            </p>
        ));
    }

    return (
        <div className="product">
            <div className="product__img">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="product-info">
                <span className="product__category">{product.category}</span>
                <h3 className="product__title">{product.title}</h3>
                <p className="product__price">${product.price}</p>
                <div className="stars">{productRating(product.rating)}</div>
            </div>
        </div>
    );
}

export default Product;
