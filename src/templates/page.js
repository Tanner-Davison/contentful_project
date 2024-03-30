import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import PagesContent from "../components/PagesContent"

const PageComponents = ({ content }) => {
  return (
    <div>
      {content.map((section, index) => (
        <PagesContent key={index} section={section ? section : {}} />
      ))}
    </div>
  );
};

const ContentfulPost = ({ data }) => { 
  const { contentfulPage } = data;
  const {field_section} = contentfulPage;
  console.log(field_section?.__typename);
  
  
  return (
    <Layout>
      {data?.header && <Headline>{data.header}</Headline>}
      <PageComponents content={field_section? field_section : {}} />
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
      field_section {
        __typename
          ... on ContentfulContentAndImage {
            id
            body {
              raw
            }
            bodyHeader
            componentTitle
            headerColor
            image {
              url
            }
            imageOrientation
            spacing
          }
          ... on ContentfulSimpleCentered {
            id
            componentTitle
            headline
          }
      }
    }
  }`
export default ContentfulPost
