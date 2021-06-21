import * as React from "react"
import { earthTheme } from "../themes/earthTheme"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const Earth = props => {
  console.log(props)
  return (
    <Layout theme={earthTheme} path={props.location.pathname}>
      <Seo title="Earth" />
    </Layout>
  )
}
export default Earth
