import React, { Suspense } from 'react'
import { Route, Switch } from '@tenjojeremy/wapp/navigation/router'

import ProfileTemplate from '../profile'

export default () => (
  <Route
    path='/profile'
    render={() => (
      <ProfileTemplate>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path='/' render={() => <div>Profile</div>} />
          </Switch>
        </Suspense>
      </ProfileTemplate>
    )}
  />
)
