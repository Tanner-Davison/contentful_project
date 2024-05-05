import React from 'react'
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';

const FwBgCenteredContent = ({content}) => {
    console.log(content);
    
  return (
    <Wrapper $bgimg={content?.bgImage?.url}>
      <ContentDiv $orientation={content?.rowOrColumn}>
        <Header>
            <Eyebrow>{content?.eyebrow}</Eyebrow>
            {content?.header}</Header>
        <Body>{content?.body?.body}</Body>
      </ContentDiv>
    </Wrapper>
  )
}

export default FwBgCenteredContent
const Body = styled.p`
text-align: center;
${text.bodyM}
color:white;
`
const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: space-between;
${text.h1}
color: #ffffff;
border-radius:3.472vw;
${media.fullWidth} {
    border-radius:50px;
}

${media.tablet} {
    border-radius:4.883vw;
    
}

${media.mobile} {
    border-radius:11.682vw;
}
`
const Eyebrow = styled.p`
${text.eyebrow}
`
const ContentDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
backdrop-filter: blur(5px);
width:45%;
${media.fullWidth} {

}

${media.tablet} {
    width:50%;
}

${media.mobile} {
width:85%;
}
`
const Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-image: ${props => props.$bgimg ? `url(${props.$bgimg})` : 'none'};
background-repeat: no-repeat;
background-position: center 12px;
background-size: contain;
width:100%;
height:50vh;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Adjust opacity (0.5 is semi-transparent) */
  }
`