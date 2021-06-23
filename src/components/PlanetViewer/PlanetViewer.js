import React from "react"
import PropTypes from "prop-types"

const PlanetViewer = ({ planetImages, internalImages, geologyImages }) => {
  return (
    <div>
      <img src={planetImages[0].publicURL} alt={planetImages[0].name} />
    </div>
  )
}

PlanetViewer.propTypes = {}

export default PlanetViewer
