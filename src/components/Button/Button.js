import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./Styles"

const Button = ({ size, width, height, mainText, subText }) => {
  return (
    <StyledButton size={size} width={width} height={height}>
      <div>{subText}</div>
      <div>{mainText}</div>
    </StyledButton>
  )
}

Button.propTypes = {}

export default Button
