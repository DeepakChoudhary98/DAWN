import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import styled from 'styled-components'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Container = styled.div`
  background: linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%), linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%);

  @media (max-width: 768px) {
    background: linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%);
  }
`;
const Home = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products />
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default Home