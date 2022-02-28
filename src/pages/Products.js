import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { useNavigate } from 'react-router-dom';



function Products() {

  const navigate = useNavigate();
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


  const addToCart = () => {
  navigate('/Nav') //ska läggas till i en tom array i nav????
}

const toProduct = () => {
/*     if (products.id === products.id){
      {products.title} {products.description} {products.price} {products.storage}
      navigate('/Product');
    } else{
      alert: "Sorry, this item is unavailable."
    }  */
navigate('../pages/Product');
  }

return (
  <div id="parentArticle">
    {
      productList.map((products) => (
        <article key={products.id}>
          <img src={products.url} alt={products.title}></img>
          <h3> {products.title} </h3>
          <p>{products.price} :- </p>
          <button onClick={toProduct}> Show more ... </button>
          <br />
          <button onClick={addToCart}> ADD TO CART </button>
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