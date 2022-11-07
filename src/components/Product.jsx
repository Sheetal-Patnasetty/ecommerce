import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;    
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div` 
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(243, 242, 216);
    position: relative;
    &: hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div``;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &: hover{
        background-color: yellow;
        transform: scale(1.1);
    }
`;

export default function Product({item}) {
  return (
    <Container>
        <Circle/>
        <Image src={item.image}/>
        <Info>
            <Icon>
                🛒
            </Icon>
            <Icon>
                🤍
            </Icon>
            <Icon>
                🔍
            </Icon>
        </Info>
    </Container>
  )
}
