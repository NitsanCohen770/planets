import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { venusTheme } from "../themes"

const Venus = props => (
  <Layout theme={venusTheme} path={props.location.pathname}>
    <Seo title="Venus" />
  </Layout>
)

export default Venus
