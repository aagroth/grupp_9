import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Styling from './Products.module.css'

function Products() {

  const [productList, setProductList] = useState([]);

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

  function addToCart() {
    alert('ADDED TO CART')
  }

  return (
    <div id={Styling.parentArticle}>
      {
        productList.map((products) => (
          <article key={products.id}>
            <img src={products.url} alt={products.title}></img>
            <p>{products.title} </p>
            <p>{products.price} :- </p>
            <br />
            <Link to={`/products/${products.id}`}><button>Till produkt</button></Link>
            <br />
            <button onClick={addToCart}> ADD TO CART </button>
          </article>

        ))}

    </div>
  )
}
export default Products
