import React from 'react'
import styled from "styled-components";


const AdsSecond = () => {
  return (
    <adsContainer className='bg-[#D9D9D9] custom__style h-[122px]'>
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

