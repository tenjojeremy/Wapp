import React, { memo } from 'react'

const Core = ({ children }) => {
  return (
    <>
      Tempalte Core
      <div>{children}</div>
    </>
  )
}

export default memo(Core)
