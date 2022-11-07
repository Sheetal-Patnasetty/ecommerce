import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;

const Button = styled.button`
    margin: 30px;
    padding: 15px;
    border: 2px solid teal;
    cursor: pointer;
    font-weight: 500;
`;

export default function SingleProduct() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={require("../components/17.jpg")}/>
            </ImageContainer>
            <InfoContainer>
                <Title>Lakme Sunscreen</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Itaque placeat numquam dignissimos quaerat consequatur 
                    repudiandae sapiente consequuntur voluptatem? Asperiores 
                    illo pariatur iure totam explicabo adipisci amet deserunt 
                    assumenda sequi dolore?</Desc>
                <Price>Rs.225</Price>
                <br/>
                <Button>Add to Cart</Button>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
