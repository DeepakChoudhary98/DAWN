import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: #C7C8CC;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  color: #12372A;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const Desc=styled.p`
font-size: 24px; 
color: #12372A; 
margin-bottom:20px;
font-weight:500;
`
const InputContainer=styled.div`
   display:flex;
   flex-direction:column;
   height:40px;

`

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 16px;
  color: #333;
  background: transparent;
  outline: none;
  margin-bottom: 20px;
  text-align: center;

  &:focus {
    border-bottom: 2px solid #FC6736;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button=styled.button`
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
background-color: #12372A;
color: #fff;
font-size: 18px;
cursor: pointer;
&:hover{
    background-color: #436850;
}
`

const Inform=styled.div`
  font-weight:500;
  margin-top:10px;
  text-align:center;
  color:#12372A;
`
const Newsletter = () => {
  const [email,setEmail]=useState("");
  const [check,setCheck]=useState(false);
  const handleClick=()=>{
    if(email.length>0){
        setCheck(true);
        setEmail("");
        
    }
  }
  return (
    <Container>
        <Title>
            DAWN
        </Title>
        <Desc>
        You are invited: Not part of the list yet?
        </Desc>
        <InputContainer>
          <Input placeholder="Enter your e-mail" onChange={e=>setEmail(e.target.value)}/>
          <Button onClick={handleClick}>
              Subscribe now
          </Button>
          {check && <Inform>Thanks for signing up for the newsletter!</Inform>}
        </InputContainer>
    </Container>
  )
}

export default Newsletter