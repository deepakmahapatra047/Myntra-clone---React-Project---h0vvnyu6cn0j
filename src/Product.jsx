import React from 'react'
import "./Product.css"
import data from "./data"
import Card from "./Card"
import { useState } from 'react'


const Filter = ({setProductData}) => {

   

    function handleRadio(e){
        if(e.target.value=="Male"){
          setProductData(()=>{
            return [...data].filter((item)=>{
                return item.gender==="M";
            })
          })
        }
        if(e.target.value=="Female"){
            setProductData(()=>{
                return [...data].filter((item)=>{
                    return item.gender==="F";
                })
            })
         }
    }

    function handleOnChange(e){
        if(e.target.checked && e.target.name=='white'){
            setProductData(()=>{
                return [...data].filter((item)=>{
                    return item.cat==="W";
                })
            })
        if(e.target.checked && e.target.name=='folded-sleeves'){
            setProductData(()=>{
                return [...data].filter((item)=>{
                    return item.cat==="";
                })
            })
        }
    }
    }

    return (
        <div className='filter-container'>
            <div className='gender'>
                <p>Gender :-</p>
                <input type="radio" value="Male" name="gender" onChange={handleRadio} /> Male <br />
                <input type="radio" value="Female" name="gender" onChange={handleRadio}/> Female
            </div>

            <div className='dress-category'>
                <p>Categories :-</p>
                <input type="checkbox" value="white" name='white'  onChange={handleOnChange}/> White <br/>
                <input type="checkbox" value="folded-sleeves" name='folded-sleeves'  onChange={handleOnChange}/> Folded Sleeves 

            </div>
        </div>
    )
}


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
            <Filter  setProductData={setProductData}/>
            <div>
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
        </div>
    )
}

export default Product
