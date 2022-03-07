import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <div>
      {<Link to={`/products/${product.id}`}><h1>{product.title}</h1></Link>}
      
    </div>
    
  )
}

export default Product