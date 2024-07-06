import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Discount } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { userRequest } from '../requestMethods'
import { removeProduct } from '../redux/cartReducer'
const KEY=process.env.REACT_APP_STRIPE_KEY;
const Container = styled.div`
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left=styled.div`
  flex:4;
`



const Right=styled.div`
  flex:2;
  background-color:#EEEEEE;
  height:60vh;
  margin-top:60px;
  padding:30px;
`

const LeftTop=styled.div`
  display:flex;
  align-items:center;
  margin-left:50px;
`

const BagAmount=styled.div`
  margin-right:20px;
  display:flex;
  align-items:center;
`

const BagText=styled.span`
   font-weight:500;
   font-size:20px;
   cursor:pointer;
`
const Wishlist=styled.span`
display:flex;
align-items:center;
font-size:20px;
cursor:pointer;
`

const LeftBottom=styled.div`
   padding:50px;
`
const ProductDetail=styled.div`
   margin-bottom:20px;
   display:flex;
`

const Image=styled.img`
    height:30vh;
`

const ItemInfo=styled.div`
   display:flex;
   align-items:center;
   width:80%;
   margin-left:20px;
   justify-content:space-between;
`
const ItemInfoLeft=styled.div`
   padding:20px;
   height:100%;
`

const ProductTitle=styled.div`
    font-size:20px;
    font-weight:400;
    margin-top:10px;
    margin-bottom:20px;
`

const ProductSize=styled.div`
margin:20px 0px;
font-size:16px;
font-weight:400;
`

const ProductColor=styled.div`
    height:20px;
    width:20px;
    border-radius:20%;
    background-color:${(props)=> props.bg};
    margin:20px 0px;
    display:flex;
    align-items:center;
`

const ItemInfoRight=styled.div`
   margin-left:300px;
   height:100%;
`
const ProductPrice=styled.div`
   margin-top:40px;
   font-weight:600;
   font-size:24px;
`
const AddContainer=styled.div`
   display:flex;
   align-items:center;
   flex-direction:column;
   justify-content:center;
  
`

const Quantity=styled.div`
    width:30px;
    height:30px;
    border-radius:20%;
    border: 2px solid gray;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:20px 0px;
`

const ProductLike=styled.div`
cursor:pointer;
`
const ProductId=styled.p`
margin:20px 0px;
font-size:16px;
color:rgba(0,0,0,0.5);
`

const Top=styled.div`
   display:flex;
   flex-direction:column;
   margin:10px 0px;
`

const Bottom=styled.div`
   margin:10px 0px;
`
const OrderTitle=styled.div`
  font-size:24px;
  font-weight:500;
  margin:10px 0px;
`

const OrderSubtotal=styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   margin:10px 0px;
`

const SubtotalText=styled.div`
font-size:20px;
font-weight:400;

`

const SubtotalPrice=styled.div`
font-size:18px;
font-weight:500;
`

const ShippingText=styled.div`
font-size:20px;
font-weight:400;
`

const ShippingPrice=styled.div`
font-size:18px;
font-weight:500;
`
const DiscountText=styled.div`
font-size:20px;
font-weight:400;

`

const DiscountPrice=styled.div`
font-size:18px;
font-weight:500;
color:red;
`
const TotalText=styled.div`
font-size:22px;
font-weight:600;
`

const TotalPrice=styled.div`
font-size:20px;
font-weight:600;
`

const OrderShipping=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:10px 0px;
`

const OrderDiscount=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:10px 0px;
`

const OrderTotal=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:10px 0px;
`

const FreeShipping=styled.div`
   display:flex;
   align-items:center;
   color:gray;
   margin:20px 0px;
`
const Payment=styled.div`
display:flex;
align-items:center;
color:gray;
margin:20px 0px;
`

const Returns=styled.div`
display:flex;
align-items:center;
color:gray;
margin:20px 0px;
`
const Button=styled.button`
  border:none;
  background-color:black;
  color:white;
  cursor:pointer;
  padding:15px;
  font-size:18px;
  margin-top:10px;
  width:100%;
  &:disabled{
   cursor:not-allowed;
  }
`
const Hr=styled.hr`
 border:0.5px dotted gray;
 margin:20px 0px;
`

const NextTitle=styled.div`
  font-weight:600;
  font-size:40px;
  margin:20px 60px;
`

const Text=styled.div`
   margin-left:30px;
   font-weight:400;
