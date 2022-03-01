import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Styling from './Products.module.css'

function Products() {
  const [cart, setCart] = useState([]); // tom tills du trycker på ADD TO CART
  const [productList, setProductList] = useState([]); //befinliga med API

  
  const fetchData = async () => {
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





   const addToCart = (products) => {
    setCart([...cart, products]);

    console.log('we are in addtocart');
    console.log(cart)
  };



  return (
    <div id={Styling.parentArticle}>
      {productList.map((products) => (
          <article key={products.id}>
            <img src={products.url} alt={products.title}></img>
            <p className={Styling.pClass}>{products.title} </p>
            <p className={Styling.pClass}>{products.price} :- </p>

            <Link to={`/products/${products.id}`}><button className={Styling.addToCartBtn}>Read more .. </button></Link>
            <button className={Styling.addToCartBtn} onClick={() => addToCart(products)}> ADD TO CART </button>
          </article>
        ))}
    </div>
  )
}
export default Products



/* 
<header>
        <button> Go to CART {cart.length}</button>
      </header>
      
      
      */