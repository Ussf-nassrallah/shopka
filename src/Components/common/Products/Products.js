import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import Product from '../../Product/Product'
import './Products.scss'

function Products() {
    const { products } = useContext(GlobalContext);

    return (
        <section className="products">
            {
                products.map(product => <Product key={product.id} product={product} />)
            }
        </section>
    )
}

export default Products
