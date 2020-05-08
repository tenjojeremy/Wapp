import React, { memo } from 'react'
import firebase from 'firebase/app'

import Projects from './projects'
import Intro from './intro'

const Home = () => {
  firebase.analytics().logEvent('page_view')
  firebase.analytics().logEvent('page_view_home')

  return (
    <>
      <Intro />
      <Projects />
    </>
  )
}

export default memo(Home)
