import styled from "styled-components"
import { device } from "../../screenSizes"

export const DataFooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 87px;
  @media ${device.mobileL} {
    display: block;
    padding-top: 0;
  }
`
