import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Cart.module.css'
import { Link } from 'react-router-dom'


function Cart({ tasks }) {
  const [showShoppingBag, setShoppingBag] = useState(true)

  const deleteAll = () => {
  }


  return (
    <div className={Styling.Dropdown}>
      <FaShoppingBasket onClick={() => setShoppingBag(!showShoppingBag)} className={Styling.showShoppingBag} />
        <div className={Styling.shoppinBagTwo}> {showShoppingBag.length} </div>
        
      {
        showShoppingBag
          ? tasks.map(task => (
            <div className={Styling.cartList} key={task.id}>
              <img className={Styling.picList} src={task.url} alt={task.title}></img>
              {task.title}{task.price} :-
              <span className={Styling.toCheckout}>
                <br />
                <Link to="/Checkout">Go to checkout</Link>    <button className={deleteAll}> DELETE </button>
              </span>
              </div>))
          : null
        }
    </div >
  )
}
export default Cart