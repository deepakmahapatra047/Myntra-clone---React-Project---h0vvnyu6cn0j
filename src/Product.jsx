import React from 'react'
import "./Product.css"
import data from "./data"
import Card from "./Card"
import { useState } from 'react'


const Product = () => {

    const [productData, setProductData] = useState(data)

    const handleChange = (e) => {

        if (e.target.value == "What-new") {
            setProductData(data)
        }

        if (e.target.value == "price-low-to-high") {
            setProductData(() => {
                return [...data].sort((a, b) => (a.finalPrice - b.finalPrice))
            })
           
        }
        if (e.target.value == "better-discounts") {
            setProductData(() => {
                return [...data].sort((a, b) => (b.discount - a.discount))
            })
        }

    };
    
    return (
        <div className='product-container'>
            <span>Sort by :-
            <select  onChange={handleChange}>

                <option value="What-new">What's new</option>

                <option value="price-low-to-high">Price low to high</option>

                <option value="better-discounts">Better discounts</option>

            </select>
            </span>
          
            <div className='product-list'>
                    {
                        productData.map((prod,id)=>{
                            return <Card image={prod.otherImages[0]} name={prod.name}    
                            description={prod.description} finalPrice={prod.finalPrice} 
                            strickPrice={prod.strickPrice}
                            discount={prod.discount} id={id}
                            />
                        })
                    }
            </div>
        </div>
    )
}

export default Product
