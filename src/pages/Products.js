import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    <div>

      <h1>Product List:</h1>
      {
        productList.map((products) => (
          <article key={products.id}>
            <p>TITLE - {products.title} </p>
            <p>ID - {products.id}</p>
            <p>DESCRIPTION - {products.description}</p>
            <p>PRICE - {products.price}</p>
            <p>STORAGE - {products.storage}</p>
            <button onClick={addToCart}> ADD TO CART </button>
            <Link to={`/products/${products.id}`}><button>Till produkt</button></Link>
          </article>

        ))}

    </div>
  )
}
export default Products