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
  console.log(content)

  return (
    <div>
      {content.fieldSection.map((section, index) => (
        <PagesContent key={index} section={section} />
      ))}
    </div>
  )
}

const ContentfulPost = ({ data }) => {
  console.log({ initialData: data.contentfulPage.field_section[0].fieldSection[0].components[0] })
  const components = data.contentfulPage.field_section[0].fieldSection[0].components[0];
  return (
    <Layout>
      {data?.header && <Headline>{data.header}</Headline>}
      <PageComponents content={components} />
    </Layout>
  )
}
const Headline = styled.h2`
  ${text.h2}
  text-align: center;
`
export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      header
      field_section {
        fieldSection {
          ... on ContentfulContentAndImage {
            components {
              fieldSection {
                ... on ContentfulContentAndImage {
                  id
                  spacing
                  imageOrientation
                  image {
                    url
                  }
                  headerColor
                  contentSide
                  componentTitle
                  bodyHeader
                  body {
                    raw
                  }
                }
                ... on ContentfulSimpleCentered {
                  componentTitle
                  headline
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ContentfulPost
