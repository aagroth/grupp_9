import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path="/products/:id" element={<Product />} />
            <Route path="/" element={<Products />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
