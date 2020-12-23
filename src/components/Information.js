import styled from "styled-components"
import React from "react"
import Nav from "./NavHOME"


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #FAF0E6;
    height: 200px; 
    width: 1000px;
justify-content: center;
    border-radius: 0px 0px 25px 25px;
    font-size: 20px;
    font-family: Times;
    border-top-style: double;
    order: 3;
`;

const Major = styled.p`
    text-align: center;
    font-family: Times;
    font-size: 25px;
    order: 1; 

`;

function Info () {
    return (
        <Wrapper>
            <Major>
                Computer Science Major <br/> Mathematics Minor
            <hr/>
                Penn State Schreyer<br/>Class of 2024
            </Major>
            <Nav />
        </Wrapper>
    );
}

export default Info