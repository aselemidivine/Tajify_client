import React from 'react'
import styled from "styled-components";


const AdsSecond = () => {
  return (
    <adsContainer className='custom__style'>
      ads
    </adsContainer>
  )
}

export default AdsSecond

const adsContainer = styled.div`
.custom__style {
  background: #d9d9d9;
  width: 728px;
  height: 90px;
}
`;

