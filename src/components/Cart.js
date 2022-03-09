import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Cart.module.css'
import { Link } from 'react-router-dom'

function Cart({ tasks, setTasks }) {
  const [showShoppingBag, setShoppingBag] = useState(true)


  const deleteBtn = (id) => {
    let arr = []
    tasks.forEach((item) => {
      if (item.id != id) {
        arr.push(item)
      }
    })
    setTasks(arr)
    console.log(arr)
  }

  let totalSum = 0;

  const productSum = () => {
    tasks.forEach((item) => {
      totalSum += item.price * item.qty
    })
  }

  productSum();

  const minusBtn = (id) => {
    const newTasks = [...tasks]
    const found = newTasks.find(task => task.id === id)
    console.log(found)
    if (found != undefined && found.qty > 1) {
      found.qty -= 1
      setTasks(newTasks)
    }
    console.log(newTasks)
  }
  // 
  const plusBtn = (id) => {
    const newTasks = [...tasks]
    const found = newTasks.find(task => task.id === id)
    console.log(found)
    if (found != undefined) {
      found.qty += 1
      setTasks(newTasks)
    }
    console.log(newTasks)
  }



  const deleteAllBtn = () => {
    setTasks([])
  }


  console.log(tasks)

  return (
    <div className={Styling.Dropdown}>
      {/* toggle effekt mellan showshopping bag och att den inte visas */}
      <FaShoppingBasket onClick={() => setShoppingBag(!showShoppingBag)} className={Styling.showShoppingBag} />

      {
        showShoppingBag /* ternary där den visas/ inte visas TOGGLE */
          ? <div className={Styling.listlist}>
            {tasks.map(task => (
              <span className={Styling.cartList}
                key={task.id}>
                <img className={Styling.picList} src={task.img} alt={task.title}></img>
                <p className={Styling.titleList}>{task.title}</p>
                <p className={Styling.priceTag}>{task.price} :-</p>
                
                <br/>
                <button className={Styling.minusBtn} onClick={() => minusBtn(task.id)}>-</button>
                <p className={Styling.qty}>{task.qty}</p>
                <button className={Styling.plusBtn} onClick={() => plusBtn(task.id)}>+</button>
                <button className={Styling.deleteBtn} onClick={() => deleteBtn(task.id)}>Delete</button>
                

              </span>
            ))}
            <div className={Styling.totalContainer}> {/* container för knapparna längst ner i cart samt total summa */}
              <p> Summa {totalSum}:-</p>
              <Link to="/Checkout"><button className={Styling.toCheckout}>Checkout </button></Link>
              <button onClick={deleteAllBtn} className={Styling.deleteAllBtn}> Delete all </button>
            </div>
          </div>

          : null /* TOGGLE = där den inte visas, visas null */
      }

    </div>
  )
}
export default Cart