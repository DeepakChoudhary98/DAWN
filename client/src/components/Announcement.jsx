import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`
const Announcement = () => {
  return (
    <Container>
      Free shipping globally including customs + duties above Rs.2000
    </Container>

  )
}

export default Announcement