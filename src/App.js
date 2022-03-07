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


  const addProduct = (newProduct) => {
  setTasks([
    ...tasks, //en syssla i taget
    newProduct
  ]);
}


  return (
    <div className="App">
      <BrowserRouter>
        <Header tasks={tasks} setTasks={setTasks} addProduct={addProduct} />
        <Routes>
          <Route path="/products/:id" element={<Product addProduct={addProduct} />} />
          <Route path="/" element={<Products addProduct={addProduct} />} />
          <Route path="/Checkout" element={<Checkout tasks={tasks} setTasks={setTasks} addProduct={addProduct} />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
