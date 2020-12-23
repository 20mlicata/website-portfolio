import styled from "styled-components"
import React from "react"
import { Link } from 'react-router-dom'




function Nav() {

    const Navbar = styled.div`
        display: block; 
        height: 75px;
        line-height: 75px;
        order: 2;
    `;

    const List = styled.li`
        display: block;
        font-color: #708090;
        text-align: center;
        text-decoration: none; 
        :hover {
            background: #708090;
        }
        font-size: 25px;
        float: left;
        width: 150px;
    `;

    const BigList = styled.ul`
        list-style-type: none;
        padding: 0;
        margin: 50px;
        border
        width: 100%;
        top: 0;
        
    `;

    const style = {
        fontFamily: "Times",
        textDecoration: "none",
        color: "black",
    };

    return (
            <Navbar>
                <BigList>
                    <List>
                        <Link style={style} to="/">Home</Link>
                    </List>
                    <List>
                        <Link style={style} to="/resume">Resume</Link>
                    </List>
                    <List>
                        <Link style={style} to="/Hobbies">Hobbies</Link>
                    </List>
                    <List>
                        <Link style={style} to="/Projects">Projects</Link>
                    </List>
                </BigList>
            </Navbar>

    );
}

export default Nav