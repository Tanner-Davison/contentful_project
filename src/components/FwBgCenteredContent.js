import React from "react"
import styled from "styled-components"
import media from "styles/media"
import text from "styles/text"
import {scrollToElement} from "../utils/scrollTo"

const FwBgCenteredContent = ({ content }) => {
  console.log(content)
  const handleClick =()=>{
    scrollToElement("#target")
  }
  return (
    <Wrapper $bgimg={content?.bgImage?.url}>
      <ContentDiv $orientation={content?.rowOrColumn}>
        <Header>
          <Eyebrow>{content?.eyebrow}</Eyebrow>
          {content?.header}
        </Header>
        <Button type='button'onClick={handleClick}>Scroll to Start</Button>
        <Body>{content?.body?.body}</Body>
      </ContentDiv>
    </Wrapper>
  )
}

export default FwBgCenteredContent
const Button = styled.button`
z-index: 3;
`
const Body = styled.p`
  text-align: center;
  ${text.bodyM}
  color:white;
  width: 75%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
    ${text.bodyL}
    width:70%;
  }

  ${media.mobile} {
    width: 80%;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  ${text.h1}
  color: #ffffff;
  border-radius: 3.472vw;
  ${media.fullWidth} {
    border-radius: 50px;
  }

  ${media.tablet} {
    border-radius: 4.883vw;
    ${text.h1}
  }

  ${media.mobile} {
    border-radius: 11.682vw;
  }
`
const Eyebrow = styled.p`
  ${text.eyebrow}
`
const ContentDiv = styled.div`
z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(0.208vw);
  background-color: rgba(0, 0, 0, 0.4);
  width: 35%;
  -webkit-box-shadow: inset 1px -1px 19px 1px #ffffff, 1px 0px 15px 1px #FF8000;
  box-shadow: inset 1px -1px 19px 1px #ffffff, 1px 0px 15px 1px #FF8000 ;
  border-radius: 1.736vw;
  padding: 1.042vw 1.736vw;
  ${media.fullWidth} {
    backdrop-filter: blur(3px);
    -webkit-box-shadow: inset 1px -1px 19px 1px #ffffff,
      1px -1px 25px 1px #ccddaa;
    box-shadow: inset 1px -1px 19px 1px #ffffff, 1px 0px 15px 1px #FF8000;
    border-radius: 25px;
    padding: 15px 25px;
  }

  ${media.tablet} {
    width: 50%;
    height: 40vh;
    border-radius: 3.418vw;
    backdrop-filter: blur(5px);
    -webkit-box-shadow: inset 0.098vw -0.098vw 1.855vw 0.098vw #ffffff,
      0.098vw -0.098vw 2.441vw 0.098vw #FF8000;
    box-shadow: inset 0.098vw -0.098vw 1.855vw 0.098vw #ffffff,
      0.098vw -0.098vw 2.441vw 0.098vw #FF8000;
  }

  ${media.mobile} {
    width: 85%;
    border-radius: 8.178vw;
    backdrop-filter: blur(5px);
    -webkit-box-shadow: inset 0.234vw -0.234vw 4.439vw 0.234vw #ffffff,
      0.234vw -0.234vw 5.841vw 0.234vw #FF8000;
    box-shadow: inset 0.234vw -0.234vw 4.439vw 0.234vw #ffffff,
      0.234vw -0.234vw 5.841vw 0.234vw #FF8000;
  }
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    props.$bgimg ? `url(${props.$bgimg})` : "none"};
  background-repeat: no-repeat;
  background-position: center 25px;
  background-size: contain;
  width: 100vw;
  height: 93vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.2
    ); /* Adjust opacity (0.5 is semi-transparent) */
  }
  ${media.fullWidth} {
  }

  ${media.tablet} {
    height: 84vh;
  }

  ${media.mobile} {
    height: 65vh;
    background-position: center bottom -20px;
    padding-top: 50px;
  }
`
