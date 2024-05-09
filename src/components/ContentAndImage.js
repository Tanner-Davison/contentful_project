import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ContentfulPost = ({ content }) => {
  console.log(content)
  const siteTitle = content?.site?.siteMetadata?.title || `Title`
  const parsedBody =
    content?.body?.raw && JSON.parse(content?.body?.raw, null, 2)

  const text = {
    eyebrow: content?.eyebrow,
    header: content?.header,
    headline: content?.bodyHeader,
    bodyHeaderColor: content?.bodyHeaderColor,
    color: content?.colors,
    body: documentToReactComponents(parsedBody),
    side: content?.contentSide,
    textColor: content?.bodyTextColor,
    headerColor: content?.headerColor,
  }
  const image = {
    url: content?.image?.url,
    alt: content?.image?.alt,
    orientation: content?.imageOrientation,
  }

  return (
    <Wrapper>
      <ImageAndContent $side={text.side} $orientation={image?.orientation}>
        <AllTextWrapper>
          {text.eyebrow && (
            <Eyebrow
              $color={content.eyebrowColor}
              $orientation={image?.orientation}
            >
              {text.eyebrow}
            </Eyebrow>
          )}
          {text.headline && (
            <Header $color={text.bodyHeaderColor}>{text.headline}</Header>
          )}
          {text.body && <Body $color={content.bodyTextColor}>{text.body}</Body>}
        </AllTextWrapper>
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
const Eyebrow = styled.p`
  ${text.eyebrow}
  padding-left:0.278vw;
  margin: unset;
  align-self: flex-start;
  /* padding-left: ${props => (props.$orientation ? "3.611vw" : "unset")}; */
  color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  ${media.fullWidth} {
    padding-left: 4px;
    /* padding-left: ${props => (props.$orientation ? "52px" : "unset")}; */
  }
  ${media.tablet} {
    /* padding-left: ${props => (props.$orientation ? ".55vw" : "unset")}; */
    padding-left: 0.391vw;
  }
  ${media.mobile} {
    padding-left: 0.935vw;
    /* align-self: ${props => (props.$orientation ? "center" : "center")}; */
    text-align: center;
  }
`
const HeroImage = styled.img`
  height:30vw;
  width: 30vw;
  border-radius: 15px;
  -webkit-box-shadow: 9px 7px 15px -2px #000000;
  box-shadow: 9px 7px 15px -2px #000000;
  align-self: flex-start;
  ${media.fullWidth} {
    max-height: 27.778vw;
    width: 27.778vw;
  }

  ${media.tablet} {
    height: 39.063vw;
    width: 39.063vw;
    align-self: flex-start;
  }

  ${media.mobile} {
    align-self: center;
    height:70vw;
    width:70vw;
    margin-bottom: 5.841vw;
  }
`
const Header = styled.h2`
  ${text.h2}
  color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  margin: unset;

  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    ${text.h1Mobile}
  }
`
const Body = styled.div`
  ${text.bodyMComfort};
  padding-left: 0.278vw;
  p {
    color: ${props=> props.$color ? colors[props.$color]: 'inherit'}
   
  }
  b {
    font-weight: bolder;
    font-size: larger;
  }
 
  ${media.fullWidth} {
    padding-left: 4px;
  }

  ${media.tablet} {
    padding-left: 0.391vw;
  }

  ${media.mobile} {
    padding-left: 0.935vw;
    ul{
      padding:0vw 0vw 0vw 5vw;

    }
  }
`
const AllTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45.278vw;
  gap:1.042vw;
  ${media.fullWidth} {
    width: 652px;
    gap:15px;
  }

  ${media.tablet} {
    width: 45.063vw;
    gap:1.465vw;
  }

  ${media.mobile} {
    width: 100%;
    gap:2.336vw;
    align-items: flex-start;
  }
`
const ImageAndContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.$side ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  gap: 5.069vw;
  width: 100vw;
  ${media.fullWidth} {
    gap: 73px;
    width: 100%;
  }

  ${media.tablet} {
    gap: 5.129vw;
    width: 100vw;
  }

  ${media.mobile} {
    width: 88%;
    flex-direction: column-reverse;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* -webkit-box-shadow: 0px 21px 15px -18px #000000; 
box-shadow: 0px 21px 15px -18px #000000; */
  border-radius: 25px;
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }
  ${media.mobile} {
   
  }
`
