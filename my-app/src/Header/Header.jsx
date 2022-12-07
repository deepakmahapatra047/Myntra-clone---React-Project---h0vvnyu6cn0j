import React from 'react'
import logo from "./icon.jpeg"
import ".././Header.css"
import svg from "./shopping-cart-solid.svg"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

    const state= useSelector((state) =>  console.log("state",state))
   
  
    return (
        <nav className='container'>
            <div className='left'>
                <img src={logo} className="icon-holder" />
                <div className='category'>
                    <h3>Men</h3>
                    <h3>Women</h3>
                    <h3>Kid</h3>
                </div>

            </div>
            <div className='middle'>
                <input className="search-input" placeholder='Search your product here' />
            </div>
            <div className='right'>
                <NavLink to="/cart">
                <button className='cart-btn'>
                <img src={svg} className="svg" />
                {/* <span style={{fontSize:"20px",fontWeight:"bolder"}}>({state.length})</span> */}
                </button>
                </NavLink>
                
            </div>
        </nav>
    )
}

export default Header
