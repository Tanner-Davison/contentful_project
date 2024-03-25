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
  return (
    <div>
      {content.map((section, index) => (
        <PagesContent key={index} section={section} />
      ))}
    </div>
  );
};

const ContentfulPost = ({ data }) => {
  console.log({initialData:data})
  const { contentfulPage } = data;
  const {availableComponents} = contentfulPage;
  const Headline = styled.h2`
  ${text.h2}
  text-align: center;
  `
  return (
    <Layout>
      {data?.header && <Headline>{data.header}</Headline>}
      <PageComponents content={availableComponents?.sections} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
