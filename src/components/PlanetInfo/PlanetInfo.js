import React from "react"
import PropTypes from "prop-types"
import { PlanetInfoWrapper } from "./style"
const PlanetInfo = ({ mainText, subText }) => {
  return (
    <PlanetInfoWrapper>
      <div>
        <div>{mainText}</div>
        <div>{subText}</div>
      </div>
    </PlanetInfoWrapper>
  )
}

PlanetInfo.propTypes = {}

export default PlanetInfo
