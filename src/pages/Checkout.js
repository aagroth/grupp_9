import React, { useState } from 'react'
import Styling from './Checkout.module.css'
import { Link } from 'react-router-dom'

function Checkout(props) {

  // Tömmer hela listan "tasks" i app.js med hjälp av att den ersätter den 
  // gamla listan med en ny tom array, genom setTasks.
  const deleteAllBtn = () => {
    props.setTasks([])
  }

  // Gör samma som deleteAllBtn funktionen
  const orderBtn = () => {
    props.setTasks([])
    alert("Order sent!")
  }

  // Tar in id från checkoutItems och loopar igenom listan tasks från App.js.
  // Sedan jämförs id från checkoutItems med id från tasks.
  // Matchas id så tas produkten bort från listan "tasks" i App.js
  const deleteBtn = (id) => {
    let arr = []
    props.tasks.forEach((item) => {
      if (item.id != id) {
        arr.push(item)
      } 
    })
    props.setTasks(arr) 
    console.log(arr)
  }
  // Om inga produkter är tillagda i listan "tasks" så är totalSum 0
  let totalSum = 0;
  
  // Loopar igenom produkt för produkt och gångrar pris med qty och ger ut värdet till totalSum
  const productSum = () => {
    props.tasks.forEach((item) => {
      totalSum += item.price * item.qty 
    })
  }

  productSum();

  // Går in i tasks, sedan jämförs lokala idt(task) med id från tasks.
  // Ifall idt matchar så tas 1 bort från qty.
  // I if-satsen så tvingar även funktionen att värdet måste vara minst 1.
  const minusBtn = (id) => {
    const newTasks = [...props.tasks]
    const found = newTasks.find(task => task.id === id)
    console.log(found)
    if (found != undefined && found.qty > 1) {
      found.qty -= 1  
      props.setTasks(newTasks) 
    }
    console.log(newTasks)
  }
  // Samma som minusBtn men med skillnaden att funktionen adderar 1 istället för att tar bort 1
  const plusBtn = (id) => {
    const newTasks = [...props.tasks]
    const found = newTasks.find(task => task.id === id)
    console.log(found)
    if (found != undefined) {
      found.qty += 1   
      props.setTasks(newTasks)
    }
    console.log(newTasks)
  }
  

  return (
  <div> 
    {/* Här kollar vi ifall "tasks" från App.js är tom med hjälp av length */}
    {/* Ifall listan är tom så skrivs text och knapp ut */}
    <div>{props.tasks.length === 0 && 
      <div className={Styling.emptyContainer}>
      <h2 className={Styling.emptyCheckout}>Checkout is empty</h2>
      <Link to="/"><button className={Styling.backToProducts}>Back to products</button></Link>
      </div>}
    </div>
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
              <button className={Styling.minusBtn} onClick={()=>minusBtn(checkoutItem.id)}>-</button>
              <p>{checkoutItem.qty}</p>
              <button className={Styling.plusBtn} onClick={()=>plusBtn(checkoutItem.id)}>+</button>
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
      <h2 className={Styling.totalSumText}>Summa</h2>
      <p className={Styling.totalSum}>{totalSum}:-</p>
    </div>
    
    <div className={Styling.btnContainer}>
      <button onClick={deleteAllBtn} className={Styling.deleteAllBtn}>Delete all</button>
      <button onClick={orderBtn} className={Styling.orderBtn}>Place order</button>
    </div>

  </div>
  )
}

export default Checkout