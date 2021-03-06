import React, { memo } from 'react'
import Box from '@tenjojeremy/wapp-build/dataDisplay/box'
import Image from '@tenjojeremy/wapp-build/media/image'
import Typography from '@tenjojeremy/wapp-build/dataDisplay/typography'
import Icon from '@tenjojeremy/wapp-build/dataDisplay/icon'
import Link from '@tenjojeremy/wapp-build/navigation/link'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Library = ({ logo, name, description, repo, site, backgroundColor }) => {
  return (
    <Box styles={styles.wrapper} style={{ background: backgroundColor }}>
      <Box styles={styles.titleWrapper}>
        <Image src={logo} styles={styles.logo} />
        <Typography text={name} variant='headerTwo' />
      </Box>
      <Typography text={description} variant='body2' />
      <Box styles={styles.titleWrapper}>
        <Link href={repo}>
          <Icon name='github/1' size='40px' />
        </Link>
        {site && (
          <Link href={site}>
            <Icon name='storybook/1' size='130px' height='auto' />
          </Link>
        )}
      </Box>
    </Box>
  )
}

Library.defaultProps = defaultProps
Library.propTypes = propTypes

export default memo(Library)
