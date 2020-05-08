import React, { memo } from 'react'
import Box from '@tenjojeremy/wapp-build/dataDisplay/box'
import Typography from '@tenjojeremy/wapp-build/dataDisplay/typography'
import Icon from '@tenjojeremy/wapp-build/dataDisplay/icon'
import List from '@tenjojeremy/wapp-build/dataDisplay/list'
import Image from '@tenjojeremy/wapp-build/media/image'
import Link from '@tenjojeremy/wapp-build/navigation/link'
import Button from '@tenjojeremy/wapp-build/input/button/styles/base'
import LazyLoad from '@tenjojeremy/wapp-build/utils/rendering/lazyLoad'

import useCarousel from '../../../../../common/carousel/carousel.state'

import { defaultProps, propTypes } from './propTypes'
import * as styles from './styles'

const Website = ({
  name,
  color,
  description,
  position,
  techList,
  backgroundImage,
  screenshots,
  site,
}) => {
  const { updateCarousel } = useCarousel()

  const handleScreenshotClick = (index) => updateCarousel(screenshots, index)

  return (
    <LazyLoad offset={300}>
      <Box styles={styles.wrapper(color, backgroundImage)}>
        <Box styles={styles.innerWrapper}>
          <Box styles={styles.infoWrapper}>
            <Box styles={styles.titlesWrapper}>
              <Typography styles={styles.titles} text={name} variant='headerTwo' />
              <Typography
                styles={{ ...styles.titles, ...styles.position }}
                text={position}
                variant='subtitle1'
              />
            </Box>

            <Typography styles={styles.description} text={description} variant='body1' />

            <Box styles={styles.techListWrapper}>
              <Typography
                styles={styles.techListTitle}
                text='Tech used:'
                variant='body1'
              />

              <Box styles={styles.techList}>
                {techList.map((tech) => (
                  <Icon
                    key={tech}
                    name={`${tech}/1`}
                    width='auto'
                    height='20px'
                    style={styles.icon}
                    plain
                  />
                ))}
              </Box>

              <List photoGrid style={{ maxHeight: '200px', overflow: 'auto' }}>
                {screenshots.map((screenshot, index) => (
                  <Image
                    key={screenshot}
                    src={screenshot}
                    styles={styles.screenshots}
                    onClick={() => handleScreenshotClick(index)}
                  />
                ))}
              </List>

              {site && (
                <Link
                  href={site}
                  styles={{ margin: ['--0 auto', '--0 auto', '--initial'], padding: 'm' }}
                >
                  <Button text='DEMO' />
                </Link>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </LazyLoad>
  )
}

Website.defaultProps = defaultProps
Website.propTypes = propTypes

export default memo(Website)
