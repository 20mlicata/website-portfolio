import styled from "styled-components"
import React from "react"
import image from "./IMG_0809.JPG"
import Info from "./Information"
import Nav from "./Nav"


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #FAF0E6;
    height: 400px; 
    width: 1000px;
    border-radius: 25px;
    align-items: center;
    flex-wrap: wrap;
    font-size: 50px;
    font-family: Times;
        
`;

const Img = styled.img`
    max-width: 50%;
    max-height: 50%;
    border-radius: 50%;
    margin: 20px 20px 20px 50px;
    order: 1;
`;

const Title = styled.h1`
    order: 2;
    font-family: Times;
    font-size: 80px;
    margin-left: 80px;
`;



function Container() {
    return (
        <Wrapper>
            <Title>Michael Licata</Title>
            <Img src={image} />
            <Info />
        </Wrapper>
    );
}


export default Container