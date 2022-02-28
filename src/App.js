import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './pages/Product'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
      <Routes>
        <Route path="/products/:id" element={<Product />} />
      </Routes>

     </BrowserRouter>

     <Footer />
    </div>
  );
}

export default App;
