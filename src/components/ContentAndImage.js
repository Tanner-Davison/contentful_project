import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ContentfulPost = ({ content }) => {
  console.log(content)

  const siteTitle = content?.site?.siteMetadata?.title || `Title`
  console.log(content)
  const parsedBody =
    content?.body?.raw && JSON.parse(content?.body?.raw, null, 2)

  const text = {
    eyebrow: content?.eyebrow,
    header: content?.header,
    headline: content?.bodyHeader,
    color: content?.colors,
    body: documentToReactComponents(parsedBody),
    side: content?.contentSide,
  }
  const image = {
    url: content?.image?.url,
    alt: content?.image?.alt,
    orientation: content?.imageOrientation,
  }

  return (
    <Wrapper>
      {text.header && <Header>{text.header}</Header>}
      <ImageAndContent $side={text.side}>
        <BodyWrapper>
          {text.headline && (
            <BodyHeadline $color={text.color}>{text.headline}</BodyHeadline>
          )}
          {text.body && <Body>{text?.body}</Body>}
        </BodyWrapper>
        {image.url && (
          <HeroImage
            src={image.url}
            alt={"hello"}
            $orientation={image.orientation}
          />
        )}
      </ImageAndContent>
    </Wrapper>
  )
}
export default ContentfulPost
const Header = styled.h1`
  ${text.h1}
  text-align:center;
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
const Body = styled.div`
  ${text.bodyM};
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
  flex-direction: ${props => (props.$side ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  gap: 5.069vw;
  width: 80vw;
  ${media.fullWidth} {
    gap: 73px;
    width: 1152px;
  }

  ${media.tablet} {
    gap: 7.129vw;
    width: 80vw;
  }

  ${media.mobile} {
    width: 80vw;
    flex-direction: column-reverse;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
