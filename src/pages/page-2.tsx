import React from "react"
import Link from "gatsby-link"

import Standard from "../templates/standard"

import SEO from "../core/seo"

const SecondPage = () => (
  <Standard>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Standard>
)

export default SecondPage
