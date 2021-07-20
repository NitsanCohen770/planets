import React from "react"
import PropTypes from "prop-types"
import PlanetData from "../../content/data.json"
import { DataViewWrapper } from "./styles"
import { useMediaQuery } from "react-responsive"
import { device } from "../../screenSizes"
import Button from "../Button/Button"
const DataView = ({ planetName, iconSource, setView, currentView }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: device.mobileL,
  })
  const currentPlanetData = PlanetData.filter(({ name }) => {
    return name.toLowerCase() === planetName
  })

  return (
    <DataViewWrapper>
      <div>
        <h1> {currentPlanetData[0].name}</h1>
        <article>
          {currentView === 0 && currentPlanetData[0].overview.content}
          {currentView === 1 && currentPlanetData[0].structure.content}
          {currentView === 2 && currentPlanetData[0].geology.content}
        </article>
        <div>
          Source:
          {currentView === 0 && (
            <a href={currentPlanetData[0].overview.source}> Wikipedia</a>
          )}
          {currentView === 1 && (
            <a href={currentPlanetData[0].structure.source}> Wikipedia</a>
          )}
          {currentView === 2 && (
            <a href={currentPlanetData[0].geology.source}> Wikipedia</a>
          )}
          <img src={iconSource} />
        </div>
      </div>
      <div>
        <Button
          style={{ top: "12%", left: "0" }}
          mainText="OVERVIEW"
          subText="01"
          onClick={() => setView(0)}
          isActive={currentView === 0}
          width="2"
        />
        <Button
          style={{ top: "12%", right: "33.33%" }}
          mainText={isDesktopOrLaptop ? "INTERNAL" : "INTERNAL STRUCTURE"}
          subText="02"
          onClick={() => setView(1)}
          isActive={currentView === 1}
        />
        <Button
          style={{ top: "12%", right: "0" }}
          mainText={isDesktopOrLaptop ? "SURFACE" : "SURFACE GEOLOGY"}
          subText="03"
          onClick={() => setView(2)}
          isActive={currentView === 2}
        />
      </div>
    </DataViewWrapper>
  )
}

DataView.propTypes = {
  planetName: PropTypes.string.isRequired,
}

export default DataView
