import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <div>
      
      <nav>
        <Link to="/">Products</Link> / <Link to="/Checkout">Checkout</Link>
      </nav>
    </div>
  )
}

export default Cart