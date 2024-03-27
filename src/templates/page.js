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
  console.log(content);
  
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
  const {field_section} = contentfulPage;
  const Headline = styled.h2`
  ${text.h2}
  text-align: center;
  `
  return (
    <>
     {typeof window !== "undefined" &&
    <Layout>
      {data?.header && <Headline>{data.header}</Headline>}
      <PageComponents content={field_section[0]?.fieldSection} />
    </Layout>
  }
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      header
    slug
    field_section {
      fieldSection {
        ... on ContentfulContentAndImage {
          id
          body {
            raw
          }
          bodyHeader
          componentTitle
          headerColor
          contentSide
          imageOrientation
          image {
            url
          }
          spacing
        }
        ... on ContentfulSimpleCentered {
          id
          headline
          componentTitle
        }
      }
    }
    }
  }
`
export default ContentfulPost
