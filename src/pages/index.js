import * as React from "react"
import { Redirect } from "@reach/router"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

const Earth = () => (
  <Layout>
    <Seo title="Earth" />
    <Redirect to={"/Earth"} />
  </Layout>
)

export default Earth
