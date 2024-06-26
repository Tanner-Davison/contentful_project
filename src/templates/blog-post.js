import * as React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from "../components/layout"

const BlogPostTemplate = ({data}) => {

  const contentfulBlogpost = data?.contentfulBlogpost

  const title = contentfulBlogpost?.title || ' title';
  const content = JSON.parse(contentfulBlogpost?.body?.raw, null, 2);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const alt = node.data.target.fields?.title['en-US'] || 'Main image';
        const url = node.data.target.fields?.file['en-US']?.url;

        return url ? <img alt={alt} src={url} /> : '';
      }
    }
  };

  return (
    <Layout >
    <ol style={{ listStyle: `none` }}>

          <li key={contentfulBlogpost.id}>
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

                {documentToReactComponents(content, options)}

              </section>
            </article>
          </li>

    </ol>
  </Layout>
  )
}

export default BlogPostTemplate;

export const query = graphql`
  query ($slug: String)  {
    contentfulBlogpost(slug: {eq: $slug}) {
      id,
      title,
      image {
        url
      }
      body {
        raw
      }
    }
  }
`;


