import React from "react"
import Link from "gatsby-link"

import SEO from "../core/seo"

import Standard from "../templates/standard"

import { Button } from "../elements/Button/Button"

const IndexPage = () => (
  <Standard>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button
      size="small"
      onClick={() => {
        console.log("on button click")
      }}
      label="Log out"
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Standard>
)

export default IndexPage
