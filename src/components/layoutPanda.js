import React from "react"
// import { css } from "@emotion/core"
import { Link } from "gatsby"

// import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: `700px`, padding: `2%`, paddingTop: `1.5%` }}>
    <Link to={`/`}>
      <h3 style={{ marginBottom: `2%`, display: `inline-block`, fontStyle: `normal` }}>
        Pandas Eating Lots
      </h3>
    </Link>
    <Link to={`/about/`} style={{ float: `right` }}>
      About
    </Link>
    {children}
  </div>
)