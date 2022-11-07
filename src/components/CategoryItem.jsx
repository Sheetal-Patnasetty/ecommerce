import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    
`
const Image = styled.img` 
    width: 100%;
    height: 70%;
    object-fit: cover;
    border: 1px solid black;
    background-color: rgb(243, 242, 216);
`
const Info = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1` 
    font-size: 80px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    margin: 10;
    border: 1px solid black;
`
const Button = styled.button` 
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    background-color: yellow;
    border: 1px solid;
    box-shadow: 5px 10px 8px 10px #888888;
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}
