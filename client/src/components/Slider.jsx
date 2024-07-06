import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from '../data'
import { Link } from 'react-router-dom';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
  }
`;
const Arrow=styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:pink;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  position:absolute;
  top:0;
  bottom:0;
  margin:auto;
  left: ${props => props.direction==="left" && "10px"};
  right: ${props => props.direction==="right" && "10px"};
  opacity:0.5;
  z-index:2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-${props => props.slideIndex * 100}vw);
  transition: all 1s ease;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Slide=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  
`
const ImageContainer=styled.div`
  height:100%;
  flex:1;
`
const Image=styled.img`
  height:100%;
  object-fit:cover;
`
const InfoContainer=styled.div`
  flex:1;
  padding:50px;
`
const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const Desc=styled.p`
  margin:50px 0;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button=styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor:pointer;
`
const Slider = () => {
  const [slideIndex,setSlideIndex]=useState(0);
  const handleClick=(direction)=>{
    if(direction==="left")
    {
      setSlideIndex(slideIndex>0?slideIndex-1:2);
    }
    else{
      setSlideIndex(slideIndex<2?slideIndex+1:0);
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")} ><ArrowLeftIcon/></Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
              <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to={`/products/${item.cat}`}>
                <Button>EXPLORE NOW</Button>
                </Link>
                </InfoContainer>
                </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}><ArrowRightIcon/></Arrow>
    </Container>
  )
}

export default Slider