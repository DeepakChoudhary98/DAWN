import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 60vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 40%;
  margin-left: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
  }
`;
const Left=styled.div`
  flex:1;
  height:100%;
`

const List=styled.ul`
   list-style:none;
`

const ListItem=styled.li`
    margin-bottom:20px;
    cursor:pointer;
`
const Center=styled.div`
   flex:1;
   height:100%;
`
const Right=styled.div`
   flex:1;
   height:100%;
`

const ContactItem=styled.div`
   display:flex;
   align-items:center;
   margin-bottom:20px;
`

const SocialContainer=styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
`

const SocialIcon=styled.div`
   width:50px;
   height:50px;
   border-radius:50%;
   background-color:white;
   display:flex;
   align-items:center;
   justify-content:center;
   margin-right:20px;
   cursor:pointer;
`
const Logo = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Copyright=styled.p`
  text-align:center;
  color:gray;
  margin-top:20px;
`
const PaymentContainer=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:15px;
`
const Payment=styled.img`
    text-align:center;
`

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 

  &:hover {
    color: inherit; 
  }
`;

const Footer = () => {
  return (
    <Container>
        <TopContainer>
        <Left>
            <List>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Order Tracking</ListItem>
            </List>
        </Left>
        <Center>
        <List>
                <ListItem>Payment Methods</ListItem>
                <ListItem>Shipping & Delivery</ListItem>
                <ListItem>Return Policy</ListItem>
                <ListItem>Career at DAWN</ListItem>
            </List>
        </Center>
        <Right>
            <ContactItem> <LocationOnIcon style={{marginRight:"10px"}}/>123 King Circle Street, Sion, Mumbai</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>+91 123 456 7890</ContactItem>
            <ContactItem><EmailIcon style={{marginRight:"10px"}}/>mr.nestles369@gmail.com</ContactItem>
        </Right>
        </TopContainer>
        <SocialContainer>
            <StyledLink to="https://www.instagram.com/traprnbking?igsh=bm5haTBoYzM3Ym91">
            <SocialIcon><InstagramIcon style={{fontSize:"40px", color:"#E4405F"}}/></SocialIcon>
            </StyledLink>
            <StyledLink to="https://twitter.com/guddixo">
            <SocialIcon><XIcon style={{fontSize:"30px"}}/></SocialIcon>
            </StyledLink>
            <StyledLink to="https://www.facebook.com/profile.php?id=61560621833060&mibextid=ZbWKwL">
            <SocialIcon><FacebookIcon style={{fontSize:"40px", color: "	#1877F2"}}/></SocialIcon>
            </StyledLink>
            <StyledLink to="https://www.linkedin.com/in/aditya-singh-0a1123239/">
            <SocialIcon><LinkedInIcon style={{fontSize:"40px", color: "#E60023"}}/></SocialIcon>
            </StyledLink>
        </SocialContainer>
        <Logo>DAWN</Logo>
        <Copyright>DAWN Mumbai, 123 King Circle Street, Sion , Mumbai. Copyright © DAWN (Mumbai) All rights reserved</Copyright>
        <PaymentContainer>
        <Payment src="/payment2 (1).png"/>
        </PaymentContainer>
    </Container>
  )
}

export default Footer