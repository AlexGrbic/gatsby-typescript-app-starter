import React from "react"

import SEO from "../../core/seo"

import Standard from "../../templates/standard"

const NotFoundPage = () => (
  <Standard>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Standard>
)

export default NotFoundPage
