import React from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'

function ProductsChild(props) {
     

 const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <article>
                <img src={props.products.url} alt={props.products.title}></img>
                <p className={Styling.pClass}>
                    {props.products.title}
                </p>
                <p className={Styling.pClass}>
                    {props.products.price} :-
                </p>
                <form onSubmit={handleSubmit}>
                    <Link to={`/products/${props.products.id}`}><button className={Styling.addToCartBtn}>Read more .. </button></Link>
                    <button className={Styling.addToCartBtn}> ADD TO CART </button>
                </form>
            </article>
        </div>
    )
}

export default ProductsChild