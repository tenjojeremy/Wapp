import React, { memo, Fragment } from 'react'

import websites from '../../../../data/websites'

import Website from './website'

const Libraries = () => {
  return websites.map((website) => (
    <Fragment key={website.name}>
      <Website {...website} />
    </Fragment>
  ))
}

export default memo(Libraries)
