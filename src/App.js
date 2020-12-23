import './App.css';
import React from "react";
import styled from "styled-components";
import Home from "./components/HomePage";
import Resume from "./components/ResumePage";
import Hobbies from "./components/HobbiesPage"
import Projects from "./components/ProjectsPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Box = styled.div`
    display: flex;
    flex-direction: column;
    
`;

function App() {
        return (
            <BrowserRouter>
                <Box>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/resume' component={Resume}/>
                        <Route path='/Hobbies' component={Hobbies}/>
                        <Route path='/Projects' component={Projects}/>
                    </Switch>
                </Box>
            </BrowserRouter>

        );
    }


export default App;
