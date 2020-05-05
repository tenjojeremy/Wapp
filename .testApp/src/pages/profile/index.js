import React, { memo } from 'react'

const MyProfile = ({ children }) => {
  return (
    <div>
      <span>Profile page</span>
      <br />
      {children}
    </div>
  )
}

export default memo(MyProfile)
