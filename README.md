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
In your `_app.js`  insert the following code:
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
By default NextJS comes with some prefilled CSS files which is imported as a global stlyesheet from the `@/styles` directly applied to all components of the applications. Import `SaasProvider` component from `@saas-ui/react`package that provides a theme and other UI related configurations to the application. The SaasProvider component is used to wrap any part of the application that requires access to these configurations.
We have the default App function that is rendered for every page in the application.The function takes two props:
- `Component`: is the current page that is being rendered 
- `pageProps`: are the initial props that were passed to the page during server-side rendering.
The App function returns the SaasProvider component, with the Component and pageProps passed as props to the Component. This ensures that the SaasProvider and its related configurations are available to all pages in the application.

### Link Component
We will configure a `linkCompnent` to make Saas UI link work with the NextJS router. This is mainly required for NextJS 13+.
We wil add the `link component` in the `_app.js` file. 

```
import NextLink from 'next/link'
import { SaasProvider, LinkProps  } from '@saas-ui/react'

const Link = (props) => {
  return <NextLink {...props} legacyBehavior />
}
export default function App({ Component, pageProps }) {
  return (
    <SaasProvider linkComponent={Link}>
        <Component {...pageProps} />
    </SaasProvider>
  )
}
```
In the above code `NextLink` is a component from the NextJS library that handles client-side navigation. It is imported and used as a base component for the custom Link component. In this code, it is imported and used as a base component for the custom Link component. The Link component defined is a custom wrapper around the NextLink component. It passess all its props to NextLink along with an additional prop called `legacyBehavior`. This is a custom prop used by the application to modify the behavior of links.The Link component is also passed to the SaasProvider as a prop, so that all links in the application use the custom Link component.

### Creating a User Settings Form

The form component is built on top of the React Hook Form following the WAI(Web Accessibility Initiativ) specifications to make sure forms built with it are inclusive and accessible to all users.

A little background, the React Hook form helps developers build forms in React with less code and performance optimization. This provides a seamless API use to manage states and validations. WAI is an international group that works to improve accessibility of the web by setting guidelines for creating accessible content.
The `Form` component provides particular props to customize the behavior of the form. 

The props include:
- `onSubmit` prop that specifies the function called when the `Form` is submitted.
- `required` prop specifies a field that cannot be empty
- `children` prop specifies content of the form and can be a render prop or a ReactNode
- `context` prop passes context to the form
- `criteriaMode` prop for validation criteria applied
- `defaultValues` specifies default values
- `delayError` delays showing errors until the user stops typing
- `formRef` is the reference to the HTMLFormElement
- `mode` specifies the validation mode
- `onChange` triggered when fields change
- `onError` triggered when there are errors for validation
- `ref` is  a reference to the `useFormReturn` hook
- `resolver` is the resolver function for the form schema.
- `reValidateMode` specifies when to re-validate the form.
- `schema` specifies the form schema and only supports the Yup schema at the moment
- `shouldFocusError` specifies if the form should focus on the first error
-  `shouldUnregister` specifies  if the fields should be unregistered when they are removed
- `shouldUseNativeValidation` specifies if to use the native browser validation

