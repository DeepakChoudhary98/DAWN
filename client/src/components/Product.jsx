import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from 'react-router-dom'


const Info=styled.div`
  opacity:0;
  width:100%;
  height:100%;
  top:0;
  left:0;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:3;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 20px;
  min-width: 280px;
  height: 60vh;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  &:hover ${Info} {
    opacity: 1;
  }

  cursor: pointer;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
  }
`;
const Image = styled.img`
  width: 340px; 
  height: 100%; 
  object-fit: cover;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Icon=styled.div`
   height:40px;
   width:40px;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:50%;
   background-color:white;
   margin:10px;
   cursor:pointer;
   &:hover{
    background-color: #dcdcdc;
     transform: scale(1.2)
   }
   transition: all 0.5s ease;
   
`

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 

  &:hover {
    color: inherit; 
  }
`;

const Product = ({item}) => {
 
  return (
    <Container>
        <Image src={item.img}/>
      <StyledLink to={`/product/${item._id}`}>
        <Info>
        </Info>
        </StyledLink>
    </Container>
  )
}

export default Product