import React from 'react'
import useAuth from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/firebase.index.js'
import Route from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/Router/route.js'

export default (props) => <Route authState={useAuth} {...props} />
