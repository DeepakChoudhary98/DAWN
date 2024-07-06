import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


const Container=styled.div`

`
const Containermain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Make the container take the full viewport height */
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;  /* Include padding and border in element's total width and height */

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Logo = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Success = () => {
    console.log(useLocation())
  return (
      <Container>
    <Containermain>
      <Logo>DAWN</Logo>
      <Title>Payment Success!</Title>
      <p>Your payment was successful. Thank you!</p>
    </Containermain>
    </Container>
  );
};

export default Success;
