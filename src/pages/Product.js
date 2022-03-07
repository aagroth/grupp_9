import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Product() {
  
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

  useEffect( () => {
    fetchData();
}, []);
  
  return (
<div>
      <h1>A specific product with id {params.id}</h1>
      <img src={product.url} alt={product.title}></img>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.storage}</p>
      <button>Add to cart</button>
    </div> 
  )
}

export default Product