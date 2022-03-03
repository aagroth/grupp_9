import React from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'

function ProductsChild(props) {
  return (
    <div>
        <article> 
        <img src={props.products.url} alt={props.products.title}></img>
        <p className={Styling.pClass}>  
            {props.products.title}{props.products.price}
        </p>
            
            <Link to={`/products/${props.products.id}`}><button className={Styling.addToCartBtn}>Read more .. </button></Link>
          <button className={Styling.addToCartBtn}> ADD TO CART </button>
        </article>
    </div>
  )
}

export default ProductsChild