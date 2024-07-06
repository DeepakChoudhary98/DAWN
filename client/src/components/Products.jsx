import React from 'react'
import styled from 'styled-components'
import {productItems} from '../data'
import Product from './Product'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { publicRequest } from '../requestMethods'
const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);

  useEffect(()=>{
    const getProducts=async () => {
        try{
        const res=await publicRequest.get(cat ?`/products?category=${cat}`:`/products`);
        console.log(res.data);
        setProducts(res.data);
        }catch(err)
        {
          console.log(err.message);
        }
    }
    getProducts()
},[cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>Object.entries(filters).every(([key,value])=> item[key].includes(value)))
    )
  },[cat,products,filters]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=> [...prev].sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt)));
    }
    else if(sort==="asc")
      {
        setFilteredProducts((prev)=> [...prev].sort((a,b)=> a.price-b.price));
      }
    else
    {
      setFilteredProducts((prev)=> [...prev].sort((a,b)=> b.price-a.price));
    }
  },[sort]);

  return (
    <Container>
        {cat?filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )): products.slice(0,8).map((item)=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products