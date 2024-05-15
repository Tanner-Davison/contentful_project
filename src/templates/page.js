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
        <PagesContent id='smooth-content' key={index} section={section ? section : {}} />
      ))}
    </div>
  )
}

const ContentfulPost = ({ data }) => {
  const { contentfulPage } = data
  const { fieldSection } = contentfulPage
  return (

    <Layout id='smooth-wrapper' title={"Home"}>
      <PageComponents content={fieldSection ? fieldSection : {}} />
    </Layout>

  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      id
      about
      fieldSection {
        __typename
        ... on ContentfulContentAndImage {
          id
          eyebrow
          body {
            raw
          }
          bodyHeader
          bodyHeaderColor
          componentTitle
          eyebrowColor
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
          scrollToText
          rowOrColumn
          scrollToTarget
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
        ... on ContentfulFullWidthVideoBackground {
            id
            header
            videoPageBody
            linkText
            quotedBy
            spacing
          }
      }
    }
  }
`


export default ContentfulPost
