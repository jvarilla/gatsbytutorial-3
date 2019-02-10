import React from "react"
import { graphql } from "gatsby"
import LayoutPanda from "../components/layoutPanda"

export default ({ data }) => (
  <LayoutPanda>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </LayoutPanda>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`