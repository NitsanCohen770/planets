import React from "react"
import PropTypes from "prop-types"
import PlanetInfo from "../PlanetInfo/PlanetInfo"
import { DataFooterWrapper } from "./styles"
const DataFooter = () => {
  return (
    <DataFooterWrapper>
      <PlanetInfo mainText="testing" subText="tester"></PlanetInfo>
      <PlanetInfo mainText="testing" subText="tester"></PlanetInfo>
      <PlanetInfo mainText="testing" subText="tester"></PlanetInfo>
      <PlanetInfo mainText="testing" subText="tester"></PlanetInfo>
    </DataFooterWrapper>
  )
}

DataFooter.propTypes = {}

export default DataFooter
