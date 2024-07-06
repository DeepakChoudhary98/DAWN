import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../redux/apiCalls.js'
import {Link} from 'react-router-dom'
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("bg4.jpg") center;
  background-size: cover;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Form=styled.form`
   display:flex;
   flex-direction:column;
`

const Input=styled.input`
   flex:1;
   min-width:40%;
   margin:10px 10px;
   padding:10px;
`

const Button=styled.button`
  padding:10px;
  background-color:black;
  border:none;
  color:white;
  margin-left:10px;
  cursor:pointer;
  &:hover{
    background-color:rgb(0,0,0,0.2);
  }
  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`

const Links=styled.div`
  display:flex;
  flex-direction:column;
`
const Linkk=styled.a`
  text-decoration:none;
  cursor:pointer;
  margin-top:10px;
  font-size:15px;
  margin-left:5px;
  font-weight:500;
`
const Error=styled.div`
  color:red;
  margin-left:10px;
`
const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 

  &:hover {
    color: inherit; 
  }
`;

const Register = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const {isFetching,error}=useSelector(state=>state.user);
  
   const handleClick=(e)=>{
       e.preventDefault();
       login(dispatch,{username,password});
   }

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
            </Form>
            <Button onClick={handleClick} disabled={isFetching}>SIGN IN</Button>
            {error && <Error>Something went wrong..</Error>}
            <Links>
            <Linkk>Don't have an account?<StyledLink to="/register"><Button> SIGN UP </Button></StyledLink> instead</Linkk>
            </Links>
        </Wrapper>
    </Container>
  )
}

export default Register