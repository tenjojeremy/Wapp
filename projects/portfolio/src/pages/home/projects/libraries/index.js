import React, { memo, Fragment } from 'react'

import libraries from '../../../../data/libraries'

import Library from './library'

const Libraries = () => {
  return libraries.map((library) => (
    <Fragment key={library.id}>
      <Library {...library} />
    </Fragment>
  ))
}

export default memo(Libraries)
