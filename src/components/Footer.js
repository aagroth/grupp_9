import React from 'react'
import Styling from '../components/Footer.module.css'

function Footer() {
  return (
    <div>
      
      <section>
        <h2 className={Styling.titleText}>Kontakta oss</h2>
        <p>Telefon: 08-0000000</p>
        <p>Mail: kontakt@mail.se</p>
        <p>Södervägen 12 A, Stockholm</p>
      </section>

      <section>
        <h2>Info</h2>
        <p>Köpvillkor</p>
        <p>Leveransvillkor</p>
        <p>Vanliga frågor</p>
      </section>

    </div>
  )
}

export default Footer