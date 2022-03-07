import React from 'react'

function Checkout(props) {

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
        <td>Qty of products</td>
        <td>{checkoutItem.price}</td>
      </tr>
    </table>
  ))}

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