import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import media from '../../styles/media';

const CautionTapeWrapper = styled.div`
display: flex;
  position: relative;
  height: 1.389vw; /* Adjust the height of the caution tape */
  overflow: hidden;
  width:100%;
  ${media.fullWidth} {
  height:20px;
  }
  
  ${media.tablet} {
  height:1.953vw;
  }
  
  ${media.mobile} {
  height:2.336vw;
  }
`;

const CautionTape = styled.div`
position: relative;
  width: 200%; /* Double the width for infinite loop */
  height: 100%;
background: linear-gradient(45deg, 
  black 5%, /* One black stripe */
  yellow 5%, /* One yellow stripe */
  yellow 10%, /* Two yellow stripes */
  black 10%, /* Two black stripes */
  black 15%, /* Three black stripes */
  yellow 15%, /* Three yellow stripes */
  yellow 20%, /* Four yellow stripes */
  black 20%, /* Four black stripes */
  black 25%, /* Five black stripes */
  yellow 25%, /* Five yellow stripes */
  yellow 30%, /* Six yellow stripes */
  black 30%, /* Six black stripes */
  black 35%, /* Seven black stripes */
  yellow 35%, /* Seven yellow stripes */
  yellow 40%, /* Eight yellow stripes */
  black 40%, /* Eight black stripes */
  black 45%, /* Nine black stripes */
  yellow 45%, /* Nine yellow stripes */
  yellow 50%, /* Ten yellow stripes */
  black 50%, /* Ten black stripes */
  black 55%, /* Eleven black stripes */
  yellow 55%, /* Eleven yellow stripes */
  yellow 60%, /* Twelve yellow stripes */
  black 60%, /* Twelve black stripes */
  black 65%, /* Thirteen black stripes */
  yellow 65%, /* Thirteen yellow stripes */
  yellow 70%, /* Fourteen yellow stripes */
  black 70%, /* Fourteen black stripes */
  black 75%, /* Fifteen black stripes */
  yellow 75%, /* Fifteen yellow stripes */
  yellow 80%, /* Sixteen yellow stripes */
  black 80%, /* Sixteen black stripes */
  black 85%, /* Seventeen black stripes */
  yellow 85%, /* Seventeen yellow stripes */
  yellow 90%, /* Eighteen yellow stripes */
  black 90%, /* Eighteen black stripes */
  black 95%, /* Nineteen black stripes */
  yellow 95% /* Nineteen yellow stripes */
);
`;
const CautionTapeTwo = styled.div`
  position: absolute;
  left:-100%;
  width: 200%; /* Double the width for infinite loop */
  height: 100%;
background: linear-gradient(45deg, 
  black 5%, /* One black stripe */
  yellow 5%, /* One yellow stripe */
  yellow 10%, /* Two yellow stripes */
  black 10%, /* Two black stripes */
  black 15%, /* Three black stripes */
  yellow 15%, /* Three yellow stripes */
  yellow 20%, /* Four yellow stripes */
  black 20%, /* Four black stripes */
  black 25%, /* Five black stripes */
  yellow 25%, /* Five yellow stripes */
  yellow 30%, /* Six yellow stripes */
  black 30%, /* Six black stripes */
  black 35%, /* Seven black stripes */
  yellow 35%, /* Seven yellow stripes */
  yellow 40%, /* Eight yellow stripes */
  black 40%, /* Eight black stripes */
  black 45%, /* Nine black stripes */
  yellow 45%, /* Nine yellow stripes */
  yellow 50%, /* Ten yellow stripes */
  black 50%, /* Ten black stripes */
  black 55%, /* Eleven black stripes */
  yellow 55%, /* Eleven yellow stripes */
  yellow 60%, /* Twelve yellow stripes */
  black 60%, /* Twelve black stripes */
  black 65%, /* Thirteen black stripes */
  yellow 65%, /* Thirteen yellow stripes */
  yellow 70%, /* Fourteen yellow stripes */
  black 70%, /* Fourteen black stripes */
  black 75%, /* Fifteen black stripes */
  yellow 75%, /* Fifteen yellow stripes */
  yellow 80%, /* Sixteen yellow stripes */
  black 80%, /* Sixteen black stripes */
  black 85%, /* Seventeen black stripes */
  yellow 85%, /* Seventeen yellow stripes */
  yellow 90%, /* Eighteen yellow stripes */
  black 90%, /* Eighteen black stripes */
  black 95%, /* Nineteen black stripes */
  yellow 95% /* Nineteen yellow stripes */
);
`;

const CautionTapeComponent = () => {

  useEffect(() => {
    const tape = document.querySelectorAll('.tapeRef');
    const tl = gsap.timeline({ repeat: -1 })
    .to(tape, { duration:25, x: '100%', ease:'linear'})
    

  }, []);

  return (
    <CautionTapeWrapper>
      <CautionTape className={'tapeRef'} >
      <CautionTapeTwo className={'tapeRef2'} />
      </CautionTape>
    </CautionTapeWrapper>
  );
};

export default CautionTapeComponent;