import React, { memo } from 'react'

import Libraries from './libraries'
import Websites from './websites'

const projectWrapperId = 'projectWrapper'
export const projectWrapperIdSelector = `#${projectWrapperId}`

const Projects = () => {
  return (
    <div id={projectWrapperId}>
      <Libraries />
      <Websites />
    </div>
  )
}

export default memo(Projects)
