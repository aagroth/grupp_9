import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../pages/Products'
import { FaShoppingBasket } from 'react-icons/fa'


function Header() {
    const cartList = [];

    return (
        <nav>
            <div className="nav_box">
                <span className='my_box'>
                    <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
                </span>
                <div className="cart">
                    <span className='cart one'>
                        <FaShoppingBasket />
                    </span>
                    <span className='cart two'>
                        0
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header