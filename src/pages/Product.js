import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Styling from './Product.module.css'

function Product(props) {
  // Array för hämtade produkter från API
  const [product, setProduct] = useState([]);
  const params = useParams();
  
  // Sätter startvärdet för quantity till 1
  let qty = 1

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/sportstuff.php' + "?id=" + params.id);
      const data = await response.json();
      console.log(data)

      setProduct(data);
    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, [] );

  // Vid klick av handleSubmit sparas nedanstående värden och skickas upp till AddProduct i App.js
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
        id: product.id,
        img: product.url,
        title: product.title,
        price: product.price,
        // qty hämtas med hjälp av id från inputfältet och tvingas spara värdet till en INT med hjälp av parse
        qty: parseInt(document.getElementById(product.id + "-quantity").value)
      }
    props.addProduct(newProduct);
    console.log(newProduct)
    qty = 1;
  }
  
return (
  <div className={Styling.productCard} >
    
    <div className={Styling.imgContainer}>
      <img src={product.url} alt={product.title}></img>
    </div>

    <div className={Styling.infoContainer}>
     
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>{product.price}:-</h3>
      <h4>Available in stock: {product.storage}</h4>

      <form onSubmit={handleSubmit} className={Styling.quantityContainer}>
        <input type="number" defaultValue={qty} className={Styling.inputField} id={product.id + '-quantity'}></input>
        <button className={Styling.submitBtn}>Add to cart</button>
      </form>
    </div>
    
  </div> 
  )
}

export default Product