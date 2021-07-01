import { createGlobalStyle } from "styled-components"
import stars from "../../images/background-stars.svg"
export const GlobalStyles = createGlobalStyle`
body {
    background: #070724;
    background-image: url(${stars});
}
  

`