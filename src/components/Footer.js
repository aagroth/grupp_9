import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <StyledContainer>
      
      <section>
        <motion.h2 initial={{ x: 0 }} whileHover={{ x: 100 }}>Kontakta oss</motion.h2>
        <p>Telefon: 08-0000000</p>
        <p>Mail: kontakt@mail.se</p>
        <p>Södervägen 12 A, Stockholm</p>
      </section>

      <section>
      <motion.h2 initial={{ x: 0 }} whileHover={{ x: 100 }}>Info</motion.h2>
        <p>Köpvillkor</p>
        <p>Leveransvillkor</p>
        <p>Vanliga frågor</p>
      </section>

    </StyledContainer>
  )
}

export default Footer

// Styled components för Footer

const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 30px;
background-color: #272727;
color: white;
padding-top: 50px;
padding-bottom: 50px;
`;
