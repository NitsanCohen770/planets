import React from "react"
import { useLocation } from "@reach/router"
import data from "../../content/data.json"
import PlanetInfo from "../PlanetInfo/PlanetInfo"
import { DataFooterWrapper } from "./styles"
const DataFooter = () => {
  const location = useLocation()
  const currentPlanetData = data.filter(
    ({ name }) =>
      name.toLocaleLowerCase() === location.pathname.split("/").join("")
  )

  return (
    <DataFooterWrapper>
      <PlanetInfo
        mainText="rotation time"
        subText={currentPlanetData[0].rotation}
      ></PlanetInfo>
      <PlanetInfo
        mainText="revolution time"
        subText={currentPlanetData[0].revolution}
      ></PlanetInfo>
      <PlanetInfo mainText="radius" subText={data[0].radius}></PlanetInfo>
      <PlanetInfo
        mainText="average temperature"
        subText={currentPlanetData[0].temperature}
      ></PlanetInfo>
    </DataFooterWrapper>
  )
}

DataFooter.propTypes = {}

export default DataFooter
