import React from 'react'
import './Footer.css'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    border-top: 1px solid teal;
    background-color: #fbde04;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Social = styled.div`
    display: flex;
`;

const Icon = styled.div` `;

const Center = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    margin-top: 80px;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
`;

const ContactInfo = styled.p`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const Payment = styled.div`
`;
const PaymentMethod = styled.div`
    display: flex;
`;

export default function Footer() {
  return (
    <Container>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Left>
            <Logo>bELLA.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ipsam earum illo praesentium nobis quod reiciendis impedit 
                nulla qui libero nostrum? Nulla illo quisquam voluptatem, 
                nesciunt inventore nihil molestiae natus provident?</Desc>
            <Social>
                <Icon>
                    <a href="#" class="fa fa-facebook"></a>
                </Icon>
                <Icon>
                    <a href="#" class="fa fa-instagram"></a>
                </Icon>
                <Icon>
                    <a href="#" class="fa fa-twitter"></a>
                </Icon>
                <Icon>
                    <a href="#" class="fa fa-pinterest"></a>
                </Icon>
            </Social>

        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Makeup Products</ListItems>
                <ListItems>Moisturizers</ListItems>
                <ListItems>Makeup Tools</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Wishlist</ListItems>
                <ListItems>Terms and Conditions</ListItems>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactInfo>📍 Somewhere in Bangalore, India.</ContactInfo>
            <ContactInfo>📞 +91 987654321</ContactInfo>
            <ContactInfo>📧 bella@dontsendmail.com</ContactInfo>
            <PaymentMethod>
                <Payment><i class="fa fa-paypal"></i></Payment>
                <Payment><i class="	fa fa-cc-visa"></i></Payment>
                <Payment><i class="	fa fa-cc-mastercard"></i></Payment>
                <Payment><i class="	fa fa-credit-card"></i></Payment>
            </PaymentMethod>
        </Right>
    </Container>
  )
}
