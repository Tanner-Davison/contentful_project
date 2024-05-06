import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useEffect } from "react"
import styled from "styled-components"
import colors from "styles/colors"
import media from "styles/media"
import text from "styles/text"
import CautionTape from "./ComponentBreakers/CautionTape"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)

const PinnedScrollLayout = ({ content }) => {
  const doc2Rec = documentToReactComponents
  const parsedText = text => (text ? JSON.parse(text, null, 2) : null)
  let par1 = doc2Rec(parsedText(content?.bodySectionOne?.raw))
  let par2 = doc2Rec(parsedText(content?.bodySectionTwo?.raw))
  let par3 = doc2Rec(parsedText(content?.bodySectionThree?.raw))
  let par4 = doc2Rec(parsedText(content?.bodySectionFour?.raw))

  const textParagraphs = [par1, par2, par3, par4]

  useEffect(() => {

    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    })

    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    )
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")
    gsap.set(photos, { yPercent: 101, borderRadius: "100%" })

    const allPhotos = gsap.utils.toArray(".desktopPhoto")

    details.forEach((detail, index) => {
      let headline = detail.querySelector("h2")
      let Border = document.querySelector(".desktopPhotos")
      let animation = gsap
        .timeline()
        .to(photos[index], { yPercent: 0, borderRadius: "10px" }, 0)
        .set(allPhotos[index], { autoAlpha: 0 })

      ScrollTrigger.create({
        trigger: headline,
        start: "top 80%",
        end: "top 10%",
        animation: animation,
        scrub: true,
        markers: false,
      })
    })
    return () => {
     
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <Wrapper>
      <CautionTape />
      <Gallery  className="gallery">
        <Left id='target' className='target'>
          <DetailsWrapper className="desktopContent">
            {content?.leftHeaders.map((headline, index) => {
              return (
                <Details key={index} className="desktopContentSection">
                  <Headline className="headline">{headline}</Headline>
                  <Text key={index} className="text">
                    {textParagraphs[index]}
                  </Text>

                  <TextImage
                    src={content?.textBodyImages[index]?.file?.url}
                    alt={content?.textBodyImages[index]?.title}
                  />
                </Details>
              )
            })}
          </DetailsWrapper>
        </Left>
        <Right className="right">
          <DesktopPhotos className="desktopPhotos">
            {content?.imagesArray.map((img, index) => (
              <Photos
                key={index}
                className={"desktopPhoto"}
                src={img?.file?.url}
                alt={img?.title}
              />
            ))}
          </DesktopPhotos>
        </Right>
      </Gallery>
    </Wrapper>
  )
}

export default PinnedScrollLayout
const Spacer = styled.div`
  width: 100%;
  height: 25vh;
  background: #ddd;
`
const Photos = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
    width: 90%;
  height: 100%;
  }


  ${media.mobile} {
  }
`
const DesktopPhotos = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50vw;
  border-radius: 0.694vw;
  overflow: hidden;
  ${media.fullWidth} {
    width: 648px;
    height: 720px;
    border-radius: 20px;
  }

  ${media.tablet} {
    width: 90%;
    height: 73vw;
  }

  ${media.mobile} {
    height: 85%;
    width: 100%;
    align-self: flex-start;
  }
`

const Right = styled.div`
position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 100vh;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.fullWidth} {
  }

  ${media.tablet} {
    height: 100vh;
    width:50%;
  }

  ${media.mobile} {
    width: 40%;
    height: 45vh;
  }
`
const TextImage = styled.img`
  max-height: 20.833vw;
  margin: 6.944vw 0vw;
  border-radius: 3.472vw;

  ${media.fullWidth} {
    max-height: 300px;
    margin: 100px 0px;
    border-radius: 50px;
  }

  ${media.tablet} {
    width: 75%;
    margin: 4.883vw 0vw;
    border-radius: 4.883vw;
    align-self: flex-start;
  }

  ${media.mobile} {
    width: 85%;
    max-height: 40vw;
    margin: 11.682vw 0vw;
    border-radius: 5.841vw;
    align-self: flex-start;
  }
`
const Text = styled.div`
  ${text.bodyL}
  text-align: flex-start;
  align-self: flex-start;
  margin: unset;
  border-radius: 0.417vw;
  
  b {
    color: ${colors.darkOrange};
  }
  ul {
    list-style-position: outside;
    list-style-type: circle;
  }
  ${media.fullWidth} {
    border-radius: 6px;
  }
  ${media.tablet} {
    
    ${text.m}
  }
  ${media.mobile} {
    ${text.m2}
    ul {
      padding-left: 2.168vw;
    }
  }
`
const Headline = styled.h2`
  ${text.h2}
  align-self: flex-start;
  margin: unset;
  border-radius: 0.417vw;
 
  ${media.fullWidth} {
    border-radius: 6px;
    padding: 10px;
  }

  ${media.tablet} {
    ${text.h2}
  }

  ${media.mobile} {
    ${text.h3}
  }
`
const Details = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.042vw;
  border-top: 0.347vw solid white;

  ${media.fullWidth} {
    padding-top: 15px;
    border-top: 5px solid white;
  }

  ${media.tablet} {
    min-height: 45vh;
    margin-bottom: 15.297vw;
    :first-child {
      margin-top: 5.93vw;
    }
  }

  ${media.mobile} {
    min-height: 50vh;
    margin-bottom: 11.682vw;
    padding-top: 5.505vw;
  }
`

const DetailsWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
  > :first-child {
    border-top: unset;
    justify-content: center;
    margin-top: 10.417vw;
  }

  width: 70%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
    width:75%;
  }

  ${media.mobile} {
    width: 85%;
    > :first-child {
      margin-top: unset;
      justify-content: flex-start;
    }
  }
`

const Left = styled.div`
position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 50%;

  ${media.fullWidth} {
    width:50%;
  }

  ${media.tablet} {
    width: 50%;
   
  }

  ${media.mobile} {
    width: 60%;
  }
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  justify-content: space-around;
 
  width: 100vw;
  color: white;

  ${media.fullWidth} {
    
    width: 1440px;
  }

  ${media.tablet} {
    width:100vw;
    
  }

  ${media.mobile} {
    gap: unset;
    width:100vw;
    padding-top: 11.682vw;
    
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100vw;
`
