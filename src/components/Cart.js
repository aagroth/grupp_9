import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart(props) {
  const [cartItems, setCartItem] = useState([]);
const {cartItems} = props;

  return (
    <div>
      {cartItems.length === 0 && <div> Cart is empty!</div>}
      <nav>
        <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
      </nav>
    </div>
  )
}

export default Cart