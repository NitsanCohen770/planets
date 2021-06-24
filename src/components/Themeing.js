import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { ThemeProvider } from "styled-components"
import { themeA, themeB } from "../themes"


const themesArray = [themeA, themeB]
const [chosenTheme, setChosenTheme] = useState(0);


export const DivWithThemes = styled.div`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`

const Theming = () => {

const changeTheme = () => {
    setChosenTheme(chosenTheme===0?1:0)
}
    return (
        <button onClick={changeTheme}>
         <DivWithThemes/>   
        </button>
    );
};


const App = () => {
    return <ThemeProvider theme={themesArray[chosenTheme]}><Theming/></ThemeProvider>
}




ReactDOM.render(

    <App />
 
  document.getElementById('root')
);



