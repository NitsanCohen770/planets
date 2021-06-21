import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { mercuryTheme } from "../themes"

const Mercury = props => (
  <Layout theme={mercuryTheme} path={props.location.pathname}>
    <Seo title="Mercury" />
  </Layout>
)

export default Mercury
