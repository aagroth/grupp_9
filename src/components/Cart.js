import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Cart.module.css'


function Cart({ tasks, setTasks }) {
  const [disable, setDisable] = useState(false);
  const [showShoppingBag, setShoppingBag] = useState(true)


  const deleteAllBtn = () => {
    setTasks([])
  }




  return (
    <div className={Styling.Dropdown}>
      <FaShoppingBasket onClick={() => setShoppingBag(!showShoppingBag)} className={Styling.showShoppingBag} />

      {
        showShoppingBag
          ? tasks.map(task => (
            <div className={Styling.cartList}
              key={task.id}>
              <img className={Styling.picList} src={task.img} alt={task.title}></img>
              { } {task.title} { }
              <p style={{ fontWeight: 'bold' }}>
                {task.price} :-
              </p>
            </div>))
          : <div className={Styling.cartList}>{tasks.length === 0 && <div> Cart is empty! </div>}</div>
      }
    </div>
  )
}
export default Cart

/*
 {}
count === 0
                  ? ""
                  : <button disabled={false} onClick={() => setCount(count - 1)}> - </button>
              }
              
              
              */