import React from 'react'
import Filter from "./Filter"
import Product from "./Product"


const Home = () => {
  return (
    <>
      <div className="App">
        <Filter/>
        <Product />
      </div>
    </>
  )
}

export default Home
