import React from "react"
import PropTypes from "prop-types"

const PlanetViewer = ({
  planetImages,
  internalImages,
  geologyImages,
  currentView,
}) => {
  const planetSVG = [planetImages, internalImages, geologyImages]
  return (
    <div style={{ display: "inline", marginTop: "70px" }}>
      <img
        src={planetSVG[currentView][0].publicURL}
        alt={planetSVG[currentView][0].name}
      />
    </div>
  )
}

PlanetViewer.propTypes = {
  planetImages: PropTypes.object.isRequired,
  internalImages: PropTypes.object.isRequired,
  geologyImages: PropTypes.object.isRequired,
}

export default PlanetViewer
