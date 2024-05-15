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
    const contentMusic = document.querySelector('.contentMusic')
    const buttonMusic = document.querySelector('.musicButton')
  if (videoRef.current) {
    videoRef.current.playbackRate = 0.8;
    const tl = gsap.timeline({paused:false})
    .from(contentMusic,{xPercent:150,filter:'blur(50px)', duration:3, ease:'back.out'})
    .from(buttonMusic,{opacity:0})
  }
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
${text.bodyM}
cursor: pointer;
color:white;
display: flex;
align-items: center;
justify-content: center;
height:fit-content;
align-self: center;
border:2px solid whitesmoke;
min-width: 6.944vw;
transition:transform .3s ease-in-out;
margin:0px 0px 0px 50px;
padding:2px 14px;
border-radius:20px;
background-color: rgba(0, 0, 0, 0.6);
color:white;
&:hover{
  transform:scale(1.1);
}
z-index: 2;
${media.fullWidth} {
min-width: 100px;
}

${media.tablet} {
  margin:0px 25px 0px 25px;
padding:5px 25px;
text-align: center;
min-width:12.766vw;
}

${media.mobile} {
  margin:0vw 0vw 0vw 3.505vw;
  padding:0.467vw 1.168vw;
  text-align: center;
  ${text.bodySBold}
  min-width:23.364vw;
  align-self: flex-end;
  margin-bottom:7.009vw;
}
`
const Author = styled.p`
${text.bodyMQuigley}
margin:unset;
${media.fullWidth} {

}

${media.tablet} {

}

${media.mobile} {
  
}

`
const BodyDiv = styled.div`
${text.bodyM}
width:80%;
text-align:right;
${media.fullWidth} {
  width:60%;

}

${media.tablet} {
${text.bodyL}
width:85%;
}

${media.mobile} {
  width:100%;
}
`
const Header = styled.h2`
${text.h2}
margin:unset;
text-align: right;

${media.fullWidth} {

}

${media.tablet} {

}

${media.mobile} {
${text.h3}
}
`
const Content = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
padding:0vw 2.986vw 0vw 0vw;
color:white;
border-right: 0.208vw ridge white;
width: 41.667vw;
gap:1.042vw;

${media.fullWidth} {
  border-radius:0px;
  width:40%;
border-right: 3px ridge white;
  padding:50px 43px 50px 50px;
  gap:15px;
}

${media.tablet} {
  border-radius:0vw;
border-right: 0.293vw ridge white;
  padding:0vw 4.199vw 0vw 0vw;
  gap:1.465vw;
  width:60.27vw
}

${media.mobile} {
  padding:0vw 3.271vw 0vw 0vw;
color:white;
border-right: 0.467vw ridge white;
width: 350px;
gap:3.505vw;
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
  width: 100%;
 
  ${media.fullWidth} {
  
  }
  
  ${media.tablet} {
    width: 100%;
  }
  
  ${media.mobile} {
    padding:14.019vw;
    
  }
  `
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85vw;
    padding:0px 25px;
    height: 50vh; 
    border-radius:1.736vw;
      margin-top:3.472vw;
    overflow: hidden;
    ${media.fullWidth} {
      width: 1440px;
      border-radius:25px;
      margin-top:50px;
    }
    
    ${media.tablet} {
      height:40vh;
      width: 80vw;
      border-radius:2.441vw;
      margin-top:4.883vw;
    }
    
    ${media.mobile} {
    height: 40vh;
    width:80vw;
    border-radius:5.841vw;
      margin-top:11.682vw;
    
    }
  `;
  const BackgroundBlack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.transparentGray};
  width: 100vw;
  height: auto;
  width: 100vw;
 
  `