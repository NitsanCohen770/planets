import styled from "styled-components"
import { device } from "../../screenSizes"
export const PlanetInfoWrapper = styled.div`
  mix-blend-mode: normal;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  width: 255px;
  height: 128px;
  margin-bottom: 16px;
  @media ${device.tablet} {
    width: 164px;
    height: 88px;
  }
  > div:first-child {
    margin-left: 15px;
    margin-top: 16px;
    > div:first-child {
      display: inline-block;
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
      @media ${device.tablet} {
        font-size: 8px;
        line-height: 16px;
        letter-spacing: 0.727273px;
      }
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
      @media ${device.tablet} {
        font-size: 24px;
        line-height: 31px;
        letter-spacing: -0.9px;
      }
    }
  }
`
