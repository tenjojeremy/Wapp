import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ProfileTemplate from './profile.index'

const MyFavourites = lazy(() =>
  import(/* webpackChunkName: 'MyFavourites' */ './profile.favorites')
)
const EditProfile = lazy(() =>
  import(/* webpackChunkName: 'EditProfile' */ './profile.edit')
)

export default () => (
  <Route
    path="/profile"
    render={() => (
      <ProfileTemplate>
        <Suspense fallback={null}>
          <Switch>
            <Route
              exact
              path="/profile"
              render={() => <Redirect to="/profile/photos" />}
            />
            <Route exact path="/profile/edit" component={EditProfile} />
            <Route exact path="/profile/favourites" component={MyFavourites} />
          </Switch>
        </Suspense>
      </ProfileTemplate>
    )}
  />
)
