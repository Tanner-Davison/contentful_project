import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ContentfulPost = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  const contentfulPage = data.contentfulPage;

  const header = contentfulPage?.header
  const content = JSON.parse(contentfulPage?.body?.raw, null, 2)
  const bodyHeadline = contentfulPage?.bodyHeader;
  const bodyText = documentToReactComponents(content)
  const Hero = contentfulPage?.heroImage?.url
  const imageAlt = contentfulPage?.heroImage?.description
  console.log(content)

  return (
    <Layout>
      <Wrapper>
        {header && <Header>{header}</Header>}
        <ImageAndContent>
          <BodyWrapper>
            
          {bodyHeadline && <BodyHeadline>{bodyHeadline}</BodyHeadline>}
          <Body>{bodyText}</Body>
          </BodyWrapper>
          {Hero && <HeroImage src={Hero} alt={imageAlt} />}
        </ImageAndContent>
      </Wrapper>
    </Layout>
  )
}
export default ContentfulPost
const Header = styled.h1`
  ${text.h1}
  text-align:center;
`
const HeroImage = styled.img`
  width: 31.25vw;
  max-height: 100%;
`
const BodyHeadline = styled.h3`
${text.h3}
`
const Body = styled.p`
${text.bodyM}
color:${colors.primaryblack};
max-width: 34.722vw;
b {
  font-weight: bolder;
  font-size: larger;
}
`
const BodyWrapper=styled.div`
display:flex;
flex-direction: column;

`
const ImageAndContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.083vw;
  overflow: hidden;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const query = graphql`
  query ($slug: String) {
    contentfulPage(slug: { eq: $slug }) {
      id
      header
      heroImage {
        url
      }
      bodyHeader
      body {
        raw
      }
    }
  }
`
