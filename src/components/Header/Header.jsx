import React from 'react'
import logo from "./icon.jpeg"
import '../.././styles/Header.css';
import svg from "./shopping-cart-solid.svg"

const Header = () => {
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
                <img src={svg} className="svg" />
            </div>
        </nav>
    )
}

export default Header