`
const WrapperTwo=styled.div`

`

const EmptyCart=styled.div`
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:20px;
  height:80vh;
`

const EmptyText=styled.div`
    font-size:24px;
    font-weight:500;
    margin-left:20px;
`
const Cart = () => {

   const cart=useSelector(state=>state.cart);
   const currentUser=useSelector(state=>state.user.currentUser);
   const [stripeToken, setStripeToken] = useState(null);
   const navigate = useNavigate();
   const dispatch=useDispatch();
 
   const onToken = (token) => {
     setStripeToken(token);
   };

   useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await userRequest.post(
            "/checkout/payment", {
            tokenId: stripeToken.id,
            amount: cart.total*100,
          });
          console.log(res.data);
          navigate("/success",{data:res.data});
        } catch (err) {
          console.log(err);
        }
      };
      stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);

    const handleClick=(id,price)=>{
       dispatch(removeProduct({id,price}));
    }

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>SHOPPING BAG</Title>
        {
         currentUser===null &&
         <EmptyCart>
         <img src="https://miro.medium.com/v2/resize:fit:1080/0*A7MUqyCLvZDcHkfM.jpg" width="500px;" height="500px"></img>
         <EmptyText>Please sign in to add items to your bag :)</EmptyText>
         </EmptyCart>
        }
        {currentUser &&
        <Wrapper>
            <Left>
               <LeftTop>
                  <BagAmount><ShoppingBagIcon style={{marginRight:"10px"}}/> <BagText>My Bag ({cart.quantity})</BagText></BagAmount>
               </LeftTop>
               <LeftBottom>
               {
                  cart.products.map(product=>(

                     <ProductDetail>
                   <Image src={product.img}/>
                   <ItemInfo>
                    <ItemInfoLeft>
                   <ProductTitle>{product.title}</ProductTitle>
                   <ProductSize>Size: {product.size}</ProductSize>
                   <ProductColor bg={product.color}><Text>{product.color}</Text></ProductColor>
                   <ProductId>ID:{product._id}</ProductId>
                   <ProductLike>
                     <DeleteIcon onClick={()=>handleClick(product._id,product.price*product.quantity)}/>
                     </ProductLike>
                   </ItemInfoLeft>
                   <ItemInfoRight>
                   <AddContainer>
                     <Quantity>x{product.quantity}</Quantity>
                   </AddContainer>
                   <ProductPrice>Rs.{product.price*product.quantity}</ProductPrice>
                   </ItemInfoRight>
                   </ItemInfo>
               </ProductDetail>
                  ))
}
               </LeftBottom>
            </Left>
            <Right>
                <Top>
                   <OrderTitle>
                      Price Details
                   </OrderTitle>
                   <OrderSubtotal>
                      <SubtotalText>Subtotal:</SubtotalText> <SubtotalPrice>Rs. {cart.total}</SubtotalPrice>
                   </OrderSubtotal>
                   <OrderShipping>
                      <ShippingText>Shipping Charges:</ShippingText> <ShippingPrice>Rs. 100</ShippingPrice>
                   </OrderShipping>
                   <OrderDiscount>
                    <DiscountText>Discount:</DiscountText> <DiscountPrice>-Rs. 100</DiscountPrice>
                   </OrderDiscount>
                   <OrderTotal>
                    <TotalText>Total:</TotalText><TotalPrice> Rs. {cart.total}</TotalPrice>
                   </OrderTotal>
                   {stripeToken ? (<span>Processing... Please wait</span>) : (
          <StripeCheckout
            name="DAWN"
            billingAddress
            shippingAddress
            description={`Your total is Rs.${cart.total}`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button disabled={!cart.total}>CHECKOUT</Button>
          </StripeCheckout>
        )}
                </Top>
                <Hr/>
                <Bottom>
                    <FreeShipping><LocalShippingIcon style={{marginRight:"10px"}}/>Free Shipping for orders over Rs. 1,999</FreeShipping>
                    <Payment><PaymentIcon style={{marginRight:"10px"}}/>Secured Payment</Payment>
                    <Returns><AirportShuttleIcon style={{marginRight:"10px"}}/>Easy Return Policy</Returns>
                </Bottom>
            </Right>
        </Wrapper>
}
        {currentUser &&
        <WrapperTwo>
        <NextTitle>You might also like</NextTitle>
        <Products/>
        </WrapperTwo>
}
        <Footer/>
    </Container>
  )
}

export default Cart