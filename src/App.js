import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // Listan tasks innehar produkterna som ska visas i Checkout och Cart
  // Med hjälp av funktionerna i både Checkout och Cart så manipuleras sedan listan.
  const [tasks, setTasks] = useState([]); 

  // funktion som går först går igenom så att produkt för att se ifall den redan existerar i listan tasks
  // Existerar produkten så läggs endast antalet(qty) till på befintlig produkt. Annars skapas en ny.
  const addProduct = (newProduct) => {
    const found = tasks.find(task => task.id === newProduct.id)
    if (found === undefined) {
      setTasks([
        ...tasks, // En produkt i taget
        newProduct
      ]);
    } else {
      found.qty += newProduct.qty
    }
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
