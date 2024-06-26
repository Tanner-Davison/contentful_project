import React from "react"

import styled from "styled-components"
import colors from "styles/colors"
import media from "styles/media"
import ContentWidth from "../components/ContentWidth"
import { componentToRender } from "./componentToRender"

const PagesContent = ({ section }) => {
  console.log(section ? section : "unknown")
  console.log(section?.__typename)
  const content = componentToRender(section?.__typename, section)
  return (
    <Section
      $spacing={section?.spacing}
      $fwbackgroundimage={section?.fwBackgroundImage?.sourceUrl}
      $backgroundcolor={section?.backgroundColor}
      $backgroundimage={section?.backgroundImage?.sourceUrl}
    >
      <ContentWidth>{content}</ContentWidth>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: ${props =>
    props.$spacing === "Both"
      ? "5.556vw 0"
      : props.$spacing === "Top"
      ? "5.556vw 0 0 0"
      : props.$spacing === "Bottom"
      ? "0 0 5.556vw 0"
      : props.$spacing === "None"
      ? "0 0 0 0"
      : "5.556vw 0"};
  background: ${props =>
    props.$fwbackgroundimage
      ? `url(${props.$fwbackgroundimage})`
      : props?.$backgroundcolor?.includes("Gradient")
      ? `${colors[props.$backgroundcolor]}`
      : `${colors[props.$backgroundcolor]}`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  ${media.fullWidth} {
    padding: ${props =>
      props.$spacing === "Both"
        ? "80px 0"
        : props.$spacing === "Top"
        ? "80px 0 0 0"
        : props.$spacing === "Bottom"
        ? "0 0 80px 0"
        : props.$spacing === "None"
        ? "0 0 0 0"
        : "80px 0"};
    background-size: cover;
  }

  ${media.tablet} {
    padding: ${props =>
      props.$spacing === "Both"
        ? "5.859vw 0"
        : props.$spacing === "Top"
        ? "5.859vw 0 0 0"
        : props.$spacing === "Bottom"
        ? "0 0 5.859vw 0"
        : props.$spacing === "None"
        ? "0 0 0 0"
        : "5.859vw 0"};
  }

  ${media.mobile} {
    padding: ${props =>
      props.$spacing === "Both"
        ? "9.346vw 0"
        : props.$spacing === "Top"
        ? "9.346vw 0 0 0"
        : props.$spacing === "Bottom"
        ? "0 0 9.346vw 0"
        : props.$spacing === "None"
        ? "0 0 0 0"
        : "9.346vw 0"};
    background-size: 100% 100%;
  }
`
export default PagesContent
