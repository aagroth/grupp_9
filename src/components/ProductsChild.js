import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styling from './ProductsChild.module.css'

function ProductsChild(props) {
    const [tasks, setTask] = useState([]); //tom lista för varukorg

 const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct={
            /* id: Math.random() * 1000, */
            img: props.products.url,
            title: props.products.title,
            price: props.products.price
        }
        setTask([   
            ...tasks, //en syssla i taget
            newProduct
        ])
        console.log("vi är i handleSubmit-> newProduct");
        console.log(newProduct)
        console.log(tasks)
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