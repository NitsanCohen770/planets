import React from "react"
import PropTypes from "prop-types"
import * as planets from "../../images/index"
const PlanetViewer = () => {
  return (
    <div>
      <img src={planets.earth} />
    </div>
  )
}

PlanetViewer.propTypes = {}

export default PlanetViewer
