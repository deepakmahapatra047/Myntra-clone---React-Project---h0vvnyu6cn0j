import React from 'react'
import '../styles/App.css';
import data from '../../data';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Products from './Products';

const App = () => {

  return (
    <div id="main"> 
    <>
    <Header/>
    <div className='body-container'>
      <Filter/>
      <Products/>
    </div>

    </>
     
      
    </div>
  )
}


export default App;
