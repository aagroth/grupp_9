import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'
import { motion } from 'framer-motion'

function ProductsChild(props) {

let qty = 1

 const handleSubmit = (e) => {
        e.preventDefault();
            const newProduct = {
                id: props.products.id,
                img: props.products.url,
                title: props.products.title,
                price: props.products.price,
                qty: parseInt(document.getElementById(props.products.id + "-quantity").value)
            }
        props.addProduct(newProduct);
        qty = 1;
    }
    
    return (
        <div>
            <article className={Styling.cardStyle}>
                <img src={props.products.url} alt={props.products.title}></img>
                <p className={Styling.pClass}>
                    {props.products.title}  
                    <br/>
                    {props.products.price} :-
                </p>
                <Link to={`/products/${props.products.id}`}><motion.button whileTap={{scale: 0.7}} className={Styling.addToCartBtn}>Read more .. </motion.button></Link>
                
                <form onSubmit={handleSubmit}>
                <input type="number" defaultValue={qty} className={Styling.inputField} id={props.products.id + '-quantity'}></input>
                <motion.button whileTap={{scale: 0.8}} className={Styling.addToCartBtn} > Add to cart </motion.button>
                
                </form>

            </article>
        </div>
    )
}

export default ProductsChild


/* 

onClick={() => props.setCount(props.count + 1)} 

*/