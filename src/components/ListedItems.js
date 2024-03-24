import React from "react"
import styled from "styled-components"
import media from "styles/media"
import colors from "styles/colors"
import text from "styles/text"

const ListedItems = ({ content }) => {
    console.log(content)
  return (
    <Wrapper>
      
      {content?.body && <Body>{content.body}</Body>}
    </Wrapper>
  )
}

export default ListedItems
const ListHeadline = styled.h2`
${text.h2}
`
const Body = styled.p`
  ${text.bodyM}
  color:${colors.primaryblack};
  max-width: 34.722vw;
  b {
    font-weight: bolder;
    font-size: larger;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
