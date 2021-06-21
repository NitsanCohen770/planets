import styled from "styled-components"
import { device } from "../../screenSizes"
import * as themes from "../../themes"
export const StyledListItem = styled.li`
  list-style-type: none;
  display: inline;
  margin-right: 33px;
  > img {
    display: none;
  }
  @media ${device.tablet} {
    grid-row: 2;
    justify-self: center;
  }
  @media ${device.mobileL} {
    list-style-type: circle;
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin-right: 0px;

    > div {
      background: ${props => `${themes[`${props.hoverColor}Theme`].color}`};
      display: inline-block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-right: 25px;
      vertical-align: middle;
    }
    > img {
      display: inline-table;
      float: right;
      padding-top: 28px;
    }
  }
  > a {
    color: ${props =>
      props.isHovering ? "white" : "rgba(255, 255, 255, 0.85)"};
    padding-top: 28px;
    border-top: solid 4px
      ${props =>
        props.isHovering
          ? `${themes[`${props.hoverColor}Theme`].color}`
          : "transparent"};
    @media ${device.tablet} {
      padding-top: 15px;
    }
    @media ${device.mobileL} {
      border-top: none;
      font-family: Spartan;
      font-style: normal;
      font-weight: bold;
      font-size: 15px !important;
      line-height: 25px;
      letter-spacing: 1.36364px !important;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`
