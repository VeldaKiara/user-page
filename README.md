# How To Build A User Setttings Page In Five Minutes

"I want to leave ny footprints in the sands of time" -Beyonce Knowles Carter
In our human lives we constantly search for  

Taking up space. People want to leave footp


In a world where everyone is rushing to create the best plan 

a form of identity 


install next which comes with dependencies like react - react-dom
- next
- eslint
- eslint-config-next
```
npx create-next-app@latest my-site
```

install saas ui 
```
npm i @saas-ui/react @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

set up the povider
wrap the Component with the SaasProvider:
```
import '@/styles/globals.css'
import { SaasProvider } from '@saas-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <SaasProvider>
        <Component {...pageProps} />
    </SaasProvider>
  )
}
```
second step link component
Configure a linkComponent to make the Saas UI Link work with the Next.js router.
The legacyBehavior is only required for Next.js 13+.