import React, { memo } from 'react'
import SrollBackToTop from '@tenjojeremy/wapp-build/dataDisplay/icon/special/srollBackToTop'

import { Content } from './styles'

const Core = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
      <SrollBackToTop iconProps={{ name: 'arrow/feather', size: '15px' }} />
    </>
  )
}

export default memo(Core)
