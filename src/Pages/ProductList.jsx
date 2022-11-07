import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>BODY</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter:</FilterText>
                <Select>
                    <Option disabled selected>
                        Skin Type
                    </Option>
                    <Option>Dry</Option>
                    <Option>Oily</Option>
                    <Option>Combination</Option>
                    <Option>Sensitive</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort:</FilterText>
            <Select>
                    <Option disabled selected>
                        Sort
                    </Option>
                    <Option>ASC</Option>
                    <Option>DSC</Option>
                    <Option>Popularity</Option>
                    <Option>New Arrivals</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}
