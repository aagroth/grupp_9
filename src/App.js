import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import Products from './pages/Products';
/* import Cart from './components/Cart'; */
import Nav from './components/Nav';
import Checkout from './pages/Checkout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products/:id" element={<Product />} />
          <Route path="/" element={<Products />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
