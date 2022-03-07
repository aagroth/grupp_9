import React from 'react'

function Checkout(props) {



  return (
  <div> 

    <table>    
      <tr>
        <th colspan="4">Products</th>
      </tr>
      <tr>
        <th>Img</th>
        <th>Title</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>Image of product</td>
        <td>A test title</td>
        <td>Qty of products</td>
        <td>100</td>
      </tr>
    </table>

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