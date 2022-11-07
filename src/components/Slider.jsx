import React from 'react'
import { useState } from 'react'
import './Slider.css'
import {SliderItems} from '../data.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`
    transform: translateX(${(props) => props.slideIndex* -100}vw)
`;

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <div className='slider'>
        <div className='arrow' id='left' onClick={() => handleClick("left")}>
            ⬅️
        </div>
        <Wrapper slideIndex={slideIndex}>
        <div className='wrap'>

            {SliderItems.map(item => (
            <div className='slide'  key={item.id} >
                <div className='imageContainer'>
                    <img src={item.image} alt="img here" height={"95%"} />
                </div>
                <div className='infoContainer'>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
            ))}

        </div>
        </Wrapper>
        <div className='arrow' id='right' onClick={() => handleClick("left")}>
            ➡️
        </div>
    </div>
  )
}
