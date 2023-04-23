# How To Build A User Setttings Page In Five Minutes
As humans, we have an inherent desire to make our mark and leave a lasting impression. Whether it's scribbling on the walls of a classroom or sharing our experiences on a blog, we want to assert our presence and be remembered.

The same desire applies to software applications, where users want to have control over their own space and data, and be part of something bigger. That's why a user settings page is a crucial aspect of any software application that values its users' needs.
 
By following the steps in this tutorial, you will be able to build a user settings page in your SAAS app in just five minutes. The settings page enables your users to take up their space in your application and to  shape their own experience and leave their digital footprint.

In this article we will be using SAAS UI and NextJS.

[SAAS UI](https://saas-ui.dev/docs) is a collection of React components that are reusable designed to make it easier and faster to build a user interface for SAAS applications. [NextJS](https://nextjs.org/docs/guides)is an open source framework built on React. It allows developers to build server side React applications easily, while providing features like automatic code splitting, static site generation and many other features. 

NextJS is mainly used for Saas applications because:
- Server side rendering improves SEO and user experiences
- Automating code splitting allows users to only download the code they need which improves performance
- Static site generation allows code to be served from a CDN for even faster performance
- Built-in API routes makes it easy to build API's without setting up a separate server
- Good developer experience provides features out of the box such as hot module replacement, automatic cde reloading and improve productivity

### Project SetUp
We are using [NextJS](https://nextjs.org/docs/guides) and [SAAS UI](https://saas-ui.dev/docs)

a. Install [NextJS](https://nextjs.org/docs/guides) which comes with dependencies like: react, react-dom, next, eslint and eslint-config-next.
```
npx create-next-app@latest my-site
```
b. Install [SAAS UI](https://saas-ui.dev/docs)
```
npm i @saas-ui/react @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```
### Provider SetUp

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