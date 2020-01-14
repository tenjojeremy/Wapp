import React from 'react'
import { BrowserRouter } from '@tenjojeremy/web-toolkit/navigation/router'

import Core from '../templates/core/core.index'

import HomeRoutes from './home/routes'
import ProfileRoutes from './profile/routes'

const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Core>
        <HomeRoutes />
        <ProfileRoutes />
      </Core>
    </BrowserRouter>
  )
}

export default RouterWrapper
