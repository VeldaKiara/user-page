import '@/styles/globals.css'
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
