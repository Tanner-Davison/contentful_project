import * as React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  const contentfulPage = data.contentfulPage

  const title = contentfulPage?.title


  console.log(content)

  return (
    <Layout>
      <ol style={{ listStyle: `none` }}>
        <li key={contentfulPage.id}>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <span itemProp="headline">{title}</span>
              </h2>
            </header>
            <section>
            
            </section>
          </article>
        </li>
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    contentfulPage(id: { eq: "18e36f21-fcad-5752-b645-5ad96545230f" }) {
      id
      header
    }
  }
`
