import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Cart.module.css'


function Cart({ tasks }) {
  const [showShoppingBag, setShoppingBag] = useState (true)

  

    return (
      <div className={Styling.Dropdown}>
        <FaShoppingBasket onClick={()=> setShoppingBag(!showShoppingBag)} className={Styling.showShoppingBag} />
        {
          showShoppingBag
          ?tasks.map(task => (
            <div className={Styling.cartList} key={task.id}>
              <img className={Styling.picList} src={task.img} alt={task.title}></img>
              {} {task.title} {} 
              <p style={{fontWeight: 'bold'}}>
              {task.price} :-
              </p>
            
            </div> ))
          :null
          
        }
        
      </div>
    )
  }
  export default Cart