import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Card.css"


const Card = ({image,name,description,finalPrice,strickPrice,discount,id}) => {
  return (
    <div className="single-card" >
      <NavLink to={`/${id}`}>
      <img src={image} className="single-card-img"/>
      </NavLink>
      <h5>{name}</h5>
      <span className='single-prod-descrip'>{description}</span>
      <span className='single-price'>
       <p>Rs.{finalPrice}</p> 
       <p className='strickPrice'>{strickPrice}</p> 
       <p className='discount'>{discount} % OFF</p> 
        </span>

    </div>
  )
}

export default Card
