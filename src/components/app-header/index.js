import React, { memo } from 'react'

import { headerLinks } from "@/common/local-data";

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";

export default memo(function WJAppHeader() {
  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'></a>
        </HeaderLeft>
        <HeaderRight>right</HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

// import React, { memo } from 'react'

// import { NavLink } from 'react-router-dom'
// import { HeaderWrapper } from "./style";

// export default memo(function WJAppHeader() {
//   return (
//     <HeaderWrapper>
//       <div className='content wrap1'></div>
//       <div className='divider'></div>
//     </HeaderWrapper>
//   )
// })
