import React from 'react'
import useAuth from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/useAuth.index.js'
import Route from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/Router/route.js'

export default (props) => <Route authState={useAuth} {...props} />
