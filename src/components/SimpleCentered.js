import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';
const SimpleCentered = ({content}) => {
  console.log(content);
  
  return (
    <Wrapper>
      <Headline>{content.headline}</Headline>
    </Wrapper>
  )
}

export default SimpleCentered;
const Headline = styled.h2`
${text.h2}
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`