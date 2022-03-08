import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'
import { motion } from 'framer-motion'

function ProductsChild(props) {

 const handleSubmit = (e) => {
        e.preventDefault();
            const newProduct = {
                id: props.products.id,
                img: props.products.url,
                title: props.products.title,
                price: props.products.price
            }
        props.addProduct(newProduct);
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
                <motion.button whileTap={{scale: 0.8}} className={Styling.addToCartBtn} > ADD TO CART </motion.button>
                
                </form>

            </article>
        </div>
    )
}

export default ProductsChild


/* 

onClick={() => props.setCount(props.count + 1)} 

*/