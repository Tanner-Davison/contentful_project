import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ContentfulPost = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  const { contentfulPage } = data
  const content =
    contentfulPage?.body?.raw && JSON.parse(contentfulPage?.body?.raw, null, 2)

  const text = {
    eyebrow: contentfulPage?.eyebrow,
    header: contentfulPage?.header,
    headline: contentfulPage?.bodyHeader,
    color: contentfulPage?.colors,
    body: documentToReactComponents(content),
  }
  const image = {
    url: contentfulPage?.heroImage?.url,
    alt: contentfulPage?.heroImage?.alt,
    orientation: contentfulPage?.imageOrientation,
  }

  return (
    <Layout>
      <Wrapper>
        {text.header && <Header>{text.header}</Header>}
        <ImageAndContent>
          <BodyWrapper>
            {text.headline && (
              <BodyHeadline $color={text.color}>{text.headline}</BodyHeadline>
            )}
            {text.body && <Body>{text?.body}</Body>}
          </BodyWrapper>
          {image.url && (
            <HeroImage
              src={image.url}
              alt={image.alt}
              $orientation={image.orientation}
            />
          )}
        </ImageAndContent>
      </Wrapper>
    </Layout>
  )
}
export default ContentfulPost
const Header = styled.h1`
  ${text.h1}
  text-align:center;
  max-width: 60vw;
`
const HeroImage = styled.img.attrs(props => ({
  width: props.$orientation ? "27.778vw" : "40%",
}))`
  height: auto;
`
const BodyHeadline = styled.p`
  ${text.bodyXLBold}
  color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  margin: unset;
`
const Body = styled.p`
  ${text.bodyM};
  max-width: 34.722vw;
  b {
    font-weight: bolder;
    font-size: larger;
  }
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageAndContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.083vw;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

