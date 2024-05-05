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

    let mm = gsap.matchMedia()
    mm.add("(min-width: 428px)", () => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      )

      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")
      gsap.set(photos, { yPercent: 101, borderRadius:'100%', })

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
    })
  }, [])

  return (
    <>
      <Gallery className="gallery">
        <Left>
          <DetailsWrapper className="desktopContent">
            {content?.leftHeaders.map((headline, index) => {
              console.log(index);
              
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
    position: relative;
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
    height: 504px;
    border-radius: 20px;
  }

  ${media.tablet} {
    width: 100%;
    height: 65vw;
  }

  ${media.mobile} {
    height: 100%;
    width: 100%;
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
    width: 45%;
  }
`
const TextImage = styled.img`
  max-height: 20.833vw;
  margin: 6.944vw 0vw;
  border-radius: 3.472vw;
  ${media.fullWidth} {
    margin: 100px 0px;
  }
  
  ${media.tablet} {
  
  width: 98%;
  margin:4.883vw 0vw;
  border-radius: 4.883vw;
  }
  
  ${media.mobile} {
  
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
  ${media.fullWidth} {
    border-radius: 6px;
  }
  ${media.mobile} {
    ${text.m3}
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
  }

  ${media.mobile} {
  }
`
const Details = styled.div`
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
  }

  ${media.mobile} {
  }
`

const DetailsWrapper = styled.div`
  > :first-child {
    border-top: unset;
    justify-content: center;
    margin-top:150px;
  }

  width: 80%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
    width: 100%;
    
  }

  ${media.mobile} {
    width: 100%;
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
    margin-left:25px;
  }

  ${media.mobile} {
    width: 65%;
  }
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  background: black;

  padding: 0vw 3.472vw;
  color: white;
  ${media.fullWidth} {

  }

  ${media.tablet} {
    gap:25px;
  }

  ${media.mobile} {
  }
`
