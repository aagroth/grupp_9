import React, { useState } from 'react'
import Styling from './Checkout.module.css'

function Checkout(props) {

  /* const [checkoutItems, setCheckoutItems] = useState(tasks);
  console.log(checkoutItems)
 */

  const deleteAllBtn = () => {
    props.setTasks([])
  }

  const orderBtn = () => {
    props.setTasks([])
    alert("Order sent!")
  }

  const deleteBtn = (id) => {
    let arr = []
    props.tasks.forEach((item) => {
      if (item.id != id) {
        arr.push(item)
      } 
    })
    props.setTasks(arr) 
  }

  return (
  <div> 

  {props.tasks.map((checkoutItem) => (
    <div key={checkoutItem.id} className={Styling.productContainer}>
    
    <img src={checkoutItem.img} alt={checkoutItem.title} className={Styling.imgStyling}></img>
  
    <table>    
    <tbody>
      <tr>
        <th className={Styling.textHeader}>Product</th>
        <th className={Styling.textHeader}>Quantity</th>
        <th className={Styling.textHeader}>Price</th>
      </tr>
    
      <tr>
        <td className={Styling.textContainer}>{checkoutItem.title}</td>
        <td className={Styling.qtyContainer}>
        <button className={Styling.minusBtn}>-</button>
        <p>{checkoutItem.qty}</p>
        <button className={Styling.plusBtn}>+</button>
        </td>
        <td>{checkoutItem.price}:-</td>
      </tr>
      </tbody>
    </table>
    <button className={Styling.deleteBtn} onClick={()=>deleteBtn(checkoutItem.id)}>Delete</button>
    </div>
  ))}
  
  <hr />
  
  <div className={Styling.totalContainer}>
  <table>
    <tbody>
    <tr>
      <th>Summa</th>
      <td>100</td>
    </tr>
    <tr>
      <th>Frakt</th>
      <td>0</td>
    </tr>
    <tr>
      <th>Total</th>
      <td>100</td>
    </tr>
    </tbody>
  </table>
  </div>
    
    <div className={Styling.btnContainer}>
    <button onClick={deleteAllBtn} className={Styling.deleteAllBtn}>Delete all</button>
    <button onClick={orderBtn} className={Styling.orderBtn}>Place order</button>
    </div>

  </div>
  )
}

export default Checkout