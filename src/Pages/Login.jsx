import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(circle, #6ac8f6, #67d0f4, #6ad8f0, #73dfeb, #80e6e5);
     display: flex;
     align-items: center;
     justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    border: 1px solid black;
    margin: 10px 0px;
    padding: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN-IN</Title>
            <Form>
                <Input placeholder="User name"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
