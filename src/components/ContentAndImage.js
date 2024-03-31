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
      {text.header && <Header $color={text.headerColor} $orientation={image.orientation}>{text.header}</Header>}
      <ImageAndContent $side={text.side} $orientation={image.orientation}>
        <BodyWrapper>
          {text.headline && (
            <BodyHeadline $color={text.bodyHeaderColor}>
              {text.headline}
            </BodyHeadline>
          )}
          {text.body && <Body $color={text.textColor}>{text.body}</Body>}
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
  text-align:'center';
  align-self:${props=> props.$orientation ? 'start':'center'}; 
  padding-left: ${props=> props.$orientation ? '3.611vw': 'unset'};
  color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  ${media.fullWidth}{
    padding-left: ${props=> props.$orientation ? '52px': 'unset'};
  }
  ${media.tablet}{
    padding-left: ${props=> props.$orientation ? '.55vw': 'unset'};
  }
  ${media.mobile}{
    padding-left: unset;
    align-self:${props=> props.$orientation ? 'center':'center'};
    text-align: center;
  }
`
const HeroImage = styled.img`
  max-height: ${props=> props.$orientation ? "55.611vw" : "auto"};
  width:${props=> props.$orientation ? "27.778vw" : "40%"};
  border-radius:15px;

  ${media.fullWidth} {
    max-height: ${props=> props.$orientation ? "700px" : "auto"};
    width:${props=> props.$orientation ? "400px" : "40%"};
  }
  
  ${media.tablet} {
    max-height: ${props=> props.$orientation ? "68.359vw" : "auto"};
    width:${props=> props.$orientation ? "39.063vw" : "45%"};
  }
  
  ${media.mobile} {
    max-height: ${props=> props.$orientation ? "148vw" : "auto"};
    width:${props=> props.$orientation ? "75vw" : "90%"};
  }
`
const BodyHeadline = styled.h3`
  ${text.h3}
  color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  
  ${media.fullWidth} {
  
  }
  
  ${media.tablet} {
  
  }
  
  ${media.mobile} {
  text-align: center;
  }
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  ${text.bodyM};
  p {
    color: ${props => (props.$color ? colors[props.$color] : "inherit")};
  }
  b {
    font-weight: bolder;
    font-size: larger;
  }
  ${media.fullWidth} {
  
  }
  
  ${media.tablet} {
    ${text.bodyM}
  }
  
  ${media.mobile} {
  ${text.bodyL}
  }
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageAndContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => props.$side ? "row-reverse" : "row"};
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
    gap:${props=> props.$orientation ? '5vw':'19.467vw'};
    flex-direction: column-reverse;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
