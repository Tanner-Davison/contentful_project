import * as React from "react"
import { Link, graphql } from "gatsby"
import {useEffect} from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomeIndex = ({ data }) => {
  const posts = data?.allContentfulPage?.edges

  return (
    <Layout>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post?.node?.title || post?.node?.slug

          return (
            <li key={post?.node?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post?.node?.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default HomeIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          slug
        }
      }
    }
  }
`
