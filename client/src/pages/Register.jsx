import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {publicRequest} from '../requestMethods'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("bg1.jpg") ;
  background-size: cover;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Form=styled.form`
   display:flex;
   flex-wrap:wrap;
`

const Input=styled.input`
   flex:1;
   min-width:40%;
   margin:10px 10px;
   padding:10px;
`
const Checkbox=styled.input`
  margin-right:10px;
`
const Agreement=styled.p`
  font-size:15px;
  margin:20px 10px;
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
    cursor:not-allowed;
    opacity:0.5;
  }
`
const Error=styled.div`
 color:red;
 padding:10px;
`;

const Register = () => {
 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
 
  const handleClick=async ()=>{
    try{
      const res=await publicRequest.post("/auth/register",{username,email,password});
      console.log(res.data);
      navigate("/login");
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };


  useEffect(() => {
    if (!validateEmail(email) && email.length > 0) {
      setEmailError('Invalid email address!');
    } else {
      setEmailError('');
    }
  }, [email]);
  
  useEffect(() => {
    setIsFormValid(
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword &&
      validateEmail(email)
    );
  }, [username, email, password, confirmPassword]);

  return (
    <Container>
        <Wrapper>
            <Title>Create Account</Title>
            <Form>
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                <Input placeholder="E-mail"  onChange={e=>setEmail(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" type="password" onChange={e=>setConfirmPassword(e.target.value)}/>
                { password!==confirmPassword && <Error>Password and Confirm Password do not match!</Error>}
                {emailError && <Error>{emailError}</Error>}
                <Agreement> <Checkbox type="checkbox"/>I agree to receive communications related to order and promotional offers.</Agreement>
            </Form>
            <Button onClick={handleClick} disabled={!isFormValid}>SIGN UP</Button>
        </Wrapper>
    </Container>
  )
}

export default Register