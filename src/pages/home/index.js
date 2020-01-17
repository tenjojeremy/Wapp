import React, { memo } from 'react'
import Box from '@tenjojeremy/web-toolkit/dataDisplay/box'
import Image from '@tenjojeremy/web-toolkit/media/image'
import Typography from '@tenjojeremy/web-toolkit/dataDisplay/typography'

import logo from '../../../bin/defaults/images/logo/logo.svg'

const Home = () => {
  return (
    <Box
      fullscreen
      styles={{ alignCenter: 'center', alignContent: 'center', justifyContent: 'center' }}
    >
      <Box>
        <Image src={logo} />
        <Typography text='Wapp' />
      </Box>
    </Box>
  )
}

export default memo(Home)
