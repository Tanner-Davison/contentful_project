import React, { useEffect } from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)

const PinnedScrollLayout = ({ content }) => {
  console.log(content)

  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,
    })
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    })

    let mm = gsap.matchMedia()
    mm.add("(min-width: 600px)", () => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      )
      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

      gsap.set(photos, { yPercent: 101 })

      const allPhotos = gsap.utils.toArray(".desktopPhoto")

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h3")

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 })

        ScrollTrigger.create({
          trigger: headline,
          start: "top 90%",
          end: "top 35%",
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
            {content?.leftHeaders.map((headline, index) => (
              <Details key={index} className="desktopContentSection">
                <Headline className="headline">{headline}</Headline>
                <Text key={index} className="text">
                  {content?.leftBody[index]}
                </Text>
              </Details>
            ))}
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
      <Spacer />
    </>
  )
}

export default PinnedScrollLayout
const Spacer = styled.div`
  width: 100%;
  height: 50vh;
  background: #ddd;
`
const Photos = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
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
  height: 40vw;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    height: 100%;
    width: 100%;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  outline: 1px solid purple;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    width: 45%;
  }
`
const Text = styled.p`
  ${text.bodyL}
  text-align: center;
  margin: unset;
  border-radius: 6px;
  padding: 10px;
  width: 85%;
  ${media.fullWidth} {
  }

  ${media.tablet} {
  }

  ${media.mobile} {
    ${text.m3}
  }
`
const Headline = styled.h3`
  ${text.h3}
  margin: unset;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
`
const Details = styled.div`
  height: 100vh;
  outline: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const DetailsWrapper = styled.div`
  margin: auto;
  width: 80%;
  ${media.fullWidth} {
  
  }
  
  ${media.tablet} {
  
  }
  
  ${media.mobile} {
  width:100%;
  }
`

const Left = styled.div`
  width: 50%;
  ${media.fullWidth} {
  
  }
  
  ${media.tablet} {
  
  }
  
  ${media.mobile} {
  width:65%;
  }
`

const Gallery = styled.div`
  display: flex;
  flex-direction: row-reverse;
  outline: 1px solid red;
  width: 100%;
`
