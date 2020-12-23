import styled from "styled-components"
import React from "react"
import Container from "./Container"

const PageHolder = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh; 
    width: 100%;
    justify-content: center;
    align-items: center;
    background:
    linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
    linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
    background-color:#708090;
    background-size: 64px 128px;
}
    
`;

function Home () {
    return (
        <PageHolder>
            <Container />
        </PageHolder>
    );
}

export default Home