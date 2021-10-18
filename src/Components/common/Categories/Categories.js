import { React, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import Category from '../../Category/Category';
import './Categories.scss';

const Catygories = () => {
    const { categories } = useContext(GlobalContext);

    return (
        <div className="container hide-for-mobile">
            <div className="categories">
                {
                    categories.map(category => <Category
                        key = {category.id}
                        iconSrc = {category.iconSrc}
                        name = {category.name}
                    />)
                }
            </div>
        </div>
    )
}

export default Catygories