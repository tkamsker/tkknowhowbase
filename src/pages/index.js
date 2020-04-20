import React from "react"
import { Link } from "gatsby"
import Counter from './counter'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Counter header="This is the Index Counter" />
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


    <div>
          <h2>Markdown Index</h2>
          <p>The table below sorts out all Markdown pages that are not inside the "Markdown Posts" chapter - as defined inside their frontmatter. It also applies a filter, to only display the latest 10 posts. Click on here to display &nbsp;
          <Link to="/md-posts/">
              all Markdown pages
          </Link>
          .</p>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
            {data.allMarkdownRemark.edges.map(post => (
              <tr key={post.node.id}>
                <td>
                  {post.node.frontmatter.date}
                </td>
                <td>
                  <Link
                    to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                  </Link>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>

    <Link to="/page-2/">Go to page 2</Link>
     <Counter />
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { chapter: {eq: "Markdown Posts"} }}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
