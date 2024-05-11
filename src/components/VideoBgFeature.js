import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import colors from 'styles/colors';
import text from 'styles/text';
import recordSpinning from '../Videos/recordSpinning.mp4';

const VideoBgFeature = ({content}) => {
 const videoSrc = recordSpinning;
 const videoRef = useRef(null);
 console.log(content)

useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <Wrapper>
       <Video ref={videoRef} autoPlay loop muted>
        <source src={videoSrc} type='video/mp4'/>
        Your browser does not support the video tag.
      </Video>
      <ContentWrapper>
      <Content>
        <Header>{content?.header}</Header>
        <BodyDiv>{content?.videoPageBody}</BodyDiv>
        <Author>{content?.quotedBy}-</Author>
      </Content>
      <LearnMore>{content?.linkText}</LearnMore>
      </ContentWrapper>
    </Wrapper>
  )
}

export default VideoBgFeature
const LearnMore = styled.div`
${text.bodyMBold}
color:white;
display: flex;
align-items: center;
justify-content: center;
height:fit-content;
margin:0px 0px 0px 50px;
padding:3px 14px;
border:5px solid whitesmoke;
border-radius:20px;
align-self: center;
color:white;
`
const Author = styled.p`
${text.bodyMQuigley}
margin:unset;


`
const BodyDiv = styled.div`
${text.bodyM}
width:80%;
text-align:right;
`
const Header = styled.h2`
${text.h2}
margin:unset;
margin-bottom:0.694vw;
text-align: right;
`
const Content = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
padding:50px 1vw 3.472vw 3.472vw;
color:white;
border-radius:0px;
border-right: 3px ridge white;
width: 50%;
gap:10px;
`
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: grayscale(75%); 
  `;
  const ContentWrapper = styled.div`
  display: flex;
  flex-direction:row;
  width: 100%;
  `
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50vh; 
    overflow: hidden;
  `;