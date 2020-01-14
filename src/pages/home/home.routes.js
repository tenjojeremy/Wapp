import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Explore = lazy(() => import(/* webpackChunkName: 'Explore' */ './home.index'))

export default () => (
  <Switch>
    <Route
      path='/'
      render={() => (
        <>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path='/' render={() => <Explore />} />
            </Switch>
          </Suspense>
        </>
      )}
    />
  </Switch>
)
