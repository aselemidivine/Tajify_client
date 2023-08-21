import React from 'react'
import styled from "styled-components";


const Ads = () => {
  return (
    // <adsContainer className='custom__style bg-[#D9D9D9] w-[728px] h-[90px]'>
    <adsContainer className='custom__style'>
      ads
    </adsContainer>
  )
}

export default Ads

const adsContainer = styled.div`
.custom__style {
  background: #d9d9d9;
  width: 728px;
  height: 90px;
}
`;
