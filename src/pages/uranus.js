import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import { uranusTheme } from "../themes"

const Uranus = props => (
  <Layout theme={uranusTheme} path={props.location.pathname}>
    <Seo title="Uranus" />
  </Layout>
)

export default Uranus
