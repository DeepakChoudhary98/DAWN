import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userReducer';
import { deleteCart } from '../redux/cartReducer';
const Container = styled.div`
  height: 50px;

  @media (max-width: 768px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  padding: 10px 0;
}
`;
const Left=styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Language=styled.span`
   font-size:14px;
   font-weight:500;
`
const SearchContainer=styled.div`
   border:0.5px solid black;
   display:flex;
   align-items:center;
   justify-content:space-between;
   margin-left:25px;
   padding:5px;
`
const Input=styled.input`
   border:none;
`
const Center=styled.div`
  flex:1;
 
  text-align:center;
`
const Logo = styled.h1`
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Right=styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`
const MenuItem=styled.div`
 font-size:14px;
 cursor:pointer;
 margin-left:25px;
 font-weight:500;
`
const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 

  &:hover {
    color: inherit; 
  }
`;

const Navbar = () => {

  const quantity=useSelector(state=>state.cart.quantity);
  const currentUser=useSelector(state=>state.user.currentUser);
  const dispatch=useDispatch();
  const handleClick=()=>{
     dispatch(logout());
     dispatch(deleteCart());
  }
  return (
    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
      </Left>
      <Center><StyledLink to="/"><Logo>DAWN</Logo></StyledLink></Center>
      <Right>
        <StyledLink to="/register">
        {currentUser===null && <MenuItem>SIGN UP</MenuItem>}
        </StyledLink>
        <StyledLink to="/login">
        {currentUser===null && <MenuItem>LOGIN</MenuItem>}
        </StyledLink>
        {currentUser && <MenuItem onClick={handleClick}>LOGOUT</MenuItem>}
        <StyledLink to="/cart">
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
         <ShoppingCartOutlinedIcon/>
       </Badge>
        </MenuItem>
        </StyledLink>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar