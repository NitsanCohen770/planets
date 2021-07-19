import styled from "styled-components"
import { device } from "../../screenSizes"
export const StyledButton = styled.div`
  background-color: ${props => props.isActive && props.theme.color};
  cursor: pointer;
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 350px;
  margin-bottom: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media ${device.tablet} {
    width: 281px;
    height: 40px;
  }
  &:hover {
    background-color: rgba(216, 216, 216, 0.2);
  }
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
    opacity: 0.5;
    padding-left: 28px;
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
  }
`
