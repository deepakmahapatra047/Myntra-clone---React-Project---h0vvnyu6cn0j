import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Home from "./Home";

function App() {
  return (
    <>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
      
      
    </>

  );
}

export default App;
