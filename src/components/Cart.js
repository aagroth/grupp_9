import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {

  return (
    <nav>
      <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
    </nav>
  )
}

export default Cart