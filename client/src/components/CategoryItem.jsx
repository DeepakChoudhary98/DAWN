import React from 'react'
import styled from 'styled-components'
import {
  Link
} from "react-router-dom";

const Container = styled.div`
  width: calc(100% / 3 - 20px);
  height: 80vh;
  position: relative;
  margin: 10px;

  @media (max-width: 768px) {
    width: calc(100% / 2 - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image=styled.img`
  height:100%;
  width:100%;
  object-fit:cover;
`
const Info=styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
const Title=styled.h1`
   color:white;
   margin-bottom:20px;
`
const Button = styled.button`
  padding: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>EXPLORE NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem