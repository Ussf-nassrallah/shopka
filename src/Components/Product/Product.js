import React from 'react'
import './Product.scss';

function Product({product}) {
    function productRating(num) {
        for (let index = 0; index <= num; index++){
            return <span className="product__rating">⭐</span>
        }
    }

    console.log(productRating(product.rating))

    return (
        <div className="product">
            <div className="product__img">
                <img src={product.img} alt={product.title} />
            </div>
            <h3 className="product__title">{product.title}</h3>
            <p className="product__price">${product.price}</p>
            <div>{productRating(product.rating)}</div>
        </div>
    )
}

export default Product
