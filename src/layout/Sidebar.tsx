import Link from "gatsby-link"
import React, { FunctionComponent } from "react"

interface Props {
  siteTitle: string
}

const Header: FunctionComponent<Props> = ({ siteTitle = "" }: Props) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
