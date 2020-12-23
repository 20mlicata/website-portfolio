import styled from "styled-components"
import React from "react"
import NavBar from "./Nav";

const PageHolder = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background:
    linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
    linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
    background-color:#708090;
    background-size: 64px 128px;
}
`;

function Projects() {
    return(
        <PageHolder>
            <NavBar />
            HI
        </PageHolder>
    );
}
export default Projects