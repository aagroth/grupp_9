import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Header.module.css'


function Header() {
    const cartList = [];

    return (
        <nav>
            <div className={Styling.nav_box}>
                <span className={Styling.links}>
                    <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
                </span>
                <div>
                    <span className={Styling.one}>
                        <FaShoppingBasket />
                    </span>
                    <span className={Styling.two}>
                        0
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header