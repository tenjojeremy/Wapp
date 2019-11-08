import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Explore = lazy(() =>
  import(/* webpackChunkName: 'Explore' */ './access.index')
)

export default () => (
  <Switch>
    <Route
      path="/access"
      render={() => (
        <>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/access" render={() => <Explore />} />
            </Switch>
          </Suspense>
        </>
      )}
    />
  </Switch>
)

export const config = {
  template: 'core'
}
