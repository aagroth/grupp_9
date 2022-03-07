import React from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'
import { motion } from 'framer-motion'
import Cart from './Cart'



function ProductsChild(props) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: props.products.id,
            img: props.products.url,
            title: props.products.title,
            price: props.products.price,
            //quantity: e.target.value
        }
        props.addProduct(newProduct);
        console.log(newProduct)
    }


return (
    <div>
        <Cart /* removeFromCart={props.removeFromCart} */ tasks={props.tasks}/>
        <article>
            <img src={props.products.url} alt={props.products.title}></img>
            <p className={Styling.pClass}>
                {props.products.title}
            </p>
            <p className={Styling.pClass}>
                {props.products.price} :-
            </p>
            <form onSubmit={handleSubmit}>
                <input type="number" id="quantity" placeholder="Quantity .." min="1"></input>
                <Link to={`/products/${props.products.id}`}><motion.button whileTap={{ scale: 0.7 }} className={Styling.addToCartBtn}>Read more .. </motion.button></Link>
                <motion.button whileTap={{ scale: 0.8 }} className={Styling.addToCartBtn}> ADD TO CART </motion.button>
            </form>
        </article>
    </div>
)
}

export default ProductsChild