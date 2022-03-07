import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Cart.module.css'

function Cart({ tasks }) {

 const showShoppingBag = () => {
  if (tasks.length === 0){
    
    console.log("TOOOOM")
  } 
  else if (tasks.length > 0 ){
      tasks.map(task => (
      <div className={Styling.cartList} key={task.id}> 
      <img className={Styling.picList} src={task.url} alt={task.title}></img>
      {task.title}{task.price} :- 
      </div>))
  }

  } 
  console.log(tasks)


  return (
    <div className={Styling.Dropdown}>
      <FaShoppingBasket onClick={showShoppingBag} className={Styling.showShoppingBag}/>
        {/* {
          tasks.map(task => (
          <div className={Styling.cartList} key={task.id}> 
          <img className={Styling.picList} src={task.url}></img>
          <p>{task.title} </p>
          <p>{task.price} :- </p>
          </div>))
        } */}
    </div>
  )
}

export default Cart