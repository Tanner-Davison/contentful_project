import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import PagesContent from "../components/PagesContent"

const PageComponents = ({ content }) => {
  // Accessing the nested sections array
  
  const sections = content[0]?.sections || [];
console.log(sections)
  return (
    <div className='page-content'>
      {sections.map((section, index) => (
        <PagesContent key={index} section={section} />
      ))}
    </div>
  );
};

const ContentfulPost = ({ data }) => {
  const { contentfulPage } = data;
  const availableComponents = contentfulPage.availableComponents || {};
  console.log({LOOKHERE: availableComponents})
  const Headline = styled.h2`
  ${text.h2}
  text-align: center;
  `
  return (
    <Layout>
      {contentfulPage?.header && <Headline>{contentfulPage?.header}</Headline>}
      <PageComponents content={availableComponents} />
    </Layout>
  )
}

export const query = graphql`
  query Components($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      header
    availableComponents {
      sections {
        ... on ContentfulContentAndImage {
          id
          componentTitle
          body {
            raw
          }
          bodyHeader
          contentSide
          image {
            url
          }
          imageOrientation
        }
        ... on ContentfulSimpleCentered {
          id
          componentTitle
          headline
        }
      }
    }
    }
  }
`

export default ContentfulPost
