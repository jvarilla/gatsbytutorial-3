import React from "react"
import { graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          style={{display: `inline-block`, borderBottom: `1px solid`}}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 style={ { marginBottom: `.25%`} }>
              {node.frontmatter.title}{" "}
              <span
                style={{ color: `#bbb`}}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p><div dangerouslySetInnerHTML={{__html: node.html }} /></p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
  allMarkdownRemark(limit: 1) {
    edges {
      node {
        frontmatter {
          title
          date
        }
        excerpt
        timeToRead
        html
      }
    }
  }
}

`