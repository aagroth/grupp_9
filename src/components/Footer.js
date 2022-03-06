import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <StyledContainer>
      
      <section>
        <h2>Kontakta oss</h2>
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

    </StyledContainer>
  )
}

export default Footer

// Styled components for Footer

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 30px;
border-top: 3px solid #FED766;
background-color: #272727;
color: white;
`;