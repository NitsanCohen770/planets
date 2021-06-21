import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { marsTheme } from "../themes"

const Mars = props => (
  <Layout theme={marsTheme} path={props.location.pathname}>
    <Seo title="Mars" />
  </Layout>
)

export default Mars
