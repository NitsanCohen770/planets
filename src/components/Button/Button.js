import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./Styles"

const Button = ({
  size,
  width,
  height,
  mainText,
  subText,
  isActive,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      size={size}
      width={width}
      height={height}
      isActive={isActive}
    >
      <div>{subText}</div>
      <div>{mainText}</div>
    </StyledButton>
  )
}

Button.propTypes = {}

export default Button
