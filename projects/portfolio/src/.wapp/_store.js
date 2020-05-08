import React, { cloneElement } from 'react'

import { IsOnlineProvider } from '../.wapp/_network/isOnline.state.js'
import { CarouselProvider } from '../common/carousel/carousel.state.js'

const providers = [<IsOnlineProvider key={1} />, <CarouselProvider key={2} />]

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  )

const ContextProvider = ({ children }) => (
  <ProviderComposer contexts={providers}>{children}</ProviderComposer>
)

export default ContextProvider
