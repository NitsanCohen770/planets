import React from "react"
import PropTypes from "prop-types"
import data from "../../content/data.json"
import PlanetInfo from "../PlanetInfo/PlanetInfo"
import { DataFooterWrapper } from "./styles"
const DataFooter = ({ chosenView }) => {
  console.log(chosenView)
  return (
    <DataFooterWrapper>
      <PlanetInfo
        mainText="rotation time"
        subText={data[chosenView].rotation}
      ></PlanetInfo>
      <PlanetInfo
        mainText="revolution time"
        subText={data[chosenView].revolution}
      ></PlanetInfo>
      <PlanetInfo
        mainText="radius"
        subText={data[chosenView].radius}
      ></PlanetInfo>
      <PlanetInfo
        mainText="average temperature"
        subText={data[chosenView].temperature}
      ></PlanetInfo>
    </DataFooterWrapper>
  )
}

DataFooter.propTypes = {}

export default DataFooter
