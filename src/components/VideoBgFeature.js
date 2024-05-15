import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';
import recordSpinning from '../Videos/recordSpinning.mp4';
import gsap from 'gsap'

const VideoBgFeature = ({content}) => {
 const videoSrc = recordSpinning;
 const videoRef = useRef(null);


useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
    const contentMusic = document.querySelector('.contentMusic')
    const buttonMusic = document.querySelector('.musicButton')

    const tl = gsap.timeline({paused:false})
  .from(contentMusic,{xPercent:200, duration:2, ease:'back.out'})
  .from(buttonMusic,{opacity:0})
  }, []);

  return (
      <BackgroundBlack>
    <Wrapper>
       <Video ref={videoRef} autoPlay loop muted>
        <source src={videoSrc} type='video/mp4'/>
        Your browser does not support the video tag.
      </Video>
      <ContentWrapper>
      <Content className='contentMusic'>
        <Header>{content?.header}</Header>
        <BodyDiv>{content?.videoPageBody}</BodyDiv>
        <Author>- {content?.quotedBy}</Author>
      </Content>
      <LearnMore className='musicButton'>{content?.linkText}</LearnMore>
      </ContentWrapper>
    </Wrapper>
      </BackgroundBlack>
  )
}

export default VideoBgFeature
const LearnMore = styled.div`
cursor: pointer;
${text.bodyMBold}
color:white;
display: flex;
align-items: center;
justify-content: center;
height:fit-content;
align-self: center;
margin:0px 0px 0px 50px;
padding:2px 14px;
border:2px solid whitesmoke;
border-radius:20px;
transition:transform .3s ease-in-out;
&:hover{
  transform:scale(1.1);
}
z-index: 2;
`
const Author = styled.p`
${text.bodyMQuigley}
margin:unset;


`
const BodyDiv = styled.div`
${text.bodyM}
width:80%;
text-align:right;
${media.fullWidth} {
  width:60%;

}

${media.tablet} {

}

${media.mobile} {

}
`
const Header = styled.h2`
${text.h2}
margin:unset;
text-align: right;
margin-bottom:0.694vw;
${media.fullWidth} {
  margin-bottom:10px;
}

${media.tablet} {

}

${media.mobile} {

}
`
const Content = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
padding:50px 0.972vw 3.472vw 3.472vw;
color:white;
border-radius:0px;
border-right: 3px ridge white;
width: 50%;
gap:10px;
${media.fullWidth} {
  border-radius:0px;
border-right: 3px ridge white;
  padding:3.472vw 14px 50px 50px;
  gap:10px;
}

${media.tablet} {

}

${media.mobile} {

}
`
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 0;
  filter: grayscale(75%); 
  `;
  const ContentWrapper = styled.div`

  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  `
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    width:100%;
    height: 50vh; 
    overflow: hidden;
    ${media.fullWidth} {
    width:100%;
    }
    
    ${media.tablet} {
    
    }
    
    ${media.mobile} {
    
    }
  `;
  const BackgroundBlack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey500};
  width: 100vw;
  height: auto;
  `