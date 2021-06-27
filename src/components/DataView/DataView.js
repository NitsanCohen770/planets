import React from "react"
import PropTypes from "prop-types"
import PlanetData from "../../content/data.json"
import { DataViewWrapper } from "./styles"
import Button from "../Button/Button"
const DataView = ({ planetName }) => {
  const currentPlanetData = PlanetData.filter(({ name }) => {
    return name.toLowerCase() === planetName
  })

  return (
    <DataViewWrapper>
      <h1> {currentPlanetData[0].name}</h1>
      <article>{currentPlanetData[0].overview.content}</article>
      <div>
        Source:
        <a href={currentPlanetData[0].overview.source}> Wikipedia</a>
      </div>
      <Button mainText="OVERVIEW" subText="01" />
      <Button mainText="INTERNAL STRUCTURE" subText="02" />
      <Button mainText="SURFACE GEOLOGY" subText="03" />
    </DataViewWrapper>
  )
}

DataView.propTypes = {
  planetName: PropTypes.string.isRequired,
}

export default DataView
