import React from "react"

import styled from "styled-components"
import media from "styles/media"
import ContentWidth from "./ContentWidth"
import { componentToRender } from "../utils/componentToRender"

const PagesContent = ({ section }) => {  
  console.log(section);
  console.log(section.componentTitle)
  const content = componentToRender(section?.componentTitle, section)
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
      : props?.$backgroundcolor?.includes("gradient")
      ? `${props.$backgroundcolor}`
      : `#${props.$backgroundcolor}`};
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
