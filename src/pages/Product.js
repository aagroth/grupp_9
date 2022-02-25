import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ProductComponent from '../components/Product'

function Product() {
  
  const [product, setProduct] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch('https://codexplained.se/sportstuff.php' + params.id);
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
      <ProductComponent product={product} />
    </div>
  )
}

export default Product