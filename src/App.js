import './App.css';
import React from 'react';
/* import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Product from './pages/Product' */
import Products from './pages/Products';
import ProductList from './components/ProductList';



function App() {
  return (
    <div className="App">
{/*      <BrowserRouter>
      <Routes>
        <Route path="/products/:id" element={<Product />} />
      </Routes>
     </BrowserRouter> */}


<Products />
<ProductList />

     
    </div>
  );
}

export default App;
