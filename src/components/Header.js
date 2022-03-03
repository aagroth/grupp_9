import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Header.module.css'
import cart from '../pages/Products'


function Header() {

    return (
        <nav>
            <div className={Styling.nav_box}>
                <span className={Styling.links}>
                    <Link to="/">Products</Link>     <Link to="/Checkout">Checkout</Link>
                </span>
                 <div>
                    <span className={Styling.shoppingBagOne}>
                        <FaShoppingBasket />
                    </span> 
                    <span className={Styling.shoppinBagTwo}>
                        {cart.length}
                    </span>
                </div> 
            </div>
        </nav>
    )
}

export default Header


/* 
  const addToCart = (products) => {
    setCart([...cart, products]);
    console.log(cart)
  };
  
  <button className={Styling.addToCartBtn} onClick={() => addToCart(products)}> ADD TO CART </button>
  
  
  
  */