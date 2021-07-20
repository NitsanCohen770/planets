import React from "react"
import PropTypes from "prop-types"
import { device } from "../../screenSizes"
import { useMediaQuery } from "react-responsive"
import { useLocation } from "@reach/router"

const PlanetViewer = ({
  planetImages,
  internalImages,
  geologyImages,
  currentView,
}) => {
  const isTablet = useMediaQuery({
    query: device.tablet,
  })
  const isMobile = useMediaQuery({
    query: device.mobileL,
  })
  const location = useLocation()
  console.log(location.pathname)
  const planetSVG = [planetImages, internalImages, geologyImages]
  return (
    <div
      style={
        !isTablet
          ? { display: "inline", marginTop: "70px" }
          : { display: "block", textAlign: "center", marginTop: "70px" }
      }
    >
      {currentView === 2 ? (
        <div style={{ position: "relative" }}>
          {" "}
          <img
            style={
              isMobile ? { width: "50%", height: "50%", marginTop: "76px" } : {}
            }
            src={planetSVG[0][0].publicURL}
            alt={planetSVG[0][0].name}
          />
          <img
            style={
              location.pathname !== "/saturn" ||
              (location.path === "/jupiter" && isMobile)
                ? {
                    position: "absolute",
                    left: "36%",
                    bottom: "-15%",
                    width: "100px",
                    height: "120px",
                  }
                : {
                    position: "absolute",
                    left: "36%",
                    bottom: "-15%",
                    width: "100px",
                    height: "120px",
                  }
            }
            src={planetSVG[currentView][0].publicURL}
            alt={planetSVG[currentView][0].name}
          />
        </div>
      ) : (
        <img
          style={
            isMobile ? { width: "50%", height: "50%", marginTop: "76px" } : {}
          }
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
