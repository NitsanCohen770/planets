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
import Button from "../Button/Button"

const Layout = ({ children, theme, path }) => {
  console.log(theme)
  console.log(path)
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
  console.log(planetURL)
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar path={path} />
        <PlanetViewer
          planetImages={planetURL}
          internalImages={internalURL}
          geologyImages={geologyURL}
        />
        {children}
        <Button mainText="Testing" subText="Tester"></Button>
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
