import styled from "styled-components"
import { device } from "../../screenSizes"
export const DataViewWrapper = styled.div`
  display: inline-block;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-around;
  }
  @media ${device.mobileL} {
    display: block;
    text-align: center;
    margin-top: 67px;
  }
  > div:first-child {
    > h1 {
      width: 158px;
      height: 104px;
      font-family: Antonio;
      font-style: normal;
      font-weight: normal;
      font-size: 80px;
      line-height: 104px;
      text-transform: uppercase;
      color: #ffffff;
      @media ${device.tablet} {
        font-size: 48px;
        line-height: 62px;
        margin-bottom: 0;
      }
      @media ${device.mobileL} {
        margin: auto;
      }
    }
    > article {
      width: 350px;
      height: 150px;
      left: 925px;
      top: 339px;

      font-family: Spartan;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
      color: #ffffff;
      @media ${device.tablet} {
        height: 110px;
        font-size: 11px;
        line-height: 22px;
      }
      @media ${device.mobileL} {
        margin: auto;
      }
    }
    > div:nth-child(3) {
      height: 25px;
      font-family: Spartan;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.5;
      padding-top: 49px;
      padding-bottom: 39px;
      @media ${device.tablet} {
        font-size: 12px;
        line-height: 25px;
        padding-top: 32px;
      }
      > a {
        color: #ffffff;
        mix-blend-mode: normal;
      }
      > img {
        margin-left: 10px;
      }
    }
  }
  > div:last-child {
    margin-top: 70px;
  }
`
