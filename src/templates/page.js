import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import PagesContent from "../utils/PagesContent"

const PageComponents = ({ content }) => {
  return (
    <div>
      {content.map((section, index) => (
        <PagesContent key={index} section={section ? section : {}} />
      ))}
    </div>
  )
}

const ContentfulPost = ({ data }) => {
  const { contentfulPage } = data
  const { fieldSection } = contentfulPage
  console.log(data)

  return (

    <Layout title={"home"}>
      {data?.header && <Headline>{data.header}</Headline>}
      <PageComponents content={fieldSection ? fieldSection : {}} />
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
      id
      header
      fieldSection {
        __typename
        ... on ContentfulContentAndImage {
          id
          header
          body {
            raw
          }
          bodyHeader
          bodyHeaderColor
          componentTitle
          headerColor
          contentSide
          image {
            url
          }
          imageOrientation
          spacing
          backgroundColor
          bodyTextColor
        }
        ... on ContentfulSimpleCentered {
          id
          componentTitle
          headline
          spacing
        }
        ... on ContentfulFullWidthBackgroundImageCenteredContent {
          eyebrow
          header
          body{
            body
          }
          rowOrColumn
          bgImage{
            url
          }
          spacing
        }
        ... on ContentfulPinnedScrollLayout {
          id
          leftHeaders
          spacing
          bodySectionOne {
            raw
          }
          bodySectionTwo{
            raw
          }
          bodySectionThree{
            raw
          }
          bodySectionFour{
            raw
          }
          imagesArray {
            title
            file {
              url
            }
          }
          textBodyImages{
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`


export default ContentfulPost
