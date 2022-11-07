import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`   
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductSkin = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountConatiner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid black;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 90;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "600"};
    font-size: ${(props) => props.type === "total" && "24px" };
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 400;
`;


export default function Cart() {
  return (
    <Container>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>SHOPPING BAG (2)</TopText>
                    <TopText>WISHLIST (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={require("../components/17.jpg")}/>
                            <Details>
                                <ProductName> <b>Product: </b> Lakme Sunscreen</ProductName>
                                <ProductID><b>ID: </b> 123456</ProductID>
                                <ProductSkin><b>Skin Type: </b> Dry</ProductSkin>
                            </Details>
                        </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountConatiner>
                                <i class="fa fa-plus-square-o"></i>
                                <ProductAmount>2</ProductAmount>
                                <i class="fa fa-minus-square-o"></i>
                            </ProductAmountConatiner>
                            <ProductPrice>Rs. 225</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src={require("../components/8.jpg")}/>
                            <Details>
                                <ProductName> <b>Product: </b> Lakme Foundation</ProductName>
                                <ProductID><b>ID: </b> 234567</ProductID>
                                <ProductSkin><b>Skin Type: </b> Oily</ProductSkin>
                            </Details>
                        </ProductDetail>
                        <PriceDetail> 
                            <ProductAmountConatiner>
                                <i class="fa fa-plus-square-o"></i>
                                <ProductAmount>2</ProductAmount>
                                <i class="fa fa-minus-square-o"></i>
                            </ProductAmountConatiner>
                            <ProductPrice>Rs. 325</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>Rs. 550</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Price</SummaryItemText>
                        <SummaryItemPrice>Rs. 100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount Price</SummaryItemText>
                        <SummaryItemPrice>Rs. -100</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>Rs. 550</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
