import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  const [tasks, setTasks] = useState([]); //tom lista för varukorg

  const newProduct = {
    id: Products.url,
    img: Products.url,
    title: Products.title,
    price: Products.price
  }

  
  setTasks([
    ...tasks, //en syssla i taget
    newProduct
  ])


  return (
    <div className="App">
      <BrowserRouter>
        <Header tasks={tasks} setTasks={setTasks} />


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
