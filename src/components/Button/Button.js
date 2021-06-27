import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./Styles"

const Button = ({ size, width, height, mainText, subText }) => {
  const dataChangeHandler = () => {
    const section = mainText
    const imageIndex = subText
  }
  return (
    <StyledButton
      onClick={dataChangeHandler}
      size={size}
      width={width}
      height={height}
    >
      <div>{subText}</div>
      <div>{mainText}</div>
    </StyledButton>
  )
}

Button.propTypes = {}

export default Button
