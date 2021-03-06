import React, { useState, useEffect } from 'react'
import Styling from './Products.module.css'
import ProductsChild from '../components/ProductsChild';


function Products(props) {
  const [productList, setProductList] = useState([]); //befinliga med API


  const fetchData = async () => { /* hämtar API och spara i productList */
    try {
      const response = await fetch('https://codexplained.se/sportstuff.php');
      const data = await response.json();
      setProductList(data);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
      <div id={Styling.parentArticle}> {/* mapa genom productList och skicka vodare innehållet till productChild */}
      {productList.map(products => <ProductsChild key={products.id} products={products} addProduct={props.addProduct} count={props.count} setCount={props.setCount}  />
      )}
    </div>
  )
}
export default Products

/* 
<header>
        <button> Go to CART {cart.length}</button>
      </header>
      
      
      
      */