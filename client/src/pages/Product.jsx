import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {publicRequest} from '../requestMethods.js'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartReducer.js'


const Container = styled.div`
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgContainer=styled.div`
   flex:1;
   height:125vh;
`
const Image=styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`
const InfoContainer=styled.div`
   flex:1;
   height:125vh;


`

const Title = styled.h1`
  font-weight: 500;
  margin: 40px 60px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 20px 0;
  }
`;

const Price=styled.h3`
  font-weight:500;
  margin-top:40px;
  margin-left:60px;
`

const Taxes=styled.p`
   color:gray;
   font-size:16px;
   margin-left:60px;
`

const Desc=styled.p`
  margin:30px 60px;
`

const ColorContainer=styled.div`
   display:flex;
   align-items:center;
`

const ColorTitle=styled.p`
  font-weight:500;
  margin-top:40px;
  margin-left:60px;

`

const Color=styled.div`
  height:30px;
  width:30px;
  border-radius:50%;
  background-color: ${props=> props.color};
  margin-top:40px;
  margin-left:20px;
  cursor:pointer;
  border: ${props => props.isSelected ? '2px solid black' : 'none'};
`

const SizeContainer=styled.div`
   display:flex;
   align-items:center;
`

const SizeTitle=styled.p`
font-weight:500;
margin-top:40px;
margin-left:60px;
`

const Size=styled.div`
  height:40px;
  width:40px;
  border-radius:10%;
  border: ${props => props.isSelected ? '3px solid black' : '1px solid black'}; 
  margin-top:40px;
  margin-left:20px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
`

const AddContainer=styled.div`
   display:flex;
   align-items:center;
   margin-top:40px;
   margin-left:60px;
  
`

const Quantity=styled.div`
    width:30px;
    height:30px;
    border-radius:20%;
    border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Shop=styled.button`
    margin-left:20px;
    padding:10px;
    background-color:black;
    color:white;
    border-radius:7%;
    cursor:pointer;
`
const DeliveryInfo=styled.div`
   display:flex;
   align-items:center;
   margin-left:60px;
   margin-top:40px;
`


const CodInfo=styled.p`
  margin-left:10px;
`

const ExtraInfo=styled.div`
   display:flex;
   margin-top:20px;
   margin-left:60px;
   align-items:center;

`
const ShippingTitle=styled.p`
  font-size:20px;
  font-weight:500;
  margin-left:10px;
`
const ShippingInfo=styled.p`
  margin-top:10px;
  margin-left:60px;
`
const Error=styled.div`
  color:red;
  margin-left:10px;
  font-weight:500;
`
const Product = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const [product,setProduct]=useState({});

  useEffect(()=>{
     const getProduct=async ()=>{
      try{
      const res=await publicRequest.get("/products/find/"+id);
      setProduct(res.data);
      }catch(err){
         console.log(err);
      }
     }
     getProduct();
  },[id]);

  const [amount,setAmount]=useState(1);
  const [color,setColor]=useState("");
  const [size,setSize]=useState("");
  const [clicked,setClicked]=useState(false);
  const dispatch=useDispatch();
  const handleClick=()=>{
     setClicked(true);
     dispatch(addProduct({...product,size,color,quantity:amount}));
  }

  const currentUser=useSelector(state=>state.user.currentUser);
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
               <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>
                 {product.title}
              </Title>
              <Price>
                MRP Rs. {product.price}
              </Price>
              <Taxes>
                Inclusive of all taxes
              </Taxes>
              <Desc>
             {product.desc}
              </Desc>
              <ColorContainer>
                 <ColorTitle>Color:</ColorTitle>
                 {
                  product && product.color && product.color.map((col) => (
                 <Color color={col} key={col} onClick={e=> setColor(col)} isSelected={color===col}/>
                   ))
                 }
              </ColorContainer>
              <SizeContainer>
                <SizeTitle>Size:</SizeTitle>
                {
                  product && product.size && product.size.map((s)=> (
                    <Size key={s} onClick={e=>setSize(s)} isSelected={size===s}>{s}</Size>
                  ))
                }
              </SizeContainer>
              <AddContainer>
                <RemoveIcon style={{marginRight:"10px",cursor:"pointer"}} onClick={e=>amount>1 && setAmount(amount-1)}/>
                <Quantity>{amount}</Quantity>
                <AddIcon style={{marginLeft:"10px",cursor:"pointer"}}  onClick={e=> setAmount(amount+1)}/>
                <Shop onClick={handleClick}>ADD TO BAG</Shop>
                {currentUser===null && clicked && <Error>Sign-in to add items to your bag</Error>}
              </AddContainer>
              <DeliveryInfo>
                    <PaymentIcon/>
                    <CodInfo>Cash on delivery available in most areas</CodInfo>
                </DeliveryInfo>
                <ExtraInfo>
                <LocalShippingIcon/>
                    <ShippingTitle>Standard Delivery:</ShippingTitle>
               </ExtraInfo>
               <ShippingInfo>Free shipping on this product! (Save ₹99)</ShippingInfo>
            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product