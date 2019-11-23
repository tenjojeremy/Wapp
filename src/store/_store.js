import React, { cloneElement } from 'react'
  
import { AuthProvider } from './auth'
import { ExampleProvider } from './example'
import { UserProvider } from './user'
 
 const providers = [
    <AuthProvider key={1} />,<ExampleProvider key={2} />,<UserProvider key={3} />,
 ]
 
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