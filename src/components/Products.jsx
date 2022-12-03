import React from 'react'
import '../styles/Product.css';

const Products = () => {
    return (
        <div className='product'>
            <div className='sort-option'>
            <span>Sort by :-</span>
                <select>
               
                    <option value="fruit">Fruit</option>

                    <option value="vegetable">Vegetable</option>

                    <option value="meat">Meat</option>

                </select>
            </div>
            <div className='prod-div'>
                <h1>Items</h1>
            </div>
        </div>
    )
}

export default Products
