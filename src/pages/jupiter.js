import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { jupiterTheme } from "../themes"

const Jupiter = props => (
  <Layout theme={jupiterTheme} path={props.location.pathname}>
    <Seo title="Jupiter" />
  </Layout>
)

export default Jupiter
