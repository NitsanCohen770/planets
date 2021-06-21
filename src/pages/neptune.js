import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { neptuneTheme } from "../themes"

const Neptune = props => (
  <Layout theme={neptuneTheme} path={props.location.pathname}>
    <Seo title="Neptune" />
  </Layout>
)

export default Neptune
