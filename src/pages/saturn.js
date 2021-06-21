import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { saturnTheme } from "../themes"

const Saturn = props => (
  <Layout theme={saturnTheme} path={props.location.pathname}>
    <Seo title="Saturn" />
  </Layout>
)

export default Saturn
