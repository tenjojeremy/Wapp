import React from 'react'
import useAuth from '@tenjojeremy/web-toolkit/build/Authentication/UseAuth/useAuth.index.js'
import Route from '@tenjojeremy/web-toolkit/build/Authentication/Router/Route/route.index.js'

export default (props) => <Route authState={useAuth} {...props} />
