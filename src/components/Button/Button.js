import React from "react"
import PropTypes from "prop-types"
import { useMediaQuery } from "react-responsive"
import { device } from "../../screenSizes"
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
  const isDesktopOrLaptop = useMediaQuery({
    query: device.mobileL,
  })

  return (
    <StyledButton
      {...props}
      size={size}
      width={width}
      height={height}
      isActive={isActive}
    >
      {!isDesktopOrLaptop && <div>{subText}</div>}
      <div>{mainText}</div>
    </StyledButton>
  )
}

Button.propTypes = {}

export default Button
