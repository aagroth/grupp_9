import React, { useState, useEffect } from 'react'
/* import { Link } from 'react-router-dom' */
import ProductsChild from '../components/ProductsChild';
import Styling from './Products.module.css'



function Products() {
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

  return (
      <div id={Styling.parentArticle}>
      {productList.map(products => <ProductsChild key={products.id} products={products} />
      )}
          

    </div>
  )
}
export default Products



/* 
<header>
        <button> Go to CART {cart.length}</button>
      </header>
      




      <img src={products.url} alt={products.title}></img>
          <p className={Styling.pClass}>{products.title} </p>
          <p className={Styling.pClass}>{products.price} :- </p>

          <Link to={`/products/${products.id}`}><button className={Styling.addToCartBtn}>Read more .. </button></Link>
          <button className={Styling.addToCartBtn}> ADD TO CART </button>
        </article>
      
      */