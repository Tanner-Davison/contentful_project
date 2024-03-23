import * as React from 'react'
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
const ContentfulPost = ({data}) => {
    const siteTitle = data?.site?.siteMetadata?.title || `Title`
    const contentfulHomepage = data?.contentfulHomepage
  
    const title = contentfulHomepage?.title
    const content = JSON.parse(contentfulHomepage?.body?.raw, null, 2)
  
    console.log(content)
  
    return (
      <Layout>
        <ol style={{ listStyle: `none` }}>
          <li key={contentfulHomepage.id}>
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
                {/* <p
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                      itemProp="description"
                    /> */}
  
                {documentToReactComponents(content)}
              </section>
            </article>
          </li>
        </ol>
      </Layout>
    )
  }
export default ContentfulPost

export const query = graphql`
query ($slug: String!) {
    contentfulHomepage(slug: {eq: $slug}){
        id,
        header,
        body{
            raw
        }
        heroImage{
            url
        }
    }
}
`