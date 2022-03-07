import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Styling from './Product.module.css'

function Product(props) {
  
  const [product, setProduct] = useState([]);
  const params = useParams();

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

const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
      id: product.id,
      img: product.url,
      title: product.title,
      price: product.price
    }
  props.addProduct(newProduct);
  console.log(newProduct)
}
  
  return (
<div className={Styling.productCard} >
    
    <div className={Styling.imgContainer}>
      <img src={product.url} alt={product.title}></img>
    </div>

    <div className={Styling.infoContainer}>
      <table className={Styling.productInfo}>
      <tbody>  
        <tr className={Styling.innerContainer}>
        <th>Product:</th>
          <td>{product.title}</td>
        </tr>
        <tr>
          <th>Price:</th>
          <td>{product.price}:-</td>
        </tr>
        <tr>
          <th>Stock:</th>
          <td>{product.storage}</td>
        </tr>
        </tbody>   
      </table>

      <details className={Styling.detailInfo}>
        <summary>Product Info</summary>
        <p>{product.description}</p>
      </details>

      <form onSubmit={handleSubmit} className={Styling.quantityContainer}>
        <input type="number" placeholder="Quantity"></input>
        <button className={Styling.submitBtn}>ADD TO CART</button>
      </form>
    </div>
  </div> 
  )
}

export default Product