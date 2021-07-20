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
  @media ${device.mobileL} {
    display: block;
    width: 327px;
    height: 48px;
    align-items: center;
    margin: auto;
    margin-bottom: 8px;
  }
  > div:first-child {
    margin-left: 15px;
    margin-top: 16px;
    @media ${device.mobileL} {
      display: flex;
      font-size: 8px;
      margin: auto;
      width: 327px;
      height: 48px;
      align-items: center;
    }
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
      @media ${device.mobileL} {
        display: inline-block;
        font-size: 8px;
        line-height: 16px;
        height: 16px;
        margin-left: 24px;
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
      @media ${device.mobileL} {
        display: block;
        font-size: 20px;
        height: 35px;
        margin-left: auto;
        margin-right: 24px;
      }
    }
  }
`
