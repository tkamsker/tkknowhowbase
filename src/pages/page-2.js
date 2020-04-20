import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({node}, index) =>
          <tr key={index}>
            <td>
              {node.relativePath}
            </td>
            <td>
              {node.prettySize}
            </td>
            <td>
              {node.extension}
            </td>
            <td>
              {node.birthTime}
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <p>Ende ------</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
          node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
        }
      }
    }
  }
`
export default SecondPage
