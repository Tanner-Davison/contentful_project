import React, { useEffect } from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import vaultguy1 from "../images/vaultguy1.webp"
import CautionTape from "./ComponentBreakers/CautionTape"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)

const PinnedScrollLayout = ({ content }) => {
  console.log(content)
  const parsedText = text => {
    if (text) {
      return JSON.parse(text, null, 2)
    } else {
      return null
    }
  }
  let par1 = parsedText(content?.bodySectionOne?.raw)
  let par2 = parsedText(content?.bodySectionTwo?.raw)
  let par3 = parsedText(content?.bodySectionThree?.raw)
  let par4 = parsedText(content?.bodySectionFour?.raw)
  console.log(par2)
  let textParagraphs = [
    documentToReactComponents(par1),
    documentToReactComponents(par2),
    documentToReactComponents(par3),
    documentToReactComponents(par4),
  ]
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    })
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
  }, [])

  return (
    <>
      <CautionTape />
      <Gallery className="gallery">
        <Left>
          <DetailsWrapper className="desktopContent">
            {content?.leftHeaders.map((headline, index) => {
              console.log(index)

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
              <>
                <Photos
                  className={"desktopPhoto"}
                  src={img?.file?.url}
                  alt={img?.title}
                />
              </>
            ))}
          </DesktopPhotos>
        </Right>
      </Gallery>
    </>
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
  border: 3px transparent silver;
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`
const DesktopPhotos = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 50vw;
  border-radius: 10px;

  position: relative;
  overflow: hidden;
  ${media.fullWidth} {
    width: 648px;
    height: 720px;
    border-radius: 20px;
  }

  ${media.tablet} {
    width: 100%;
    height: 73vw;
  }

  ${media.mobile} {
    height: 85%;
    width:100%;
    align-self: flex-start;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100vh;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.fullWidth} {
  }

  ${media.tablet} {
    height: 80vh;
  }

  ${media.mobile} {
    width: 50%;
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
    width: 98%;
    margin: 4.883vw 0vw;
    border-radius: 4.883vw;
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
  text-align: left;
  align-self: flex-start;
  margin: unset;
  border-radius: 0.417vw;
  width: 95%;
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
    width: 90;
    ${text.m}
  }
  ${media.mobile} {
    ${text.m3}
    ul {
    padding-left:2.168vw;
  }
  }
`
const Headline = styled.h2`
  ${text.h2}
  align-self: flex-start;
  margin: unset;
  border-radius: 0.417vw;
  padding: 0.694vw;
  ${media.fullWidth} {
    border-radius: 6px;
    padding: 10px;
  }

  ${media.tablet} {
    padding: 10px;
  }

  ${media.mobile} {
  }
`
const Details = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 1.042vw;
  border-top: 0.347vw solid white;

  ${media.fullWidth} {
    margin-bottom: 300px;
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
    margin-bottom:11.682vw;
    padding-top:5.505vw;
  }
`

const DetailsWrapper = styled.div`
  > :first-child {
    border-top: unset;
    justify-content: center;
    margin-top: 150px;
  }

  width: 80%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
    width: 100%;
  }

  ${media.mobile} {
    width: 100%;
    > :first-child {
      margin-top: unset;
      justify-content: flex-start;
    }
  }
`

const Left = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;

  ${media.fullWidth} {
  }

  ${media.tablet} {
    width: 45%;
    margin-left: 25px;
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
  padding: 0vw 3.472vw;
  color: white;

  ${media.fullWidth} {
    padding: 0px 50px;
    max-width: 1440px;
  }

  ${media.tablet} {
    gap: 2.441vw;
  }

  ${media.mobile} {
    gap: unset;
    padding-top: 11.682vw;
  }
`
