import React, { useState, useEffect } from 'react'
/* import ProductList from '../components/ProductList'; */
import AddToCartBtn from '../components/AddToCartBtn';


function Products() {
/*   const [add, setAddToCart] = useState([]); */

  const [productList, setProductList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/sportstuff.php');
      const data = await response.json();
      console.log(data);
      setProductList(data);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchData();
  }, [])





/*  const handleChange = (e) => {
      setAddToCart(e.target.value);
  } */




/*   const handleSubmit = (e) => {
    e.preventDefault();

    const addToCartList ={
      id: id,
      title: title,
      description: description,
      price: price,
      storage: storage
    }
    AddToCartBtn(addToCartList)
  } */
  



  return (
    <div>
      <h1>Product List: </h1>
      {

        productList.map((products) => (
          <article id="card">
           <p> key - {products.id} </p>
           <p> TITLE - {products.title}</p>
           <p> ID - {products.id}</p>
           <p> DESCRIPTION - {products.description}</p>
           <p> PRICE - {products.price}</p>
           <p> STORAGE - {products.storage}</p>

{/*             <form onSubmit={handleSubmit}>
              <input type="text" value={add} onChange={handleChange} />
              <button> ADD TO CART </button>
            </form> */}
          </article >
        ))
      }


    </div >
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
  </article > */