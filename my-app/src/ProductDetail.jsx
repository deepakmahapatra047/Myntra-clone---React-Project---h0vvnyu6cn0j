import React from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'
import data from "./data"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from "./redux/actions/index"
import { useSelector } from 'react-redux'


const ProductDetail = () => {

  const state= useSelector((state) => console.log("state",state))


  const prodId = useParams()
  const prodDetail = data.filter((item, id) => id == prodId.id)
  const product = prodDetail[0]


  const [cartBtn, setCartBtn] = useState("Add to cart")
  const dispatch = useDispatch()

  console.log("dispatch",dispatch(addItem(product)))

  const handleCart = (product) => {
    if (cartBtn == "Add to cart") {
      dispatch(addItem(product))
      setCartBtn("Remove from cart")
    } else {
      dispatch(delItem(product))
      setCartBtn("Add to cart")
    }
  }


  return (
    < div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className='prod-photo'>
        <img src={product.otherImages[0]} />
        <img src={product.otherImages[1]} />
        <img src={product.otherImages[2]} />
        <img src={product.otherImages[3]} />
      </div>


      <div className='prod-modal'>
        <div className='prod-detail'>
          <h3 style={{ marginBottom: "20px" }}>{product.name}</h3>
          <em>{product.description}</em>
          <p>Rs.{product.finalPrice}</p>
          <p style={{ textDecoration: "line-through" }}>Rs.{product.strickPrice}</p>
          <strong style={{ color: "red" }}>{product.discount} %OFF</strong>
          <p>Size chart</p>
          <span className='prod-size'>
            <span>{product.productSize.slice(0, 2)}</span>
            <span>{product.productSize.slice(4, 6)}</span>
            <span>{product.productSize.slice(8, 10)}</span>
            <span>{product.productSize.slice(12, 14)}</span>
          </span>
        </div>

        <button onClick={()=>handleCart(product)} className='cartBtn'>
          {cartBtn}
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
