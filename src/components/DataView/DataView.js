import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
const DataView = ({ planetName, PlanetExplanation, source }) => {
  return (
    <div>
      <h1> {planetName}</h1>
      <article>{PlanetExplanation}</article>
      <div>{source}</div>
      <Button mainText="Testing" subText="Tester" />
      <Button mainText="Testing" subText="Tester" />
      <Button mainText="Testing" subText="Tester" />
    </div>
  )
}

DataView.propTypes = {}

export default DataView
