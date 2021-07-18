import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"

const PlanetViewer = ({
  planetImages,
  internalImages,
  geologyImages,
  currentView,
}) => {
  const location = useLocation()
  console.log(location.pathname)
  const planetSVG = [planetImages, internalImages, geologyImages]
  return (
    <div style={{ display: "inline", marginTop: "70px" }}>
      {currentView === 2 ? (
        <div style={{ position: "relative" }}>
          {" "}
          <img src={planetSVG[0][0].publicURL} alt={planetSVG[0][0].name} />
          <img
            style={
              location.pathname !== "/saturn" || location.path === "/jupiter"
                ? {
                    position: "absolute",
                    left: "25%",
                    bottom: "-40%",
                    width: "200px",
                    height: "250px",
                  }
                : {
                    position: "absolute",
                    left: "35%",
                    bottom: "-10%",
                    width: "200px",
                    height: "250px",
                  }
            }
            src={planetSVG[currentView][0].publicURL}
            alt={planetSVG[currentView][0].name}
          />
        </div>
      ) : (
        <img
          src={planetSVG[currentView][0].publicURL}
          alt={planetSVG[currentView][0].name}
        />
      )}
    </div>
  )
}

PlanetViewer.propTypes = {
  planetImages: PropTypes.object.isRequired,
  internalImages: PropTypes.object.isRequired,
  geologyImages: PropTypes.object.isRequired,
}

export default PlanetViewer
