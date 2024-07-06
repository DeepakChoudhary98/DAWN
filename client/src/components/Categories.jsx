import React from 'react'
import styled from 'styled-components'
import {categoryItems} from '../data'
import CategoryItem from './CategoryItem'
const Container=styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
   padding:20px;
   margin-top:20px;
   @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
const Categories = () => {
  return (
    <Container>
        {categoryItems.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories