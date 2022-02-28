import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'



function Products() {
  /*   const [add, setAddToCart] = useState([]); */
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



  /*   const handleChange = (e) => {
      setAddToCart(e.target.value);
    } */


  function addToCart() {
    alert('ADDED TO CART')
  }

  function toProduct () {

    console.log(Product)
  }


  return (
    <div>
      {/*       <nav>
        <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
      </nav> */}

      <h1>Product List: </h1>
      {
        productList.map((products) => (
          <article key={products.id}>
            <p> TITLE - {products.title} </p>
            <p>ID - {products.id}</p>
            <p>DESCRIPTION - {products.description}</p>
            <p>PRICE - {products.price}</p>
            <p>STORAGE - {products.storage}</p>
            <button onClick={addToCart}> ADD TO CART </button>
            <button onClick={toProduct}> Visa mer... </button>
          </article >

        ))}

    </div>
  )
}
export default Products


/* productList.map((products) => (
  <article id="card">
    key = {products.id}
    TITLE - {products.title}
    ID - {products.id}
    DESCRIPTION - {products.description}
    PRICE - {products.price}
    STORAGE - {products.storage}
  </article >  */

/*
const handleSubmit = (e) => {
  e.preventDefault();

    const addToCartList = {
     id: id,
     title: title,
     description: description,
     price: price,
     storage: storage
   }
   AddToCartBtn(addToCartList) 
} */