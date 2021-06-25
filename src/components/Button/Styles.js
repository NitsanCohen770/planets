import styled from "styled-components"

export const StyledButton = styled.div`
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 281px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > div:first-child {
    display: block;
    margin-right: 25px;
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 25px;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #ffffff;
  }

  > div:last-child {
    display: block;
    margin-right: 25px;
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 9px;
    line-height: 25px;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`
