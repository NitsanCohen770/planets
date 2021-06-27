import styled from "styled-components"

export const PlanetInfoWrapper = styled.div`
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 255px;
  height: 128px;
  margin-bottom: 16px;
  padding-left: 23px;
  padding-top: 24px;

  > div:first-child {
    display: block;
    height: 25px;
    font-family: Spartan;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  > div:last-child {
    display: block;
    height: 52px;
    font-family: Antonio;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
    color: #ffffff;
  }
`
