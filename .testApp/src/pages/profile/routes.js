import { Route, Switch } from '@tenjojeremy/wapp-build/navigation/router'

import ProfileTemplate from '../profile'

export default () => (
  <Route
    path='/'
    render={() => (
      <ProfileTemplate>
        <Route exact path='/' render={() => <div>this is content</div>} />
      </ProfileTemplate>
    )}
  />
)
