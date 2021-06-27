/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "./globalStlyes"
import NavBar from "../NavBar/NabBar"
import { ThemeProvider } from "styled-components"
import PlanetViewer from "../PlanetViewer/PlanetViewer"
import DataView from "../DataView/DataView"
import DataFooter from "../DataFooter/DataFooter"

const Layout = ({ children, theme, path }) => {
  const planetName = path.split("/")[1]
  const imagesPath = useStaticQuery(graphql`
    query SiteImageLinks {
      allFile {
        nodes {
          name
          publicURL
        }
      }
    }
  `)
  const internalURL = imagesPath.allFile.nodes.filter(({ name }) =>
    name.includes("internal")
  )
  const geologyURL = imagesPath.allFile.nodes.filter(({ name }) =>
    name.includes("geology")
  )
  const planetURL = imagesPath.allFile.nodes.filter(
    ({ name }) => name.includes("planet") && !name.includes("internal")
  )
  const iconSource = imagesPath.allFile.nodes.filter(
    ({ name }) => name === "icon-source"
  )
  console.log(iconSource)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar path={path} />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
          }}
        >
          <PlanetViewer
            planetImages={planetURL.filter(({ name }) => {
              return name.split("-")[1] === planetName
            })}
            internalImages={internalURL.filter(({ name }) => {
              return name.split("-")[1] === planetName
            })}
            geologyImages={geologyURL.filter(({ name }) => {
              return name.split("-")[1] === planetName
            })}
          />
          {children}
          <DataView
            planetName={planetName}
            iconSource={iconSource[0].publicURL}
          />
        </div>
        <DataFooter></DataFooter>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
