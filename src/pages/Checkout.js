import React from 'react'

function Checkout(props) {

  const deleteAllBtn = () => {
    props.setTasks([])
  }

  return (
  <div> 

  {props.tasks.map((checkoutItem) => (
    <table>    
      <tr>
        <th colSpan="4">Products</th>
      </tr>
      <tr>
        <th>Img</th>
        <th>Title</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
      <tr>
        <img src={checkoutItem.url} alt={checkoutItem.title}></img>
        <td>{checkoutItem.title}</td>
        <td>
        <button>-</button>
        <button>+</button>
        </td>
        <td>{checkoutItem.price}</td>
      </tr>
      <button onClick={() =>
        props.setTasks((tasks) => tasks.filter((_, i) => i !== tasks.length - 1))}>Delete</button>
    </table>
  ))}

  <button onClick={deleteAllBtn}>Delete all</button>

  <table>
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
  </table>
    
    <button>Place order</button>

  </div>
  )
}

export default Checkout