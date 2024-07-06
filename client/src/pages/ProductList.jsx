import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
const Container = styled.div`
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 20px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px;
  }
`;

const FilterContainer=styled.div`
   display:flex;
   align-items:center;
   justify-content:space-between;
   margin:25px 0px;
`

const Filter=styled.div`
   margin:20px;
   display:flex;
   align-items:center;
`
const FilterText=styled.h1`
   font-weight:600;
   font-size:20px;
`

const Select = styled.select`
  padding: 10px;
  width: 160px;
  height: 40px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  &:hover {
    border-color: #666;
  }
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.7);
  }
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Option=styled.option`
font-size: 14px;
color: #333;
background-color: #fff;
 
`
const ProductList = () => {
  const location=useLocation();
  const cat=(location.pathname.split("/")[2]);
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("newest");

  const handleFilters=(e)=>{
    console.log("lets see");
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    })
  }
 
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
               <FilterText>Filter Products:</FilterText>
               <Select name="size" onChange={handleFilters}>
               <Option>Size</Option>
               <Option>XS</Option>
               <Option>S</Option>
               <Option>M</Option>
               <Option>L</Option>
               <Option>XL</Option>
               </Select>
               <Select name="color" onChange={handleFilters}>
               <Option>Color</Option>
               <Option>red</Option>
               <Option>green</Option>
               <Option>black</Option>
               <Option>pink</Option>
               <Option>beige</Option>
               <Option>brown</Option>
               <Option>blue</Option>
               <Option>orange</Option>
               <Option>grey</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText >Sort By:</FilterText>
               <Select onChange={e=> setSort(e.target.value)}>
                  <Option>Sort</Option>
                  <Option value="newest">Newest</Option>
                  <Option value="desc">Price:High to Low</Option>
                  <Option value="asc">Price:Low to High</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList