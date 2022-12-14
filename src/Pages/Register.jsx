import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(circle, #f5068e, #ef349a, #e84aa4, 
    #e15bae, #da69b5, #d977bc, #d984c3, #d890c9, #dea1d3,
     #e3b2dc, #e9c2e5, #efd3ed);
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    border: 1px solid black;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="User name"/>
                <Input placeholder="Email-id"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account I consent to the 
                    processing of my personal data in accordance 
                    with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}